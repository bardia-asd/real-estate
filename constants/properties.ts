import { BadgeCheck, FileCheck2, Headset, ShieldCheck } from "lucide-react";

export const PROPERTY_TYPES = [
    { label: "همه املاک", value: "any" },
    { label: "آپارتمان", value: "apartment" },
    { label: "خانه", value: "house" },
    { label: "ویلا", value: "villa" },
    { label: "خانه ویلایی", value: "townhouse" },
    { label: "ملک تجاری", value: "commercial" },
    { label: "زمین", value: "land" },
] as const;

export const PRICE_RANGES = {
    buy: [
        { label: "هر قیمتی", value: "any" },
        { label: "تا ۲ میلیارد تومان", value: "0-2000000000" },
        { label: "۲ تا ۵ میلیارد تومان", value: "2000000000-5000000000" },
        { label: "۵ تا ۱۰ میلیارد تومان", value: "5000000000-10000000000" },
        { label: "۱۰ تا ۲۰ میلیارد تومان", value: "10000000000-20000000000" },
        { label: "۲۰ تا ۵۰ میلیارد تومان", value: "20000000000-50000000000" },
        { label: "بیش از ۵۰ میلیارد تومان", value: "50000000000+" },
    ],
    rent: [
        { label: "هر قیمتی", value: "any" },
        { label: "تا ۵ میلیون تومان در ماه", value: "0-5000000" },
        { label: "۵ تا ۱۰ میلیون تومان در ماه", value: "5000000-10000000" },
        { label: "۱۰ تا ۲۰ میلیون تومان در ماه", value: "10000000-20000000" },
        { label: "۲۰ تا ۳۰ میلیون تومان در ماه", value: "20000000-30000000" },
        { label: "۳۰ تا ۵۰ میلیون تومان در ماه", value: "30000000-50000000" },
        { label: "بیش از ۵۰ میلیون تومان در ماه", value: "50000000+" },
    ],
} as const;

export const PROPERTY_CATEGORIES = [
    {
        id: "apartment",
        subtitle: "زندگی شهری",
        title: "آپارتمان",
        image: "/property-types/apartment.webp",
        alt: "ساختمان آپارتمانی مدرن",
        href: "/properties?types=apartment",
    },
    {
        id: "house",
        subtitle: "خانه‌ی خانوادگی",
        title: "خانه",
        image: "/property-types/house.webp",
        alt: "خانه‌ی مسکونی مستقل",
        href: "/properties?types=house",
    },
    {
        id: "villa",
        subtitle: "آرامش و حریم خصوصی",
        title: "ویلا",
        image: "/property-types/villa.webp",
        alt: "ویلای مدرن با فضای سبز",
        href: "/properties?types=villa",
    },
    {
        id: "commercial",
        subtitle: "فرصت‌های کسب‌وکار",
        title: "املاک تجاری",
        image: "/property-types/commercial.webp",
        alt: "ساختمان تجاری مدرن",
        href: "/properties?types=commercial",
    },
] as const;

export const TRUSTED_ITEMS = [
    {
        icon: ShieldCheck,
        title: "آگهی‌های تأییدشده",
        description:
            "هر ملک پیش از انتشار توسط تیم ما بررسی و اصالت آن تأیید می‌شود.",
    },
    {
        icon: BadgeCheck,
        title: "مشاوران معتبر",
        description:
            "فقط با مشاوران دارای پروانه کسب و تجربه‌ی میدانی همکاری می‌کنیم.",
    },
    {
        icon: FileCheck2,
        title: "قرارداد شفاف",
        description: "راهنمایی در مراحل حقوقی و قراردادی، بدون هزینه‌ی پنهان.",
    },
    {
        icon: Headset,
        title: "پشتیبانی همیشگی",
        description: "تیم پشتیبانی در تمام مراحل جست‌وجو و معامله کنار شماست.",
    },
] as const;

export const POPULAR_LOCATIONS = [
    {
        image: "/locations/tehran.webp",
        alt: "نمای شهر تهران با برج میلاد و رشته‌کوه البرز",
        title: "تهران",
        subtitle: "استان تهران",
        href: "/properties?location=tehran",
    },
    {
        image: "/locations/isfahan.webp",
        alt: "میدان نقش جهان و مسجد شیخ لطف‌الله در اصفهان",
        title: "اصفهان",
        subtitle: "استان اصفهان",
        href: "/properties?location=isfahan",
    },
    {
        image: "/locations/shiraz.webp",
        alt: "نمایی از شهر شیراز و دروازه قرآن",
        title: "شیراز",
        subtitle: "استان فارس",
        href: "/properties?location=shiraz",
    },
    {
        image: "/locations/mashhad.webp",
        alt: "نمایی از شهر مشهد",
        title: "مشهد",
        subtitle: "استان خراسان رضوی",
        href: "/properties?location=mashhad",
    },
];
