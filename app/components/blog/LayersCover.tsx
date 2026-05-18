const LayersCover = () => {
    return (
        <div className="w-full aspect-[3/2] bg-lightbg flex flex-col items-stretch justify-center md:px-[14%] px-[8%] md:gap-[3%] gap-[3%]">
            {/* Layer 01 — outline only, faded */}
            <div className="relative h-[14%] bg-white border-2 border-primary/55">
                <span className="absolute md:top-3 top-1.5 md:left-5 left-3 text-primary/70 md:text-base text-[10px] tracking-[0.25em] font-mono">
                    01
                </span>
            </div>

            {/* Layer 02 — tinted with outline */}
            <div className="relative h-[17%] bg-primary/20 border-2 border-primary/85">
                <span className="absolute md:top-3 top-1.5 md:left-5 left-3 text-primary md:text-base text-[10px] tracking-[0.25em] font-mono">
                    02
                </span>
            </div>

            {/* Layer 03 — solid with subtle depth gradient + soft tinted shadow */}
            <div className="relative h-[22%] bg-gradient-to-br from-primary to-[#1F3AB8] shadow-[0_12px_32px_-12px_rgba(47,79,225,0.5)]">
                <span className="absolute md:top-3 top-1.5 md:left-5 left-3 text-light md:text-base text-[10px] tracking-[0.25em] font-mono">
                    03
                </span>
            </div>
        </div>
    );
};

export default LayersCover;
