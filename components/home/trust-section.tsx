import { TRUSTED_ITEMS } from "@/constants/properties";
import Shell from "../ui/shell";
import SectionHeader from "./section-header";

const TrustSection = () => {
    return (
        <section aria-labelledby="trust-heading" className="py-14 lg:py-28">
            <Shell>
                <SectionHeader
                    id="trust-heading"
                    eyebrow="چرا کاشانه"
                    title="انتخابی مطمئن برای خرید و اجاره"
                    description="از بررسی ملک تا تحویل کلید، تمام مراحل را شفاف و قابل اعتماد پیش می‌بریم."
                    align="center"
                    className="mx-auto text-center max-w-2xl"
                />

                <div className="mt-12 grid gap-y-10 grid-cols-1 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-border">
                    {TRUSTED_ITEMS.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="px-0 lg:px-7 lg:first:pr-0 lg:last:pl-0">
                            <span className="flex items-center justify-center size-11 rounded-full border border-accent bg-accent/7 text-accent">
                                <Icon size={20} aria-hidden />
                            </span>
                            <h3 className="mt-5 font-semibold text-primary">
                                {title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </Shell>
        </section>
    );
};

export default TrustSection;
