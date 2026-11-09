import { font_head, font_med } from "@/app/fonts";

interface PipelineRow {
    name: string;
    indication: string;
    note: string;
    steps: string[];
    current: number; // index of the step in progress; earlier steps are complete
}

const PYTHIA_STEPS = [
    "Model development",
    "Retrospective validation",
    "FDA Pre-Submission",
    "Multi-site validation",
    "510(k) submission",
];

const ROWS: PipelineRow[] = [
    {
        name: "AortaNavigator",
        indication: "AAA, TBAD, TAA surveillance and care gaps",
        note: "Available today for health system pilots.",
        steps: ["Development", "Retrospective validation", "Health system pilots", "Deployment"],
        current: 2,
    },
    {
        name: "Pythia for AAA",
        indication: "Abdominal aortic aneurysm",
        note: "First FDA submission.",
        steps: PYTHIA_STEPS,
        current: 3,
    },
    {
        name: "Pythia for TBAD",
        indication: "Type B aortic dissection",
        note: "Follows AAA as a second submission.",
        steps: PYTHIA_STEPS,
        current: 1,
    },
];

const Pipeline = () => {
    return (
        <div className="flex flex-col w-full">
            {ROWS.map((row, i) => (
                <div
                    key={row.name}
                    className={`grid md:grid-cols-[260px_1fr] grid-cols-1 md:gap-10 gap-4 py-8 ${i > 0 ? "border-t border-zinc-300" : ""}`}
                >
                    <div className="flex flex-col">
                        <div className={`text-zinc-800 md:text-2xl text-xl ${font_head.className}`}>
                            {row.name}
                        </div>
                        <div className="text-zinc-600 text-sm pt-1">
                            {row.indication}
                        </div>
                        <div className="text-zinc-500 text-sm pt-2">
                            {row.note}
                        </div>
                    </div>
                    <div
                        className="grid gap-2 items-start"
                        style={{ gridTemplateColumns: `repeat(${row.steps.length}, minmax(0, 1fr))` }}
                    >
                        {row.steps.map((step, s) => {
                            const done = s < row.current;
                            const active = s === row.current;
                            return (
                                <div key={step} className="flex flex-col">
                                    <div
                                        className={`h-2 w-full ${
                                            done ? "bg-primary" : active ? "bg-primary/40" : "bg-zinc-200"
                                        }`}
                                    />
                                    <div
                                        className={`md:text-sm text-[11px] leading-tight pt-2 ${
                                            done || active ? "text-zinc-800" : "text-zinc-400"
                                        } ${active ? font_med.className : ""}`}
                                    >
                                        {step}
                                    </div>
                                    {active && (
                                        <div className="text-primary md:text-xs text-[10px] tracking-[0.18em] font-mono uppercase pt-1">
                                            Current
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
            <div className="text-zinc-500 text-sm pt-4 border-t border-zinc-300">
                Pythia is in development and has not been cleared or approved by the FDA. It is not available for clinical use.
            </div>
        </div>
    );
};

export default Pipeline;
