'use client';

import { useEffect, useRef } from 'react';

/**
 * Full-bleed animated background for the hero: branching vessel trees that
 * grow in on load, with slow pulses of light travelling down each branch.
 * Plain 2D canvas, no dependencies. Pauses when off screen or tab hidden,
 * and renders a single static frame for prefers-reduced-motion.
 */

type Pt = { x: number; y: number };
type Branch = { pts: Pt[]; w: number; depth: number; delay: number; len: number };
type Pulse = { b: number; t: number; speed: number; size: number };

// simple seeded rng so the layout is stable across renders
function rng(seed: number) {
    let s = seed >>> 0;
    return () => {
        s = (s * 1664525 + 1013904223) >>> 0;
        return s / 4294967296;
    };
}

function buildTrees(W: number, H: number, rand: () => number): Branch[] {
    const branches: Branch[] = [];
    const unit = Math.max(W, H);

    const grow = (start: Pt, angle: number, w: number, depth: number, delay: number) => {
        if (depth > 5 || w < 0.45) return;
        const pts: Pt[] = [start];
        const segs = 18 + Math.floor(rand() * 14);
        const step = unit * (0.006 + rand() * 0.004) * (1 - depth * 0.08);
        let a = angle;
        let curl = (rand() - 0.5) * 0.12;
        let p = start;
        for (let i = 0; i < segs; i++) {
            curl += (rand() - 0.5) * 0.05;
            curl *= 0.93;
            a += curl;
            p = { x: p.x + Math.cos(a) * step, y: p.y + Math.sin(a) * step };
            pts.push(p);
        }
        let len = 0;
        for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
        branches.push({ pts, w, depth, delay, len });

        const end = pts[pts.length - 1];
        const kids = depth < 2 ? 2 : rand() < 0.5 ? 2 : 1;
        for (let k = 0; k < kids; k++) {
            const spread = (0.35 + rand() * 0.35) * (k === 0 ? 1 : -1);
            grow(end, a + spread, w * (0.62 + rand() * 0.12), depth + 1, delay + 0.35);
        }
        // occasional side branch from the middle of a segment
        if (depth < 3 && rand() < 0.35) {
            const mid = pts[Math.floor(pts.length * (0.35 + rand() * 0.3))];
            grow(mid, a + (rand() < 0.5 ? 1 : -1) * (0.9 + rand() * 0.4), w * 0.45, depth + 2, delay + 0.2);
        }
    };

    // trunks entering from the edges, angled into the frame
    const trunks: [Pt, number][] = [
        [{ x: -0.02 * W, y: 0.85 * H }, -0.35],
        [{ x: 0.18 * W, y: 1.02 * H }, -1.25],
        [{ x: 1.02 * W, y: 0.15 * H }, Math.PI + 0.3],
        [{ x: 0.72 * W, y: -0.02 * H }, 1.9],
        [{ x: 1.02 * W, y: 0.9 * H }, Math.PI - 0.45],
    ];
    trunks.forEach(([p, a], i) => grow(p, a, 3.2 + rand() * 1.2, 0, i * 0.15));
    return branches;
}

function pointAt(b: Branch, t: number): Pt {
    // t in [0,1] along the branch length
    let target = t * b.len;
    for (let i = 1; i < b.pts.length; i++) {
        const a = b.pts[i - 1];
        const c = b.pts[i];
        const d = Math.hypot(c.x - a.x, c.y - a.y);
        if (target <= d) {
            const f = d === 0 ? 0 : target / d;
            return { x: a.x + (c.x - a.x) * f, y: a.y + (c.y - a.y) * f };
        }
        target -= d;
    }
    return b.pts[b.pts.length - 1];
}

export default function VesselField({ className = '' }: { className?: string }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let W = 0, H = 0, dpr = 1;
        let branches: Branch[] = [];
        let pulses: Pulse[] = [];
        let raf = 0;
        let start = performance.now();
        let visible = true;

        const setup = () => {
            const rect = canvas.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            W = rect.width;
            H = rect.height;
            canvas.width = Math.round(W * dpr);
            canvas.height = Math.round(H * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const rand = rng(7);
            branches = buildTrees(W, H, rand);
            pulses = [];
            const n = Math.min(90, Math.round(branches.length * 0.6));
            for (let i = 0; i < n; i++) pulses.push(newPulse(rand, true));
        };

        const newPulse = (rand: () => number, anywhere = false): Pulse => {
            // bias pulses toward the larger vessels
            let b = Math.floor(rand() * branches.length);
            if (branches[b].depth > 3 && rand() < 0.5) b = Math.floor(rand() * branches.length);
            return {
                b,
                t: anywhere ? rand() : 0,
                speed: 0.08 + rand() * 0.12,
                size: 1 + rand() * 1.6,
            };
        };
        const prand = rng(99);

        const drawVessels = (grow: number) => {
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            for (const b of branches) {
                const local = Math.max(0, Math.min(1, (grow - b.delay) / 0.9));
                if (local <= 0) continue;
                const n = Math.max(2, Math.ceil(b.pts.length * local));
                // soft outer glow
                ctx.beginPath();
                ctx.moveTo(b.pts[0].x, b.pts[0].y);
                for (let i = 1; i < n - 1; i++) {
                    const mx = (b.pts[i].x + b.pts[i + 1].x) / 2;
                    const my = (b.pts[i].y + b.pts[i + 1].y) / 2;
                    ctx.quadraticCurveTo(b.pts[i].x, b.pts[i].y, mx, my);
                }
                ctx.lineTo(b.pts[n - 1].x, b.pts[n - 1].y);
                ctx.strokeStyle = 'rgba(5, 14, 54, 0.10)';
                ctx.lineWidth = b.w * 3.2;
                ctx.stroke();
                // vessel wall
                ctx.strokeStyle = `rgba(235, 240, 252, ${0.22 + 0.18 * (1 - b.depth / 7)})`;
                ctx.lineWidth = b.w;
                ctx.stroke();
            }
        };

        const drawPulses = (dt: number, grow: number) => {
            ctx.globalCompositeOperation = 'lighter';
            for (let i = 0; i < pulses.length; i++) {
                const p = pulses[i];
                const b = branches[p.b];
                if (grow - b.delay < 0.9) continue;
                p.t += (p.speed * dt) / Math.max(0.4, b.len / 400);
                if (p.t >= 1) {
                    pulses[i] = newPulse(prand);
                    continue;
                }
                const pt = pointAt(b, p.t);
                const fade = Math.sin(Math.PI * p.t);
                const r = p.size * (2.5 + b.w);
                const g = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, r * 4);
                g.addColorStop(0, `rgba(255, 255, 255, ${0.9 * fade})`);
                g.addColorStop(0.25, `rgba(219, 227, 242, ${0.35 * fade})`);
                g.addColorStop(1, 'rgba(219, 227, 242, 0)');
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, r * 4, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalCompositeOperation = 'source-over';
        };

        // soften the field behind the headline so copy stays readable
        const clearTextArea = () => {
            const mobile = W < 768;
            const cx = mobile ? W * 0.5 : W * 0.28;
            const cy = mobile ? H * 0.32 : H * 0.52;
            const r = mobile ? W * 0.9 : W * 0.38;
            const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            g.addColorStop(0, 'rgba(0,0,0,0.85)');
            g.addColorStop(0.6, 'rgba(0,0,0,0.5)');
            g.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, W, H);
            ctx.globalCompositeOperation = 'source-over';
        };

        let last = performance.now();
        const frame = (now: number) => {
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            const elapsed = (now - start) / 1000;
            // whole tree grows in over ~3s, then holds
            const grow = Math.min(elapsed * 1.4, 10);
            ctx.clearRect(0, 0, W, H);
            // very slow breathing drift on the whole field
            ctx.save();
            const s = 1 + 0.012 * Math.sin(elapsed * 0.25);
            ctx.translate(W / 2, H / 2);
            ctx.scale(s, s);
            ctx.translate(-W / 2, -H / 2);
            drawVessels(grow);
            drawPulses(dt, grow);
            ctx.restore();
            clearTextArea();
            if (visible) raf = requestAnimationFrame(frame);
        };

        setup();
        if (reduce) {
            drawVessels(10);
            clearTextArea();
        } else {
            raf = requestAnimationFrame(frame);
        }

        const onResize = () => {
            setup();
            if (reduce) { drawVessels(10); clearTextArea(); }
            else start = performance.now() - 10000; // skip the grow-in on resize
        };
        window.addEventListener('resize', onResize);

        const io = new IntersectionObserver(([e]) => {
            const was = visible;
            visible = e.isIntersecting && !document.hidden;
            if (!reduce && visible && !was) {
                last = performance.now();
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(frame);
            }
        });
        io.observe(canvas);
        const onVis = () => {
            const was = visible;
            visible = !document.hidden;
            if (!reduce && visible && !was) {
                last = performance.now();
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(frame);
            }
        };
        document.addEventListener('visibilitychange', onVis);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
            document.removeEventListener('visibilitychange', onVis);
            io.disconnect();
        };
    }, []);

    return <canvas ref={ref} aria-hidden className={`pointer-events-none ${className}`} />;
}
