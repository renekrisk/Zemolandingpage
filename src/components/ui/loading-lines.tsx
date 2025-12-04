import React from "react";

const LoadingLines: React.FC = () => {
    const letters = "ZEMO".split("");

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
            <div className="relative flex items-center justify-center h-[120px] w-auto m-8 font-poppins text-[3em] font-bold select-none text-white scale-[1.5] md:scale-[2]">
                {/* Animated letters */}
                {letters.map((letter, idx) => (
                    <span
                        key={idx}
                        className="relative inline-block opacity-0 z-[2] animate-[letterAnim_3s_linear_infinite] text-black"
                        style={{ animationDelay: `${0.1 + idx * 0.15}s` }}
                    >
                        {letter}
                    </span>
                ))}

                {/* Loader background with Zemo colors */}
                <div className="absolute top-0 left-0 w-full h-full z-[1] bg-transparent [mask:repeating-linear-gradient(90deg,transparent_0,transparent_6px,black_7px,black_8px)]">
                    <div className="absolute top-0 left-0 w-full h-full 
            [background-image:radial-gradient(circle_at_50%_50%,#F9A825_0%,transparent_50%),radial-gradient(circle_at_45%_45%,#00BCD4_0%,transparent_45%),radial-gradient(circle_at_55%_55%,#0277BD_0%,transparent_45%),radial-gradient(circle_at_45%_55%,#F9A825_0%,transparent_45%),radial-gradient(circle_at_55%_45%,#00BCD4_0%,transparent_45%)]
            [mask:radial-gradient(circle_at_50%_50%,transparent_0%,transparent_10%,black_25%)]
            animate-[transformAnim_2s_infinite_alternate_cubic-bezier(0.6,0.8,0.5,1),opacityAnim_3s_infinite]" />
                </div>
            </div>

            {/* Logo Icon Animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-24 pointer-events-none">
                <img
                    src="/assets/loggo.png"
                    alt="Zemo"
                    className="h-20 w-auto animate-bounce"
                />
            </div>
        </div>
    );
};

export default LoadingLines;
