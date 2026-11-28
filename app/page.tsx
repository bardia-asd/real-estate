import FeaturedProperties from "@/components/home/featured-properties";
import Hero from "@/components/home/hero";
import { MortgageCalculatorSection } from "@/components/home/mortgage/mortgage-calculator-section";
import PopularLocation from "@/components/home/popular-location";
import PropertyCallToAction from "@/components/home/property-call-to-action";
import PropertyCategorySection from "@/components/home/property-category-section";
import TrustSection from "@/components/home/trust-section";
import { PropertyGridSkeleton } from "@/components/property/property-card-skeleton";
import { Suspense } from "react";

const HomePage = () => {
    return (
        <main className="min-h-screen flex flex-col">
            <Hero />
            <Suspense fallback={<PropertyGridSkeleton />}>
                <FeaturedProperties />
            </Suspense>
            <MortgageCalculatorSection />
            <PropertyCategorySection />
            <TrustSection />
            <PopularLocation />
            <PropertyCallToAction />
        </main>
    );
};

export default HomePage;
