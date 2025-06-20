'use client';

import NewsPage from "@/app/components/news/NewsPage";

const May25Client = () => {
    return (
        <div>
            <NewsPage 
                heading="Voythos Awarded First Place in LifeX 2023 Accelerator"
                media="/images/news/lifex_news.svg"
                bodytext="Voythos is excited to announce its selection as the top company in the Spring 2023 LifeX Accelerator cohort! This achievement highlights our commitment to transforming healthcare by assisting healthcare providers in diagnosing and managing complex cardiovascular conditions, by offering precise, data-driven insights, ultimately improving patient outcomes. The Spring 2023 Accelerator was an incredible opportunity for us to connect with our peers and industry leaders, providing invaluable insights that helped refine our vision. Winning first place in this is both an honor and a motivator for us to continue our work. "
                href="https://www.linkedin.com/feed/update/urn:li:activity:7072626187344252928/"
                nextpage="/news"
                date="May 25, 2024"
            />
        </div>
    );
}

export default May25Client;