import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vazirmatn = localFont({
    src: "./fonts/Vazirmatn[wght].woff2",
    display: "swap",
    weight: "100 900",
    variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
    title: {
        default: "کاشانه | خرید، فروش و اجاره ملک",
        template: "%s | کاشانه",
    },
    description:
        "در کاشانه به‌راحتی خانه، آپارتمان و ملک مورد نظر خود را برای خرید، فروش یا اجاره پیدا کنید. جستجوی هوشمند املاک و ارتباط با مشاوران حرفه‌ای.",

    applicationName: "کاشانه",

    authors: [{ name: "Bardia Asadi" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="fa"
            dir="rtl"
            className={`${vazirmatn.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
