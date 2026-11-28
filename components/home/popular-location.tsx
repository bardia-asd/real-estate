import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Shell from "../ui/shell";
import { Button } from "../ui/button";
import SectionHeader from "./section-header";
import { ImageCard } from "../property/image-card";
import { POPULAR_LOCATIONS } from "@/constants/properties";

const PopularLocation = () => {
    return (
        <section
            aria-labelledby="popular-location-heading"
            className="py-14 lg:py-28">
            <Shell>
                <SectionHeader
                    id="popular-location-heading"
                    eyebrow="مناطق پرطرفدار"
                    title="محبوب‌ترین مناطق برای خرید و اجاره"
                    description="از قلب پایتخت تا سواحل شمال، ملک موردنظرتان را در پرتقاضاترین مناطق کشور پیدا کنید."
                    action={
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-full px-5">
                            <Link href="/properties">
                                مشاهده همه
                                <ArrowLeft
                                    aria-hidden="true"
                                    className="size-4"
                                />
                            </Link>
                        </Button>
                    }
                />
                <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-12 lg:grid-cols-4">
                    {POPULAR_LOCATIONS.map((loc) => (
                        <ImageCard
                            key={loc.title}
                            href={loc.href}
                            image={loc.image}
                            alt={loc.alt}
                            title={loc.title}
                            subtitle={loc.subtitle}
                            subtitlePosition="bottom"
                        />
                    ))}
                </div>
            </Shell>
        </section>
    );
};

export default PopularLocation;
