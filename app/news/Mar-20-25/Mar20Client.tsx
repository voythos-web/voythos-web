'use client';

import NewsPage from "@/app/components/news/NewsPage";

const Mar20Client = () => {
    return (
        <div>
            <NewsPage 
                heading="Voythos joins Northwestern Medicine and Techstars Healthcare Accelerator"
                media="/images/news/techstar_news.svg"
                bodytext="Voythos is thrilled to join Techstars and Northwestern Medicine’s inaugural accelerator program at the Mansueto Innovation Institute, furthering our mission to transform cardiovascular disease with multimodal AI. This opportunity provides invaluable mentorship, collaboration, and resources to accelerate our commercial readiness."
                href="https://news.nm.org/techstars-and-northwestern-medicine-announce-inaugural-class/"
                nextpage="/news/Feb-18-25"
                date="March 20, 2025"
            />
        </div>
    );
}

export default Mar20Client;