import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
    id?: string;
    eyebrow?: string;
    eyebrowLine?: boolean;
    align?: "start" | "center";
    tone?: "default" | "inverted";
    title: string;
    description?: string;
    action?: ReactNode;
    as?: "h1" | "h2" | "h3";
    className?: string;
};

const SectionHeader = ({
    id,
    eyebrow,
    eyebrowLine = true,
    align = "start",
    tone = "default",
    title,
    description,
    action,
    as: Heading = "h2",
    className,
}: SectionHeaderProps) => {
    const isCenter = align === "center";
    const isInverted = tone === "inverted";

    return (
        <header
            className={cn(
                "flex flex-col gap-6",
                isCenter
                    ? "items-center text-center"
                    : "sm:flex-row sm:items-end sm:justify-between",
                className,
            )}>
            <div className={cn(isCenter && "flex flex-col items-center")}>
                {eyebrow && (
                    <p
                        className={cn(
                            "flex items-center gap-2.5 text-sm font-semibold",
                            isInverted
                                ? "text-white/70"
                                : "text-muted-foreground",
                            isCenter && "justify-center",
                        )}>
                        {eyebrowLine && (
                            <span
                                aria-hidden="true"
                                className="h-px w-7 bg-accent"
                            />
                        )}
                        {eyebrow}
                        {eyebrowLine && isCenter && (
                            <span
                                aria-hidden="true"
                                className="h-px w-7 bg-accent"
                            />
                        )}
                    </p>
                )}

                <Heading
                    id={id}
                    className={cn(
                        "mt-3 text-2xl font-bold lg:text-4xl",
                        isInverted ? "text-white" : "text-primary",
                    )}>
                    {title}
                </Heading>

                {description && (
                    <p
                        className={cn(
                            "mt-3 max-w-xl text-sm sm:text-base",
                            isInverted
                                ? "text-white/70"
                                : "text-muted-foreground",
                            isCenter && "mx-auto",
                        )}>
                        {description}
                    </p>
                )}
            </div>

            {action && (
                <div
                    className={cn(
                        "flex shrink-0 items-center gap-2",
                        isCenter && "mt-2",
                    )}>
                    {action}
                </div>
            )}
        </header>
    );
};

export default SectionHeader;
