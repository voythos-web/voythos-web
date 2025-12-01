'use client';

import NewsPage from "@/app/components/news/NewsPage";

const May3Client = () => {
    return (
        <div>
            <NewsPage 
                heading="Voythos featured in Mayo Clinic Platform_ Accelerate showcase"
                media="/images/news/accelerate_news.svg"
                bodytext="Voythos is excited to be part of the current Mayo Clinic Platform_Accelerate cohort recently featured in a program showcase highlighting the companies driving new advances in health technology. As part of the program, we are focused on advancing our multimodal AI platform for the prediction of aortic disease, with the goal of improving patient outcomes through earlier and more accurate intervention."
                href="https://newsnetwork.mayoclinic.org/discussion/mayo-clinic-platform_accelerate-showcase-celebrates-promise-of-health-tech-innovation-for-improving-patient-care/"
                nextpage="/news/Apr-18-25"
                date="May 3, 2025"
            />a
        </div>
    );
}

export default May3Client;