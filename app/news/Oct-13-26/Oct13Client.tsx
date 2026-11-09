'use client';

import NewsPage from "@/app/components/news/NewsPage";

const Oct13Client = () => {
    return (
        <div>
            <NewsPage
                heading="Voythos selected for TechCrunch Startup Battlefield 200"
                media="/images/news/techcrunch-sb200-stage.jpg"
                gallery={["/images/news/techcrunch-sb200.jpg"]}
                bodytext="Voythos was selected for the Startup Battlefield 200 at TechCrunch Disrupt 2026, held October 13 to 15 at Moscone West in San Francisco. Startup Battlefield 200 is TechCrunch's annual selection of early-stage companies, chosen to exhibit at Disrupt and compete for a spot on the main stage. We were glad to bring predictive AI for aortic and vascular disease into the Healthtech track and to meet the investors and founders who came through."
                href="https://www.linkedin.com/company/voythos-ai/"
                nextpage="/news/Sep-17-26"
                date="October 13, 2026"
            />
        </div>
    );
}

export default Oct13Client;
