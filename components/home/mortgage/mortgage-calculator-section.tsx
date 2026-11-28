import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeader from "../section-header";
import MortgageCalculatorMini from "./mortgage-calculator-mini";
import Shell from "@/components/ui/shell";

export function MortgageCalculatorSection() {
    return (
        <section
            aria-labelledby="mortgage-heading"
            className="border-y bg-secondary/40 py-14 lg:py-24">
            <Shell className="grid items-center gap-10 grid-cols-1 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
                <SectionHeader
                    id="mortgage-heading"
                    eyebrow="ابزار محاسبه"
                    title="محاسبه اقساط وام مسکن"
                    description="مبلغ وام، نرخ سود و مدت بازپرداخت را وارد کنید."
                    action={
                        <>
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full px-6 h-11">
                                <Link href="/mortgage-calculator">
                                    محاسبه اقساط وام
                                    <ArrowLeft
                                        aria-hidden="true"
                                        className="size-4 group-hover/button:-translate-x-1 transition-transform"
                                    />
                                </Link>
                            </Button>

                            <Button asChild variant="link" size="lg">
                                <Link href="/mortgage-calculator#how-it-works">
                                    راهنمای نحوه محاسبه
                                </Link>
                            </Button>
                        </>
                    }
                    className="sm:flex-col sm:items-start"
                />
                <MortgageCalculatorMini />
            </Shell>
        </section>
    );
}
