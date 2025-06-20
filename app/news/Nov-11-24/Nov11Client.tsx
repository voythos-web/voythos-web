'use client';

import NewsPage from "@/app/components/news/NewsPage";

const Nov11Client = () => {
    return (
        <div>
            <NewsPage 
                heading="Voythos Recognized as One of the Most Promising Life Science Companies"
                media="/images/news/texaslsci_news.svg"
                bodytext="We are proud to announce our recognition as one of the ten “most promising life science companies” in the 2024 Texas Life Science Forum, which was co-hosted by BioHouston and the Rice Alliance for Technology and Entrepreneurship. Fifty incredible companies pitched to a large group of investors and industry leaders. The event brought together over 700 people to highlight advancements addressing critical healthcare challenges. We are honored by this acknowledgment and remain committed to driving innovation in cardiovascular disease."
                href="https://txlifescienceforum.org/"
                nextpage="/news/Sep-9-24"
                date="November 11, 2024"
            />
        </div>
    );
}

export default Nov11Client;