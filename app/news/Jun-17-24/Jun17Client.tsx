'use client';

import NewsPage from "@/app/components/news/NewsPage";

const Jun17Client = () => {
    return (
        <div>
            <NewsPage 
                heading="Voythos Joins the 5th Cohort of the Science Center Capital Readiness Program"
                media="/images/news/scicent_news.svg"
                bodytext="Voythos is excited to announce that we have been chosen as one of ten companies to join the prestigious Science Center Capital Readiness Program’s 5th cohort. This initiative is designed to encourage life science startups, providing tailored guidance in scaling operations, refining business strategies, and securing investment opportunities. We are thrilled to be collaborating with the Science Center and our fellow cohort members to take Voythos to new heights."
                href="https://sciencecenter.org/news/ten-companies-selected-for-5th-cohort-of-science-center-capital-readiness-program"
                nextpage="/news/May-25-24"
                date="June 17, 2024"
            />
        </div>
    );
}

export default Jun17Client;