import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Shell from "../ui/shell";
import { Button } from "../ui/button";
import SectionHeader from "./section-header";

const PropertyCallToAction = () => {
    return (
        <section className="py-14 lg:py-28">
            <Shell className="relative overflow-hidden rounded-4xl bg-primary px-6 py-14 sm:px-12 lg:py-20">
                <SectionHeader
                    align="center"
                    tone="inverted"
                    eyebrowLine={false}
                    className="text-white"
                    eyebrow="همین حالا شروع کنید"
                    title="ملک رویایی‌تان را پیدا کنید یا آگهی خود را ثبت کنید"
                    description="چه به دنبال خرید و اجاره باشید و چه بخواهید ملک خود را به هزاران مشتری معرفی کنید، ما کنار شما هستیم."
                    action={
                        <>
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full px-6 h-11 bg-accent text-accent-foreground hover:bg-accent/90">
                                <Link href="/properties">
                                    مشاهده املاک
                                    <ArrowLeft
                                        aria-hidden="true"
                                        className="size-4 group-hover/button:-translate-x-1 transition-transform"
                                    />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="rounded-full px-6 h-11 bg-transparent border-white/25 hover:border-white/50 hover:bg-white/5 hover:text-primary-foreground">
                                <Link href="/sell">ثبت آگهی ملک</Link>
                            </Button>
                        </>
                    }
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(199,123,90,0.22),transparent_55%)]" />
            </Shell>
        </section>
    );
};

export default PropertyCallToAction;
