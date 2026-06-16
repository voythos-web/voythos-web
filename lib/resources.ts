// Resources section config.
//
// Resources is distinct from Blog: it holds cited reports, evidence, and (later)
// interactive tools. Blog stays for short written/opinion pieces.
//
// "The Aortic Leak" is DRAFT v1, pre clinical redline. Three open items still need Joe's
// sign-off (byline/co-author, the [STATE] proof points in the About section, and the
// final CTA destination). Two independent flags so we can soft-launch:
//
// RESOURCES_PUBLISHED — footer link + /aortanavigator cross-link are visible. The section
//   is reachable from public nav.
// RESOURCES_INDEXABLE — search engines may index the pages. Keep this false until the
//   clinical redline is signed off, so the report is publicly reachable but not indexed.
export const RESOURCES_PUBLISHED = true;
export const RESOURCES_INDEXABLE = true;

export interface Resource {
    slug: string;
    title: string;
    description: string;
    kind: string;
    date: string;
}

export const RESOURCES: Resource[] = [
    {
        slug: "aortic-leak",
        title: "The Aortic Leak",
        description:
            "How vascular programs lose the patients they are meant to catch, where the evidence says it happens, and what it costs.",
        kind: "Research report",
        date: "2026-06-15",
    },
];

export function getResource(slug: string): Resource | undefined {
    return RESOURCES.find((r) => r.slug === slug);
}
