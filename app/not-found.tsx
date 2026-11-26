import Link from "next/link";
import { Building2, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="flex min-h-svh flex-col items-center justify-center bg-background px-6 py-16 text-center">
            {/* House-number plate: ۴ ۰ ۴ where the zero is an open doorway */}
            <div
                aria-hidden="true"
                className="flex items-center gap-3 rounded-3xl border-2 border-primary bg-card p-2 shadow-sm sm:gap-5">
                <div className="flex items-center gap-2 rounded-2xl border border-primary/30 px-6 py-4 sm:gap-4 sm:px-10 sm:py-6">
                    <span className="text-6xl font-bold text-primary sm:text-8xl">
                        ۴
                    </span>

                    <svg
                        viewBox="0 0 64 96"
                        className="h-16 w-11 sm:h-24 sm:w-16"
                        fill="none">
                        {/* door frame */}
                        <path
                            d="M6 92V34C6 17 17 6 32 6s26 11 26 28v58"
                            stroke="var(--primary)"
                            strokeWidth="6"
                            strokeLinecap="round"
                        />
                        {/* open doorway */}
                        <path
                            d="M18 92V36c0-9 6-16 14-16s14 7 14 16v56z"
                            fill="var(--accent)"
                        />
                        {/* door leaf, ajar */}
                        <path
                            d="M18 92V36c0-5 2-9 5-12v68z"
                            fill="var(--primary)"
                        />
                        <circle cx="27" cy="62" r="2" fill="var(--secondary)" />
                    </svg>

                    <span className="text-6xl font-bold text-primary sm:text-8xl">
                        ۴
                    </span>
                </div>
            </div>

            <h1 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">
                صفحه‌ای با این نشانی پیدا نشد
            </h1>
            <p className="mt-3 max-w-md text-pretty leading-8 text-muted-foreground">
                ممکن است نشانی را اشتباه وارد کرده باشید یا صفحه جابه‌جا یا حذف
                شده باشد. از دکمه‌های زیر ادامه دهید.
            </p>

            <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
                <Button asChild size="lg" className="rounded-xl">
                    <Link href="/properties">
                        <Building2 className="size-4" />
                        مشاهده همه املاک
                    </Link>
                </Button>
                <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-xl">
                    <Link href="/">
                        <Home className="size-4" />
                        بازگشت به صفحه اصلی
                    </Link>
                </Button>
            </div>
        </main>
    );
}
