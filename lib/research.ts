// Research presented by Voythos and its clinical collaborators.
// Add a `href` when an abstract or poster has a public link.

export interface ResearchItem {
    format: string;
    meeting: string;
    date: string;
    title: string;
    authors: string;
    collaborators: string;
    href?: string;
    linkLabel?: string;
}

export const RESEARCH: ResearchItem[] = [
    {
        format: "Rapid-fire paper",
        meeting: "New England Society for Vascular Surgery, 53rd Annual Meeting",
        date: "October 2026",
        title: "Development of a Risk Prevention Model for Intervention in Acute Type B Aortic Dissection",
        authors:
            "Doulamis I, Overtchouk P, Fernandes L, Khan S, Graves J, Lipsitz E, Makoid J, Indes J",
        collaborators: "Lahey Hospital & Medical Center · Montefiore Medical Center · UMass Chan Medical School",
        href: "https://nesvs.org/wp-content/uploads/2026/06/nesvs-2026-annual-meeting-program.pdf",
        linkLabel: "Meeting program",
    },
    {
        format: "E-poster",
        meeting: "Midwestern Vascular Surgical Society, 2026 Annual Meeting",
        date: "September 2026",
        title: "Machine Learning Prediction of Renal Malperfusion After Acute Type B Aortic Dissection",
        authors: "Khan S, Overtchouk P, Makoid J, Graves J, Milner R",
        collaborators: "The University of Chicago Medicine",
        href: "/images/news/mvss-2026-poster.jpg",
        linkLabel: "View poster",
    },
];

export const RESEARCH_COLLABORATORS = [
    "The University of Chicago Medicine",
    "Montefiore Medical Center",
    "Lahey Hospital & Medical Center",
];
