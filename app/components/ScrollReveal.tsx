'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    /** Additional Tailwind classes applied to the wrapper (e.g. layout/max-width). */
    className?: string;
    /** Optional stagger delay in ms — useful when chaining several reveals in sequence. */
    delay?: number;
}

/**
 * Wraps children in a div that fades + slides up the first time it enters the viewport.
 * Uses IntersectionObserver — no animation library required. Disconnects after triggering
 * so the reveal happens once per page load, not on every scroll-by.
 */
const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = '',
    delay = 0,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        // Respect users who prefer reduced motion — show content immediately, no animation.
        const prefersReducedMotion =
            typeof window !== 'undefined' &&
            window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsInView(true);
            return;
        }

        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
                // start the reveal slightly before the element is fully in view
                rootMargin: '0px 0px -10% 0px',
            },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`
                transition-all duration-700 ease-out
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
