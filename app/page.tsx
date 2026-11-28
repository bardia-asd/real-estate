import FeaturedProperties from "@/components/home/featured-properties";
import Hero from "@/components/home/hero";
import { MortgageCalculatorSection } from "@/components/home/mortgage/mortgage-calculator-section";
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
        </main>
    );
};

export default HomePage;
