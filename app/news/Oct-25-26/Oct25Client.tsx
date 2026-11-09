'use client';

import NewsPage from "@/app/components/news/NewsPage";

const Oct25Client = () => {
    return (
        <div>
            <NewsPage
                heading="Voythos research presented at the 2026 NESVS Annual Meeting"
                media="/images/news/nesvs-2026.jpg"
                bodytext="Dr. Ilias Doulamis presented &quot;Development of a Risk Prevention Model for Intervention in Acute Type B Aortic Dissection&quot; as a rapid-fire paper at the 53rd Annual Meeting of the New England Society for Vascular Surgery in Stowe, Vermont. The work was done with collaborators at Lahey Hospital & Medical Center, Montefiore Medical Center, and UMass Chan Medical School, alongside the Voythos team. It applies machine learning to one of the hardest calls in vascular surgery: which patients with acute type B dissection will need intervention, and when. Authors: Ilias Doulamis, Pavel Overtchouk, Lilly Fernandes, Sophia Khan, Jordan Graves, Evan Lipsitz, Joe Makoid, and Jeffrey Indes."
                href="https://nesvs.org/wp-content/uploads/2026/06/nesvs-2026-annual-meeting-program.pdf"
                nextpage="/news/Oct-13-26"
                date="October 25, 2026"
            />
        </div>
    );
}

export default Oct25Client;
