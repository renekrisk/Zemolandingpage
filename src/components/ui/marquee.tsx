import * as React from "react";
import { cn } from "../../lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    pauseOnHover?: boolean;
    direction?: "left" | "right";
    speed?: number;
}

/**
 * Marquee component for smooth scrolling content
 * Duplicates children to create infinite scroll effect
 */
export function Marquee({
    children,
    pauseOnHover = false,
    direction = "left",
    speed = 30,
    className,
    ...props
}: MarqueeProps) {
    return (
        <div
            className={cn("w-full overflow-hidden", className)}
            {...props}
        >
            <div className="relative flex max-w-[90vw] overflow-hidden py-5">
                <div
                    className={cn(
                        "flex w-max animate-marquee",
                        pauseOnHover && "hover:[animation-play-state:paused]",
                        direction === "right" && "animate-marquee-reverse"
                    )}
                    style={{ "--duration": `${speed}s` } as React.CSSProperties}
                >
                    {/* Render children twice for seamless loop */}
                    {children}
                    {children}
                </div>
            </div>
        </div>
    );
}
