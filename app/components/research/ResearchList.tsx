import { font_head, font_med } from "@/app/fonts";
import { RESEARCH } from "@/lib/research";

const ResearchList = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
            {RESEARCH.map((r) => (
                <div
                    key={r.title}
                    className="border border-zinc-300 bg-white flex flex-col md:p-8 p-6"
                >
                    <div className="flex flex-row justify-between items-baseline gap-4">
                        <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                            {r.format}
                        </div>
                        <div className="text-zinc-500 text-sm whitespace-nowrap">
                            {r.date}
                        </div>
                    </div>
                    <div className={`md:text-2xl text-xl text-zinc-800 mt-4 leading-snug ${font_head.className}`}>
                        {r.title}
                    </div>
                    <div className="text-zinc-700 text-base mt-3">
                        {r.meeting}
                    </div>
                    <div className="text-zinc-500 text-sm mt-4 leading-snug">
                        {r.authors}
                    </div>
                    <div className="text-zinc-500 text-sm mt-1 leading-snug flex-1">
                        With {r.collaborators}
                    </div>
                    {r.href && (
                        <a
                            href={r.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group text-zinc-800 text-sm mt-6 inline-flex items-center gap-1.5 hover:text-primary transition ${font_med.className}`}
                        >
                            {r.linkLabel ?? "View"}
                            <span aria-hidden className="group-hover:translate-x-1 transition">→</span>
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ResearchList;
