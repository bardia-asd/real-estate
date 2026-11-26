import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, Bath, BedDouble, MapPin, Ruler } from "lucide-react";

import type { PropertySummary } from "@/types/properties";

import {
    formatArea,
    formatPrice,
    formatPropertyType,
    toPersianNumber,
} from "@/lib/format";
import { getPropertyImageUrl } from "@/lib/storage";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { PropertyCardActions } from "./property-card-actions";

const PropertyCard = ({ property }: { property: PropertySummary }) => {
    // Use the designated cover image, or fall back to the first available image
    const cover =
        property.property_images.find((img) => img.is_cover) ??
        property.property_images[0];

    // Generate a unique ID to associate the article with its title
    const titleId = `property-${property.id}-title`;

    return (
        <article aria-labelledby={titleId} className="h-full">
            <Card className="group/card relative h-full overflow-hidden pt-0 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring">
                <div className="relative aspect-4/3 overflow-hidden">
                    {/* Display the cover image or a fallback background */}
                    {cover ? (
                        <Image
                            src={getPropertyImageUrl(cover.storage_path)}
                            alt={cover.alt_text ?? ""}
                            fill
                            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 motion-reduce:transition-none motion-safe:group-hover/card:scale-105"
                        />
                    ) : (
                        <div
                            className="absolute inset-0 bg-muted"
                            aria-hidden="true"
                        />
                    )}

                    {/* Keep the badge and action buttons above the stretched link */}
                    <div className="absolute inset-x-3 top-3 z-10 flex items-center justify-between">
                        {property.is_featured ? (
                            <Badge className="h-6 bg-accent text-accent-foreground">
                                ملک ویژه
                            </Badge>
                        ) : (
                            <span />
                        )}

                        <PropertyCardActions title={property.title} />
                    </div>
                </div>

                <CardContent>
                    {/* Display the price and listing type */}
                    <div className="mb-2 flex items-center justify-between">
                        <p className="text-lg font-bold text-price">
                            {formatPrice(property.price)}
                            {property.listing_type === "rent" && (
                                <span className="text-sm font-normal text-muted-foreground">
                                    {" "}
                                    / ماه
                                </span>
                            )}
                        </p>
                        <span className="text-sm text-muted-foreground">
                            {property.listing_type === "sale"
                                ? "فروش"
                                : "اجاره"}
                        </span>
                    </div>

                    {/* The title link makes the entire card clickable */}
                    <h3 className="line-clamp-1 font-semibold leading-snug">
                        <Link
                            id={titleId}
                            href={`/properties/${property.slug}`}
                            className="transition-colors hover:text-accent after:absolute after:inset-0 focus-visible:outline-none">
                            {property.title}
                        </Link>
                    </h3>

                    {/* Display the property's address */}
                    <CardDescription className="mt-1.5 flex items-start gap-1.5">
                        <MapPin
                            size={14}
                            aria-hidden="true"
                            className="mt-0.5 shrink-0"
                        />
                        <span className="line-clamp-2">{property.address}</span>
                    </CardDescription>
                </CardContent>

                <CardFooter className="mt-auto flex-col">
                    {/* Display key property specifications */}
                    <ul
                        aria-label="مشخصات ملک"
                        className="flex w-full flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <li className="flex items-center gap-1.5">
                            <BedDouble size={14} aria-hidden="true" />
                            {toPersianNumber(property.bedrooms)} خواب
                        </li>
                        <li className="flex items-center gap-1.5">
                            <Bath size={14} aria-hidden="true" />
                            {toPersianNumber(property.bathrooms)} حمام
                        </li>
                        <li className="flex items-center gap-1.5">
                            <Ruler size={14} aria-hidden="true" />
                            {formatArea(property.area_sqm)}
                        </li>
                    </ul>

                    {/* Display the property type and a visual details indicator */}
                    <div className="mt-4 flex w-full items-center justify-between">
                        <Badge variant="secondary" className="h-6">
                            {formatPropertyType(property.property_type)}
                        </Badge>

                        {/* Visual indicator only; the title link already covers the card */}
                        <span
                            aria-hidden="true"
                            className="flex items-center gap-1 text-xs font-semibold text-primary transition-colors group-hover/card:text-accent">
                            مشاهده جزئیات
                            <ArrowLeft size={14} />
                        </span>
                    </div>
                </CardFooter>
            </Card>
        </article>
    );
};

export default PropertyCard;
