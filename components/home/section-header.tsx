// components/section-header.tsx
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    action?: ReactNode;
    /** heading level, so the page keeps a valid outline (default h2) */
    as?: "h1" | "h2" | "h3";
    className?: string;
};

const SectionHeader = ({
    eyebrow,
    title,
    description,
    action,
    as: Heading = "h2",
    className,
}: SectionHeaderProps) => {
    return (
        <header
            className={cn(
                "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
                className,
            )}>
            <div>
                {eyebrow && (
                    <p className="flex items-center gap-2.5 text-sm font-semibold text-muted-foreground">
                        <span
                            aria-hidden="true"
                            className="h-px w-7 bg-accent"
                        />
                        {eyebrow}
                    </p>
                )}

                <Heading className="mt-3 text-2xl font-bold text-primary lg:text-4xl">
                    {title}
                </Heading>

                {description && (
                    <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
                        {description}
                    </p>
                )}
            </div>

            {action && (
                <div className="flex shrink-0 items-center gap-2">{action}</div>
            )}
        </header>
    );
};

export default SectionHeader;
