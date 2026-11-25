import Image from "next/image";
import Link from "next/link";

import NavLinks from "./nav-links";
import MobileMenu from "./mobile-menu";
import { Button } from "../ui/button";
import { Heart, Plus, Scale, SquareArrowRightEnter } from "lucide-react";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 h-18 border-b bg-background backdrop-blur-xl">
            <div className="container mx-auto flex h-full items-center justify-between px-4">
                <Link href="/" aria-label="کاشانه، صفحه اصلی">
                    {/* Mobile logo */}
                    <Image
                        src="/logo-mark.svg"
                        alt="نشان وب‌سایت املاک"
                        width={36}
                        height={36}
                        className="size-9 md:hidden"
                        priority
                    />

                    {/* Desktop logo */}
                    <Image
                        src="/logo.svg"
                        alt="لوگوی وب‌سایت املاک"
                        width={160}
                        height={40}
                        className="hidden h-10 w-auto md:block"
                        priority
                    />
                </Link>

                <NavLinks />

                <div className="flex items-center gap-2">
                    {/* Create listing: desktop only */}
                    <Button size="lg" asChild className="hidden md:inline-flex">
                        <Link href="/sell">
                            <Plus />
                            <span>ثبت آگهی</span>
                        </Link>
                    </Button>

                    {/* Property comparison: desktop only */}
                    <Button
                        variant="outline"
                        size="icon-lg"
                        asChild
                        className="hidden md:inline-flex">
                        <Link href="/compare" aria-label="مقایسه املاک">
                            <Scale />
                        </Link>
                    </Button>

                    {/* Favorites: visible on all screen sizes */}
                    <Button variant="outline" size="icon-lg" asChild>
                        <Link href="/favorites" aria-label="علاقه‌مندی‌ها">
                            <Heart />
                        </Link>
                    </Button>

                    {/* Sign in: desktop only */}
                    <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="hidden md:inline-flex">
                        <Link href="/signin" aria-label="ورود یا ثبت‌نام">
                            <SquareArrowRightEnter className="rotate-180" />
                            <span className="hidden lg:inline">
                                ورود | ثبت‌نام
                            </span>
                        </Link>
                    </Button>

                    {/* Mobile navigation toggle */}
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;
