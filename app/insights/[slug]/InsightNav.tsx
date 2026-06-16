'use client';

import { useRouter } from "next/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface InsightNavProps {
    nextSlug: string | null;
}

const InsightNav: React.FC<InsightNavProps> = ({ nextSlug }) => {
    const router = useRouter();

    return (
        <nav className="flex flex-row justify-between md:pb-16 pb-8">
            <div
                className="flex flex-row md:mt-20 mt-6 group cursor-pointer"
                onClick={() => router.push('/insights')}
            >
                <MdKeyboardArrowLeft className="text-zinc-600 text-2xl mt-1 group-hover:opacity-50 group-hover:-translate-x-2 duration-200 ease-in transition" />
                <div className="text-2xl text-zinc-600 group-hover:opacity-50">
                    All insights
                </div>
            </div>
            {nextSlug && (
                <div
                    className="flex flex-row md:mt-20 mt-6 group cursor-pointer"
                    onClick={() => router.push(`/insights/${nextSlug}`)}
                >
                    <div className="text-2xl text-zinc-600 group-hover:opacity-50">
                        Next
                    </div>
                    <MdKeyboardArrowRight className="text-zinc-600 text-2xl mt-1 group-hover:opacity-50 group-hover:translate-x-2 duration-200 ease-in transition" />
                </div>
            )}
        </nav>
    );
};

export default InsightNav;
