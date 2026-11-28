import Image from "next/image";
import PropertySearchForm from "../property/property-search-form";
import Shell from "../ui/shell";

const Hero = () => {
    return (
        <section className="relative min-h-162">
            {/* Background hero image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.webp"
                    alt="ویلای مدرن با استخر و چشم‌انداز دریا و شهر هنگام غروب"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            {/* Main hero content */}
            <Shell className="relative z-10 flex flex-col justify-center gap-10 py-14 lg:py-24">
                {/* Hero heading and description */}
                <div className="max-w-3xl text-white">
                    <span className="mb-4 block text-sm font-medium">
                        خانه‌ای برای زندگی بهتر
                    </span>

                    <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        خانه‌ای که همیشه
                        <br />
                        رویایش را داشته‌اید، اینجاست.
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-white/80 md:text-lg">
                        از آپارتمان‌های مدرن تا ویلاهای رویایی، میان مجموعه‌ای
                        از املاک منتخب جستجو کنید و خانه‌ای متناسب با سبک زندگی
                        و بودجه خود پیدا کنید.
                    </p>
                </div>

                {/* Property search form */}
                <PropertySearchForm />
            </Shell>

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-l from-primary/90 via-primary/50 to-transparent" />
        </section>
    );
};

export default Hero;
