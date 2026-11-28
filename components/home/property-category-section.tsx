import { PROPERTY_CATEGORIES } from "@/constants/properties";
import SectionHeader from "./section-header";
import Shell from "../ui/shell";
import { ImageCard } from "../property/image-card";

const PropertyCategorySection = () => {
    return (
        <section
            aria-labelledby="property-categories-heading"
            className="border-y bg-secondary py-14 lg:py-28">
            <Shell>
                <SectionHeader
                    id="property-categories-heading"
                    eyebrow="دسته‌بندی ملک"
                    title="دنبال چه نوع ملکی هستید؟"
                    description="از آپارتمان و خانه تا ویلا و زمین، نوع ملک مورد نظرتان را انتخاب کنید و فقط آگهی‌های مرتبط را ببینید."
                />
                <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-12 lg:grid-cols-4">
                    {PROPERTY_CATEGORIES.map((cat) => (
                        <ImageCard
                            key={cat.id}
                            href={cat.href}
                            image={cat.image}
                            alt={cat.alt}
                            title={cat.title}
                            subtitle={cat.subtitle}
                        />
                    ))}
                </div>
            </Shell>
        </section>
    );
};

export default PropertyCategorySection;
