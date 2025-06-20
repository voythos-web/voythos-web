'use client';

import NewsPage from "@/app/components/news/NewsPage";

const Sep9Client = () => {
    return (
        <div>
            <NewsPage 
                heading="Mayo Clinic Platform Selects Voythos to Join Prestigious Accelerator"
                media="/images/news/accelerate_news_2.svg"
                bodytext="Voythos is thrilled to announce its acceptance into the Mayo Clinic Platform Accelerate, a program designed to support startups at the forefront of healthcare innovation. This is a testament to our mission of redefining healthcare delivery through groundbreaking technology and patient-centered solutions.  Joining the Mayo Clinic Accelerator will allow us to enhance these innovations further, with access to world-class expertise and mentorship from the Mayo Clinic, one of the most respected names in medicine."
                href="https://www.linkedin.com/feed/update/urn:li:activity:7238983555295387648/"
                nextpage="/news/Jun-17-24"
                date="September 9, 2024"
            />
        </div>
    );
}

export default Sep9Client;