import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from './button';
import { cn } from '../../lib/utils';
import { useScroll } from './use-scroll';
import { buttonVariants } from './button';

export function SimpleHeader() {
    const scrolled = useScroll(10);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    const resourcesLinks = [
        { label: 'Blog', href: '/blog' },
        { label: 'Free Tools', href: '/tools' },
    ];

    return (
        <header
            className={cn(
                'sticky top-0 z-[100] mx-auto w-full max-w-7xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
                {
                    'bg-white/70 supports-[backdrop-filter]:bg-white/60 border-white/40 backdrop-blur-xl md:top-4 md:max-w-4xl shadow-lg shadow-black/5':
                        scrolled,
                },
            )}
        >
            <nav
                className={cn(
                    'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
                    {
                        'md:px-4': scrolled,
                    },
                )}
            >
                <Link to="/" className="flex items-center z-[102] transition-transform hover:scale-105">
                    <img
                        src="/assets/zemo-logo.png"
                        alt="Zemo"
                        className="h-8 w-auto"
                    />
                </Link>

                <div className="flex items-center gap-2">
                    <Link to="/" className={buttonVariants({ variant: 'ghost' })}>
                        Home
                    </Link>

                    {/* Resources Dropdown */}
                    <div className="relative" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
                        <button className={cn(buttonVariants({ variant: 'ghost' }), "flex items-center gap-1")}>
                            Resources
                            <ChevronDown size={16} className={cn("transition-transform", resourcesOpen && "rotate-180")} />
                        </button>
                        {resourcesOpen && (
                            <div className="absolute top-full left-0 pt-2 z-50">
                                <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[160px]">
                                    {resourcesLinks.map((link) => (
                                        <Link
                                            key={link.label}
                                            to={link.href}
                                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/#contact" className={buttonVariants({ variant: 'ghost' })}>
                        Contact Us
                    </Link>

                    <Link to="/signin">
                        <Button variant="outline">Sign In</Button>
                    </Link>
                    <Link to="/signup">
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
