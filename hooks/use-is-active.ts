"use client";

import { usePathname, useSearchParams } from "next/navigation";

export const useIsActive = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (href: string) => {
        // Separate the pathname from the query string
        const [path, query] = href.split("?");

        // Check whether the current pathname matches the target path
        // For the root path, require an exact match to avoid matching every page
        const pathMatches =
            path === "/"
                ? pathname === "/"
                : pathname === path || pathname.startsWith(`${path}/`);

        // If the pathname doesn't match, the link isn't active
        if (!pathMatches) return false;

        // Parse the query string into key-value pairs
        const required = new URLSearchParams(query ?? "");

        // Every required query parameter must match the current URL
        return [...required].every(
            ([key, value]) => searchParams.get(key) === value,
        );
    };
};
