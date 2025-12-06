import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from 'react';
import { motion } from 'framer-motion';

interface ZemoScrollHeroProps {
    children?: ReactNode;
    variant?: 'rotating' | 'liquid' | 'particles';
}

export const ZemoScrollHero = ({ children, variant = 'rotating' }: ZemoScrollHeroProps) => {
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [showContent, setShowContent] = useState<boolean>(false);
    const [logoFullyExpanded, setLogoFullyExpanded] = useState<boolean>(false);
    const [touchStartY, setTouchStartY] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollProgress(0);
        setShowContent(false);
        setLogoFullyExpanded(false);
        setIsMobile(window.innerWidth < 768);
    }, []);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (logoFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
                setLogoFullyExpanded(false);
                e.preventDefault();
            } else if (!logoFullyExpanded) {
                e.preventDefault();
                const scrollDelta = e.deltaY * 0.001;
                const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
                setScrollProgress(newProgress);

                if (newProgress >= 1) {
                    setLogoFullyExpanded(true);
                    setShowContent(true);
                } else if (newProgress < 0.75) {
                    setShowContent(false);
                }
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            setTouchStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!touchStartY) return;
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;

            if (logoFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
                setLogoFullyExpanded(false);
                e.preventDefault();
            } else if (!logoFullyExpanded) {
                e.preventDefault();
                const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
                const scrollDelta = deltaY * scrollFactor;
                const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
                setScrollProgress(newProgress);

                if (newProgress >= 1) {
                    setLogoFullyExpanded(true);
                    setShowContent(true);
                } else if (newProgress < 0.75) {
                    setShowContent(false);
                }

                setTouchStartY(touchY);
            }
        };

        const handleTouchEnd = () => setTouchStartY(0);
        const handleScroll = () => !logoFullyExpanded && window.scrollTo(0, 0);

        window.addEventListener('wheel', handleWheel as EventListener, { passive: false });
        window.addEventListener('scroll', handleScroll as EventListener);
        window.addEventListener('touchstart', handleTouchStart as EventListener, { passive: false });
        window.addEventListener('touchmove', handleTouchMove as EventListener, { passive: false });
        window.addEventListener('touchend', handleTouchEnd as EventListener);

        return () => {
            window.removeEventListener('wheel', handleWheel as EventListener);
            window.removeEventListener('scroll', handleScroll as EventListener);
            window.removeEventListener('touchstart', handleTouchStart as EventListener);
            window.removeEventListener('touchmove', handleTouchMove as EventListener);
            window.removeEventListener('touchend', handleTouchEnd as EventListener);
        };
    }, [scrollProgress, logoFullyExpanded, touchStartY]);

    const logoSize = 180 + scrollProgress * (isMobile ? 400 : 600);
    const textSplitDistance = scrollProgress * (isMobile ? 100 : 150);

    // Rotating Logo Variant
    if (variant === 'rotating') {
        return (
            <div ref={sectionRef} className='overflow-x-hidden'>
                <section className='relative flex flex-col items-center min-h-screen bg-white'>
                    <div className='relative w-full flex flex-col items-center min-h-screen'>
                        <motion.div
                            className='absolute inset-0 z-0'
                            style={{
                                background: `radial-gradient(circle at ${50 + scrollProgress * 20}% ${50 - scrollProgress * 10}%, rgba(249, 168, 37, ${0.1 + scrollProgress * 0.15}) 0%, rgba(0, 188, 212, ${0.05 + scrollProgress * 0.1}) 50%, rgba(255, 255, 255, 1) 100%)`
                            }}
                        />

                        <div className='container mx-auto flex flex-col items-center relative z-10'>
                            <div className='flex flex-col items-center justify-center w-full min-h-screen relative'>
                                <motion.div
                                    className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                    style={{
                                        width: logoSize,
                                        height: logoSize,
                                        maxWidth: '90vw',
                                        maxHeight: '90vh',
                                        rotate: scrollProgress * 180,
                                    }}
                                >
                                    <img
                                        src="/assets/loggo.png"
                                        alt="Zemo"
                                        className='w-full h-full object-contain'
                                        style={{
                                            filter: `drop-shadow(0 0 ${20 + scrollProgress * 40}px rgba(249, 168, 37, ${0.3 + scrollProgress * 0.4}))`
                                        }}
                                    />
                                    <motion.div
                                        className='absolute inset-0 rounded-full'
                                        style={{
                                            background: `radial-gradient(circle, transparent 40%, rgba(249, 168, 37, ${scrollProgress * 0.3}) 60%, transparent 100%)`,
                                            filter: 'blur(20px)',
                                        }}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: scrollProgress * 0.8,
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>

                                <div className='flex items-center justify-center text-center gap-8 w-full relative z-10'>
                                    <h1
                                        className='text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-zemoOrange to-amber-500 bg-clip-text text-transparent'
                                        style={{
                                            transform: `translateX(-${textSplitDistance}px)`,
                                            opacity: 1 - scrollProgress * 0.7
                                        }}
                                    >
                                        ZE
                                    </h1>
                                    <h1
                                        className='text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-zemoCyan to-zemoBlue bg-clip-text text-transparent'
                                        style={{
                                            transform: `translateX(${textSplitDistance}px)`,
                                            opacity: 1 - scrollProgress * 0.7
                                        }}
                                    >
                                        MO
                                    </h1>
                                </div>

                                <motion.div
                                    className='absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-10'
                                    style={{
                                        opacity: 1 - scrollProgress * 2,
                                        y: scrollProgress * 50,
                                    }}
                                >
                                    <p className='text-gray-600 font-medium mb-2'>Scroll to explore</p>
                                    <motion.div
                                        className='w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex items-start justify-center p-2'
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <motion.div
                                            className='w-1.5 h-1.5 bg-gray-600 rounded-full'
                                            animate={{ y: [0, 12, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>

                            <motion.section
                                className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: showContent ? 1 : 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                {children}
                            </motion.section>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // TODO: Add liquid and particles variants
    return null;
};
