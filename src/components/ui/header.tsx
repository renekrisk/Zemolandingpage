import React from 'react';
import { Button } from './button';
import { cn } from '../../lib/utils';
import { MenuToggleIcon } from './menu-toggle-icon';
import { useScroll } from './use-scroll';
import { buttonVariants } from './button';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    const links = [
        {
            label: 'Home',
            href: '#home',
        },
        {
            label: 'Solutions',
            href: '#solutions',
        },
        {
            label: 'Pricing',
            href: '#pricing',
        },
        {
            label: 'Contact',
            href: '#contact',
        },
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
                        {links.map((link, i) => (
                            <a key={i} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
                                {link.label}
                            </a>
                        ))}
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

            {/* Compact Dropdown Mobile Menu */}
            {open && (
                <div className="fixed inset-0 z-[101] md:hidden">
                    {/* Transparent Backdrop */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setOpen(false)}
                    />

                    {/* Compact Menu Card */}
                    <div className="absolute top-14 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                        <div className="p-3">
                            {/* Compact Links */}
                            <div className="space-y-1">
                                {links.map((link) => (
                                    <a
                                        key={link.label}
                                        className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="my-3 border-t border-gray-200" />

                            {/* Compact Side-by-Side Buttons */}
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
