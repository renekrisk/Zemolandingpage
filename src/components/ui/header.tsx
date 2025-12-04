import React from 'react';
import { Button, buttonVariants } from './button';
import { cn } from '../../lib/utils';
import { MenuToggleIcon } from './menu-toggle-icon';
import { useScroll } from './use-scroll';

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
            // Disable scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scroll
            document.body.style.overflow = '';
        }

        // Cleanup when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 mx-auto w-full max-w-7xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
                {
                    'bg-white/40 supports-[backdrop-filter]:bg-white/20 border-white/30 backdrop-blur-xl md:top-4 md:max-w-4xl shadow-lg shadow-black/5':
                        scrolled && !open,
                    'bg-white/60 backdrop-blur-lg': open,
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
                <a href="#home" className="flex items-center">
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
                <Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
                    <MenuToggleIcon open={open} className="size-5" duration={300} />
                </Button>
            </nav>

            <div
                className={cn(
                    'bg-white/60 backdrop-blur-lg fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
                    open ? 'block' : 'hidden',
                )}
            >
                <div
                    data-slot={open ? 'open' : 'closed'}
                    className={cn(
                        'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
                        'flex h-full w-full flex-col justify-between gap-y-2 p-4',
                    )}
                >
                    <div className="grid gap-y-2">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                className={buttonVariants({
                                    variant: 'ghost',
                                    className: 'justify-start',
                                })}
                                href={link.href}
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button variant="outline" className="w-full">
                            Sign In
                        </Button>
                        <Button className="w-full">Get Started</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
