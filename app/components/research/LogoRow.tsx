import Image from "next/image";

// Monochrome logo files live in /public/images/logos. Each entry carries its aspect
// ratio so every logo can be sized to roughly the same visual area, instead of the same
// width or height (which makes wide wordmarks look tiny and stacked marks look huge).

export interface Logo {
    file: string;
    alt: string;
    ratio: number; // width / height of the trimmed PNG
    href?: string;
    weight?: number; // optical correction for very heavy or very light marks (1 = none)
}

export const LOGOS = {
    uchicago: { file: "uchicago", alt: "The University of Chicago Medicine", ratio: 3.53, href: "https://www.uchicagomedicine.org/" },
    montefiore: { file: "montefiore", alt: "Montefiore Medical Center", ratio: 3.83, href: "https://www.montefiore.org/" },
    lahey: { file: "lahey", alt: "Lahey Hospital & Medical Center", ratio: 4.69, href: "https://www.lahey.org/", weight: 1.12 },
    mayo: { file: "mayoclinic", alt: "Mayo Clinic Platform", ratio: 4.76, href: "https://www.mayoclinicplatform.org/" },
    northwestern: { file: "northwestern", alt: "Northwestern Medicine", ratio: 5.33, href: "https://news.nm.org/techstars-and-northwestern-medicine-announce-inaugural-class/" },
    forum: { file: "forum", alt: "Forum Ventures", ratio: 3.03, href: "https://www.forumvc.com/", weight: 0.88 },
    techstars: { file: "techstars", alt: "Techstars", ratio: 5.56, href: "https://www.techstars.com/accelerators/northwestern-medicine-healthcare", weight: 0.95 },
    lifex: { file: "lifex", alt: "LifeX", ratio: 3.13, href: "https://lifexglobal.com/accelerator/", weight: 0.8 },
    scicenter: { file: "scicenter", alt: "Science Center", ratio: 0.805, href: "https://sciencecenter.org/programs/capital-readiness" },
} satisfies Record<string, Logo>;

// Equal-area sizing: height = K / sqrt(ratio), capped so tall marks don't dominate.
const K = 92;
const MAX_H = 64;

function size(logo: Logo, scale: number) {
    const h = Math.min(MAX_H, K / Math.sqrt(logo.ratio)) * (logo.weight ?? 1) * scale;
    return { h: Math.round(h), w: Math.round(h * logo.ratio) };
}

const LogoMark = ({ logo, scale }: { logo: Logo; scale: number }) => {
    const { w, h } = size(logo, scale);
    const img = (
        <Image
            src={`/images/logos/${logo.file}.png`}
            alt={logo.alt}
            width={w}
            height={h}
            style={{ width: w, height: h }}
            className="opacity-80 hover:opacity-100 transition duration-200"
        />
    );
    return logo.href ? (
        <a target="_blank" rel="noopener noreferrer" href={logo.href} aria-label={logo.alt}>
            {img}
        </a>
    ) : img;
};

const LogoRow = ({ logos }: { logos: Logo[] }) => {
    return (
        <>
            <div className="hidden md:flex flex-row flex-wrap items-center gap-x-16 gap-y-10">
                {logos.map((l) => <LogoMark key={l.file} logo={l} scale={1} />)}
            </div>
            <div className="md:hidden flex flex-row flex-wrap items-center gap-x-10 gap-y-8">
                {logos.map((l) => <LogoMark key={l.file} logo={l} scale={0.72} />)}
            </div>
        </>
    );
};

export default LogoRow;
