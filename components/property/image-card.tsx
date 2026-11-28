import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageCardProps = {
    href: string;
    image: string;
    alt: string;
    title: string;
    subtitle?: string;
    subtitlePosition?: "top" | "bottom";
};

export const ImageCard = ({
    href,
    image,
    alt,
    title,
    subtitle,
    subtitlePosition = "top",
}: ImageCardProps) => {
    return (
        <Link
            href={href}
            className="group relative block overflow-hidden rounded-2xl shadow-card">
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/15 to-transparent" />

            <div className="relative aspect-3/4">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="absolute inset-x-4 bottom-4 z-10 flex items-end justify-between text-white sm:inset-x-5">
                <div>
                    {subtitle && subtitlePosition === "top" && (
                        <span className="block text-xs font-medium text-white/60">
                            {subtitle}
                        </span>
                    )}

                    <h3
                        className={cn(
                            "text-lg font-bold text-white sm:text-xl",
                            subtitle && subtitlePosition === "top" && "mt-1.5",
                        )}>
                        {title}
                    </h3>

                    {subtitle && subtitlePosition === "bottom" && (
                        <span className="mt-1 block text-xs font-medium text-white/60">
                            {subtitle}
                        </span>
                    )}
                </div>

                <span className="flex size-8 items-center justify-center rounded-full border border-white/25 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    <ArrowUpLeft size={14} aria-hidden />
                </span>
            </div>
        </Link>
    );
};
