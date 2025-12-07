import React, { forwardRef, useState, useEffect, useCallback, useContext } from "react";
import { clsx } from "clsx";
import useEmblaCarousel, {
    type UseEmblaCarouselType,
} from "embla-carousel-react";

// Icons
const MdOutlineFormatQuote = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9.99 12.15l-1.42 1.42L7.15 12 0 19.15 7.15 24 14.3 16.85 14.3 0H0v12.15h9.99zM24 0v12.15l-1.42-1.42-1.42 1.42L16.85 12 9.7 19.15 16.85 24 24 16.85V0h-9.7v12.15L24 0z" /></svg>
);

const ArrowLeft = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6" /></svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
);

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    variant?: "outline" | "default";
    size?: "icon" | "default";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={clsx(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                variant === "outline" && "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                size === "icon" && "h-9 w-9",
                className
            )}
            {...props}
        />
    );
});
Button.displayName = "Button";

// Carousel Hooks & Components
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
}

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
    const context = useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}

const Carousel = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
    (
        {
            orientation = "horizontal",
            opts,
            setApi,
            plugins,
            className,
            children,
            ...props
        },
        ref,
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === "horizontal" ? "x" : "y",
            },
            plugins,
        );
        const [canScrollPrev, setCanScrollPrev] = useState(false);
        const [canScrollNext, setCanScrollNext] = useState(false);

        const onSelect = useCallback((api: CarouselApi) => {
            if (!api) {
                return;
            }
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        }, []);

        const scrollPrev = useCallback(() => {
            api?.scrollPrev();
        }, [api]);

        const scrollNext = useCallback(() => {
            api?.scrollNext();
        }, [api]);

        const handleKeyDown = useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    scrollPrev();
                } else if (event.key === "ArrowRight") {
                    event.preventDefault();
                    scrollNext();
                }
            },
            [scrollPrev, scrollNext],
        );

        useEffect(() => {
            if (!api || !setApi) {
                return;
            }
            setApi(api);
        }, [api, setApi]);

        useEffect(() => {
            if (!api) {
                return;
            }
            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);
            return () => {
                api?.off("select", onSelect);
            };
        }, [api, onSelect]);

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api,
                    opts,
                    orientation:
                        orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={clsx("relative", className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        );
    },
);
Carousel.displayName = "Carousel";

const CarouselContent = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                ref={ref}
                className={clsx(
                    "flex",
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                    className,
                )}
                {...props}
            />
        </div>
    );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={clsx(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className,
            )}
            {...props}
        />
    );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={clsx(
                "absolute  size-8 rounded-full",
                orientation === "horizontal"
                    ? "bottom-0 left-1/2 -translate-x-16 translate-y-4"
                    : "-top-12 right-1/2 -translate-x-1/2 rotate-90",
                className,
            )}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ArrowLeft className="size-4" />
            <span className="sr-only">Previous slide</span>
        </Button>
    );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={clsx(
                "absolute size-8 rounded-full",
                orientation === "horizontal"
                    ? "bottom-0 right-1/2 translate-x-16 translate-y-4"
                    : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
                className,
            )}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ArrowRight className="size-4" />
            <span className="sr-only">Next slide</span>
        </Button>
    );
});
CarouselNext.displayName = "CarouselNext";

// Customer testimonials data
const testimonials = [
    {
        quote: "Zemocard is a breath of fresh air from other payment solution providers. They have built a robust platform that excels at meeting our needs. They have sorted out our issues since moving to them with speed.",
        author: "Chris Sang",
        role: "Turnbull Associates",
    },
    {
        quote: "The ZEMO APP is Reliable, consistent flexible. We don't regret using it. THUMBS UP.",
        author: "Faith Kemboi",
        role: "Palmcare Sinai Hospital",
    },
    {
        quote: "My journey with Zemo has been great! The seamless integration of payments and reports save for a few hiccups has enabled me to run the clinic in a seamless manner.",
        author: "Dr. Njeri",
        role: "Amber Health",
    },
    {
        quote: "Zemo platform has been helpful in working very much on the go. The reports are just extracted and have eliminated the extra step of compiling reports as we pre-compile at the point of incurrence.",
        author: "Doug Mutai",
        role: "Standup collective",
    },
    {
        quote: "Zemo is a really great app, the fact that it helps one track their expenses and also enables one to budget effectively. It's good especially for businesses as it enables businesses owners have insight of how day to day expenses run.",
        author: "Mercy Wamucii",
        role: "Tadeo Insurance Agency",
    },
    {
        quote: "Makes reporting work easy as you can easily access expenses. Not easily to be accessed by anyone, one must have access to login credentials hence secure.",
        author: "Lydia Wandera",
        role: "Bella's Salon Barbershop and Spa",
    }
];

// Simplified Section with reduced padding and no header props
const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="py-8 sm:py-12 bg-gray-50/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <div className="mt-0">{children}</div>
            </div>
        </section>
    );
};

export function TestimonialsCarousel() {
    return (
        <Section>
            <Carousel>
                <div className="relative mx-auto max-w-4xl">
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index}>
                                <div className="p-2 pb-5">
                                    <div className="text-center">
                                        <MdOutlineFormatQuote className="text-zemoOrange/20 mx-auto my-4 text-5xl" />
                                        <h4 className="text-xl md:text-2xl leading-relaxed mx-auto max-w-2xl px-4 font-medium text-gray-800">
                                            "{testimonial.quote}"
                                        </h4>

                                        <div className="mt-8 mb-2">
                                            <h4 className="text-lg font-bold text-gray-900">
                                                {testimonial.author}
                                            </h4>
                                        </div>
                                        <div className="mb-3">
                                            <span className="text-zemoOrange font-semibold text-sm">
                                                {testimonial.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* Gradient overlays for smooth edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/12 bg-gradient-to-r from-gray-50/50"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/12 bg-gradient-to-l from-gray-50/50"></div>
                </div>
                <div className="hidden md:block">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </Section>
    );
}
