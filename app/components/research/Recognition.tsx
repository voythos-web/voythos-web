import { font_head } from "@/app/fonts";

const ITEMS = [
    { year: "2026", title: "Startup Battlefield 200", org: "TechCrunch Disrupt" },
    { year: "2027 cohort", title: "Enrico Ascher Vascular Innovation Institute", org: "SVS Foundation" },
    { year: "2026", title: "Radar Forum presenting company", org: "MedTech Innovator" },
    { year: "2025", title: "Healthcare Accelerator", org: "Techstars and Northwestern Medicine" },
    { year: "2024", title: "Platform_Accelerate", org: "Mayo Clinic Platform" },
    { year: "2024", title: "Top 10 most promising life science companies", org: "Texas Life Science Forum" },
    { year: "2024", title: "First place", org: "LifeX Accelerator" },
];

const Recognition = () => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-2 border-t border-l border-zinc-300">
            {ITEMS.map((item) => (
                <div key={item.title} className="border-r border-b border-zinc-300 md:p-6 p-4 flex flex-col">
                    <div className="text-primary text-xs tracking-[0.18em] font-mono uppercase">
                        {item.year}
                    </div>
                    <div className={`text-zinc-800 md:text-lg text-base pt-3 leading-snug ${font_head.className}`}>
                        {item.title}
                    </div>
                    <div className="text-zinc-600 text-sm pt-1">
                        {item.org}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recognition;
