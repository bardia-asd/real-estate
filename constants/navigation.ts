export type NavLink = {
    title: string;
    href: string;
};

export type FooterLinkGroup = {
    title: string;
    links: NavLink[];
};

export const NAV_LINKS: NavLink[] = [
    { title: "خانه", href: "/" },
    { title: "خرید ملک", href: "/properties?listing=sale" },
    { title: "اجاره ملک", href: "/properties?listing=rent" },
    { title: "مشاورین املاک", href: "/agents" },
];

export const MOBILE_NAV_LINKS: NavLink[] = [
    ...NAV_LINKS,
    { title: "درباره ما", href: "/about" },
    { title: "تماس با ما", href: "/contact" },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
    {
        title: "کاوش",
        links: [...NAV_LINKS],
    },
    {
        title: "ابزارها",
        links: [
            { title: "محاسبه‌گر وام مسکن", href: "/tools/mortgage-calculator" },
            { title: "مقایسه املاک", href: "/compare" },
            { title: "علاقه‌مندی‌ها", href: "/favorites" },
        ],
    },
    {
        title: "شرکت",
        links: [
            { title: "درباره ما", href: "/about" },
            { title: "تماس با ما", href: "/contact" },
            { title: "سوالات متداول", href: "/faq" },
            { title: "قوانین و مقررات", href: "/terms" },
            { title: "حریم خصوصی", href: "/privacy" },
        ],
    },
];
