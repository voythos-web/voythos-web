'use client';

import NewsPage from "@/app/components/news/NewsPage";

const Jul10Client = () => {
    return (
        <div>
            <NewsPage 
                heading="test"
                media="images/news/download12.jpeg"
                bodytext="test"
                href="https://www.nm.org/"
                nextpage="/news/May-3-25"
                date="July 10, 2025"
            />
        </div>
    );
}

export default Jul10Client;