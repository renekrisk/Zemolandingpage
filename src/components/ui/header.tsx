import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { cn } from '../../lib/utils';
import { MenuToggleIcon } from './menu-toggle-icon';
import { useScroll } from './use-scroll';
import { buttonVariants } from './button';
import { ChevronDown } from 'lucide-react';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const scrolled = useScroll(10);

    const solutionsLinks = [
        { label: 'Free Payroll', href: '#payroll' },
        { label: 'Expense Management', href: '#expenses' },
        { label: 'Smart Reporting', href: '#reporting' },
    ];

    const resourcesLinks = [
        { label: 'Blog', href: '/blog' },
        { label: 'Free Tools', href: '/tools' },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <>
            <header
                className={cn(
                    'sticky top-0 z-[100] mx-auto w-full max-w-7xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
                    {
                        'bg-white/40 supports-[backdrop-filter]:bg-white/20 border-white/30 backdrop-blur-xl md:top-4 md:max-w-4xl shadow-lg shadow-black/5':
                            scrolled && !open,
                        'bg-white/95 backdrop-blur-lg': open,
                    },
                )}
            >
                <nav
                    className={cn(
                        'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
                        {
                            'md:px-2': scrolled,
                        },
                    )}
                >
                    <a href="#home" className="flex items-center z-[102]">
                        <img
                            src="/assets/zemo-logo.png"
                            alt="Zemo"
                            className="h-6 w-auto"
                        />
                    </a>
                    <div className="hidden items-center gap-2 md:flex">
                        <a className={buttonVariants({ variant: 'ghost' })} href="#home">
                            Home
                        </a>

                        {/* Solutions Dropdown */}
                        <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
                            <button className={cn(buttonVariants({ variant: 'ghost' }), "flex items-center gap-1")}>
                                Solutions
                                <ChevronDown size={16} className={cn("transition-transform", solutionsOpen && "rotate-180")} />
                            </button>
                            {solutionsOpen && (
                                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px]">
                                    {solutionsLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a className={buttonVariants({ variant: 'ghost' })} href="#features">
                            Features
                        </a>
                        <a className={buttonVariants({ variant: 'ghost' })} href="#pricing">
                            Pricing
                        </a>
                        <a className={buttonVariants({ variant: 'ghost' })} href="#about">
                            About Us
                        </a>

                        {/* Resources Dropdown */}
                        <div className="relative" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
                            <button className={cn(buttonVariants({ variant: 'ghost' }), "flex items-center gap-1")}>
                                Resources
                                <ChevronDown size={16} className={cn("transition-transform", resourcesOpen && "rotate-180")} />
                            </button>
                            {resourcesOpen && (
                                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[160px]">
                                    {resourcesLinks.map((link) => (
                                        <Link
                                            key={link.label}
                                            to={link.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a className={buttonVariants({ variant: 'ghost' })} href="#contact">
                            Contact Us
                        </a>

                        <Button variant="outline">Sign In</Button>
                        <Button>Get Started</Button>
                    </div>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => setOpen(!open)}
                        className="md:hidden z-[102]"
                    >
                        <MenuToggleIcon open={open} className="size-5" duration={300} />
                    </Button>
                </nav>
            </header>

            {/* Mobile Menu */}
            {open && (
                <div className="fixed inset-0 z-[101] md:hidden">
                    <div
                        className="absolute inset-0"
                        onClick={() => setOpen(false)}
                    />

                    <div className="absolute top-14 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-h-[80vh] overflow-y-auto">
                        <div className="p-3">
                            <div className="space-y-1">
                                <a
                                    className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                    href="#home"
                                    onClick={() => setOpen(false)}
                                >
                                    Home
                                </a>

                                {/* Solutions Section */}
                                <div className="px-3 py-2">
                                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Solutions</div>
                                    {solutionsLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                                            onClick={() => setOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>

                                <a
                                    className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                    href="#features"
                                    onClick={() => setOpen(false)}
                                >
                                    Features
                                </a>
                                <a
                                    className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                    href="#pricing"
                                    onClick={() => setOpen(false)}
                                >
                                    Pricing
                                </a>
                                <a
                                    className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                    href="#about"
                                    onClick={() => setOpen(false)}
                                >
                                    About Us
                                </a>

                                {/* Resources Section */}
                                <div className="px-3 py-2">
                                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Resources</div>
                                    {resourcesLinks.map((link) => (
                                        <Link
                                            key={link.label}
                                            to={link.href}
                                            className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                                            onClick={() => setOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>

                                <a
                                    className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                    href="#contact"
                                    onClick={() => setOpen(false)}
                                >
                                    Contact Us
                                </a>
                            </div>

                            <div className="my-3 border-t border-gray-200" />

                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    className="flex-1 h-9 text-sm"
                                    onClick={() => setOpen(false)}
                                >
                                    Sign In
                                </Button>
                                <Button
                                    className="flex-1 h-9 text-sm"
                                    onClick={() => setOpen(false)}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
