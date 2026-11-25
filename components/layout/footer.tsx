"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { FOOTER_LINK_GROUPS } from "@/constants/navigation";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
        // Prevent the browser's default form submission behavior
        e.preventDefault();

        alert("با موفقیت در خبرنامه عضو شدید!");

        // Clear the email field after submission
        setEmail("");
    };

    return (
        <footer
            aria-label="پاورقی وب‌سایت"
            className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-16 lg:py-20">
                {/* Main footer content */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_0.8fr_1fr_1.4fr] lg:gap-8">
                    {/* Brand information and social links */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" aria-label="کاشانه، صفحه اصلی">
                            <Image
                                src="/logo-footer.svg"
                                alt="لوگوی وب‌سایت املاک"
                                width={160}
                                height={40}
                                priority
                            />
                        </Link>

                        <p className="text-sm text-white/60 leading-relaxed mt-5">
                            ما اینجا هستیم تا مسیر خرید، فروش و اجاره ملک را
                            برای شما ساده‌تر کنیم. خانه‌ای که به دنبالش هستید،
                            شاید فقط چند قدم با شما فاصله داشته باشد.
                        </p>

                        <div className="mt-6 flex gap-2">
                            {/* Social media links */}
                            <Link
                                href="https://t.me/bardiaasd8"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="تلگرام">
                                <Image
                                    src="/telegram.png"
                                    alt="لوگوی تلگرام"
                                    width={28}
                                    height={28}
                                />
                            </Link>

                            <Link
                                href="https://github.com/bardia-asd/real-estate"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="گیت‌هاب">
                                <Image
                                    src="/github.png"
                                    alt="لوگوی گیت‌هاب"
                                    width={28}
                                    height={28}
                                    className="brightness-0 invert"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Render footer navigation groups from shared data */}
                    {FOOTER_LINK_GROUPS.map((group) => (
                        <nav key={group.title} aria-label={group.title}>
                            <h3 className="mb-3 text-sm font-semibold">
                                {group.title}
                            </h3>

                            <ul className="flex flex-col gap-2">
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/60 transition-colors hover:text-primary-foreground">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}

                    {/* Newsletter subscription and contact information */}
                    <div>
                        <h3 className="font-semibold uppercase text-white text-sm">
                            ارتباط با ما
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-white/60">
                            عضویت در خبرنامه برای دریافت فرصت‌های جدید ملکی
                        </p>

                        {/* Newsletter form */}
                        <form
                            className="mt-5"
                            onSubmit={handleNewsletterSubmit}>
                            <div className="flex items-center gap-2 border-b border-white/20 pb-2 transition-colors focus-within:border-accent">
                                <Label
                                    htmlFor="newsletter-email"
                                    className="sr-only">
                                    آدرس ایمیل
                                </Label>

                                <Input
                                    id="newsletter-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="آدرس ایمیل شما"
                                    className="border-0 rounded-none focus-visible:ring-0 focus-visible:outline-none placeholder:text-white/60"
                                />

                                <Button
                                    type="submit"
                                    size="icon"
                                    className="border-0 hover:bg-accent"
                                    aria-label="عضویت در خبرنامه">
                                    <ArrowLeft />
                                </Button>
                            </div>
                        </form>

                        {/* Contact phone number and email */}
                        <ul className="mt-6 flex flex-col gap-2.5">
                            <li className="flex items-center gap-2.5">
                                <Phone
                                    size={14}
                                    aria-hidden="true"
                                    className="shrink-0 text-accent"
                                />
                                <Link
                                    href="tel:+989399785322"
                                    className="text-sm text-white/60 transition-colors hover:text-primary-foreground"
                                    dir="ltr">
                                    0939 978 5322
                                </Link>
                            </li>

                            <li className="flex items-center gap-2.5">
                                <Mail
                                    size={14}
                                    aria-hidden="true"
                                    className="shrink-0 text-accent"
                                />
                                <Link
                                    href="mailto:bardiaasadi1382@gmail.com"
                                    className="text-sm text-white/60 transition-colors hover:text-primary-foreground">
                                    bardiaasadi1382@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright and legal navigation */}
                <div className="border-t border-white/10 mt-10 pt-6">
                    <div className="flex flex-col-reverse items-center justify-between gap-4 text-center md:flex-row md:text-right">
                        <p className="text-xs text-white/50">
                            © ۱۴۰۵ تمامی حقوق برای کاشانه محفوظ است.
                        </p>

                        <nav aria-label="لینک‌های قانونی">
                            <ul className="flex flex-wrap items-center justify-center gap-5">
                                <li>
                                    <Link
                                        href="/privacy"
                                        className="text-xs text-white/50 transition-colors hover:text-white">
                                        حریم خصوصی
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/terms"
                                        className="text-xs text-white/50 transition-colors hover:text-white">
                                        قوانین و مقررات
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-xs text-white/50 transition-colors hover:text-white">
                                        تماس با ما
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
