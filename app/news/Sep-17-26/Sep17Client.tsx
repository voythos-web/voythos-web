'use client';

import NewsPage from "@/app/components/news/NewsPage";

const Sep17Client = () => {
    return (
        <div>
            <NewsPage
                heading="Voythos presents research on renal malperfusion after acute type B dissection at MVSS 2026"
                bodytext="Voythos presented an e-poster, &quot;Machine Learning Prediction of Renal Malperfusion After Acute Type B Aortic Dissection,&quot; at the Midwestern Vascular Surgical Society 2026 Annual Meeting in Chicago. The study, led by Dr. Sophia Khan with Dr. Ross Milner of The University of Chicago Medicine, looks at whether machine learning can flag which patients presenting with acute type B dissection are likely to develop renal malperfusion. Authors: Sophia Khan, Pavel Overtchouk, Joe Makoid, Jordan Graves, and Ross Milner."
                nextpage="/news/Jul-13-26"
                date="September 17, 2026"
            />
        </div>
    );
}

export default Sep17Client;
