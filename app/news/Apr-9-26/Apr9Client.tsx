'use client';

import NewsPage from "@/app/components/news/NewsPage";

const Apr9Client = () => {
    return (
        <div>
            <NewsPage
                heading="Voythos presents at the 2026 MedTech Innovator Radar Forum"
                media="/images/news/medtech-innovator-2026.jpg"
                bodytext="Voythos was selected as a presenting company at the 2026 MedTech Innovator Radar Forum — one of approximately 150 companies chosen from a field of more than 1,800 applicants. The event brought together strategics, investors, providers, and fellow founders for a week in Los Angeles, and gave us a chance to share our work on predictive vascular AI with the kind of audience that asks the hard questions. A great reminder of how much sharper the work gets when you're surrounded by people building in the hard, messy world of medtech."
                href="https://medtechinnovator.org/the-2026-radar-forum-recap-our-biggest-event-yet/"
                nextpage="/news/Jun-3-25"
                date="April 9, 2026"
                gallery={[
                    "/images/news/medtech-innovator-2026-discussion.jpg",
                    "/images/news/medtech-innovator-2026-roundtable.jpg",
                    "/images/news/medtech-innovator-2026-sponsors.jpg",
                ]}
            />
        </div>
    );
}

export default Apr9Client;
