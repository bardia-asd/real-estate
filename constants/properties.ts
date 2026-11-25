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
