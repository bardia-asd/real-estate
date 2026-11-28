import { getFeaturedProperties } from "@/services/properties";
import PropertyCard from "../property/property-card";
import SectionHeader from "./section-header";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const FeaturedProperties = async () => {
    const properties = await getFeaturedProperties();

    return (
        <section className="py-14 lg:py-28" aria-labelledby="featured-heading">
            <div className="container mx-auto px-4">
                <SectionHeader
                    eyebrow="املاک ویژه"
                    title="جدیدترین ملک‌های منتخب"
                    description="مجموعه‌ای از بهترین ملک‌ها که توسط تیم ما انتخاب شده‌اند."
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
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
