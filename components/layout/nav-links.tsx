"use client";

import Link from "next/link";
import { Suspense } from "react";

import { cn } from "@/lib/utils";
import { NAV_LINKS, type NavLink } from "@/constants/navigation";
import { useIsActive } from "@/hooks/use-is-active";

const NavLinksList = () => {
    const isLinkActive = useIsActive();

    return (
        <nav aria-label="منوی اصلی" className="hidden md:block">
            <ul className="flex items-center gap-0.5">
                {NAV_LINKS.map((link: NavLink) => {
                    // Check whether the current link matches the active route
                    const isActive = isLinkActive(link.href);

                    return (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                // Identify the current page for screen readers
                                aria-current={isActive ? "page" : undefined}
                                className={cn(
                                    "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-secondary text-primary"
                                        : "text-muted-foreground hover:text-primary",
                                )}>
                                {link.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

const NavLinks = () => {
    return (
        // useSearchParams may require a Suspense boundary during rendering
        <Suspense fallback={null}>
            <NavLinksList />
        </Suspense>
    );
};

export default NavLinks;
