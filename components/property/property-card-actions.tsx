"use client";

import { useState } from "react";
import { GitCompare, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PropertyCardActions({ title }: { title: string }) {
    const [favorite, setFavorite] = useState(false);
    const [compare, setCompare] = useState(false);

    return (
        <div className="flex gap-2 opacity-100 transition-opacity motion-reduce:transition-none md:opacity-0 md:group-hover/card:opacity-100 md:group-focus-within/card:opacity-100">
            <Button
                size="icon"
                variant="secondary"
                aria-pressed={favorite}
                aria-label={`افزودن ${title} به علاقه‌مندی‌ها`}
                onClick={() => setFavorite((v) => !v)}>
                <Heart
                    aria-hidden="true"
                    className={cn(
                        "size-4",
                        favorite && "fill-current text-destructive",
                    )}
                />
            </Button>

            <Button
                size="icon"
                variant="secondary"
                aria-pressed={compare}
                aria-label={`مقایسه ${title}`}
                onClick={() => setCompare((v) => !v)}>
                <GitCompare
                    aria-hidden="true"
                    className={cn("size-4", compare && "text-accent")}
                />
            </Button>
        </div>
    );
}
