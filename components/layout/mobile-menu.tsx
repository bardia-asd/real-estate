"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, Plus, Scale, X } from "lucide-react";

import { Button } from "../ui/button";
import { cn } from "cn";
import { MOBILE_NAV_LINKS } from "@/constants/navigation";
import { useIsActive } from "@/hooks/use-is-active";

const MobileNavLinks = ({ onNavigate }: { onNavigate: () => void }) => {
    const isLinkActive = useIsActive();

    return (
        <nav aria-label="منوی اصلی">
            <ul className="flex flex-col gap-1">
                {MOBILE_NAV_LINKS.map((link) => {
                    // Check whether the link matches the current route
                    const isActive = isLinkActive(link.href);

                    return (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={onNavigate}
                                // Indicate the current page to assistive technologies
                                aria-current={isActive ? "page" : undefined}
                                className={cn(
                                    "flex items-center justify-between rounded-xl px-3.5 py-3 font-medium text-sm transition-colors",
                                    isActive
                                        ? "text-primary bg-muted"
                                        : "text-muted-foreground",
                                )}>
                                {link.title}

                                {/* Show a visual indicator beside the active link */}
                                {isActive && (
                                    <span className="inline-block size-1.5 rounded-full bg-accent" />
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    // Close the menu when needed
    const close = () => setOpen(false);

    // References used to detect clicks outside the menu
    const panelRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // Only listen for outside clicks while the menu is open
        if (!open) return;

        const onPointerDown = (e: PointerEvent) => {
            const target = e.target as Node;

            // Ignore clicks inside the menu or its toggle button
            if (
                panelRef.current?.contains(target) ||
                buttonRef.current?.contains(target)
            )
                return;

            // Close the menu when clicking anywhere outside
            close();
        };

        document.addEventListener("pointerdown", onPointerDown);

        // Remove the event listener when the menu closes or the component unmounts
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [open]);

    return (
        <>
            <Button
                ref={buttonRef}
                variant="outline"
                size="icon-lg"
                className="md:hidden"
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? "بستن منو" : "باز کردن منو"}
                aria-expanded={open}>
                {/* Toggle the icon based on the menu state */}
                {open ? <X /> : <Menu />}
            </Button>

            <div
                ref={panelRef}
                id="mobile-menu"
                data-state={open ? "open" : "closed"}
                // Prevent keyboard and screen reader interaction while closed
                inert={!open}
                className={cn(
                    "absolute top-full inset-x-0 z-10 mt-px border-b bg-background shadow-lg md:hidden",
                    "grid transition-[grid-template-rows,opacity] duration-200 ease-in-out",
                    open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none",
                )}>
                <div className="overflow-hidden">
                    <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto px-4 py-5">
                        {/* Wrap the component because it uses useSearchParams */}
                        <Suspense>
                            <MobileNavLinks onNavigate={close} />
                        </Suspense>

                        {/* Additional navigation actions */}
                        <div className="flex flex-col gap-2 border-t pt-4">
                            <Button size="lg" asChild>
                                <Link href="/sell" onClick={close}>
                                    <Plus />
                                    <span>ثبت آگهی</span>
                                </Link>
                            </Button>

                            <Button variant="outline" size="lg" asChild>
                                <Link href="/compare" onClick={close}>
                                    <Scale />
                                    <span>مقایسه املاک</span>
                                </Link>
                            </Button>

                            <Button variant="outline" size="lg" asChild>
                                <Link href="/signin" onClick={close}>
                                    <span>ورود | ثبت‌نام</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
