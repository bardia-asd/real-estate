"use client";
import { FormEvent, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Button } from "../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { PRICE_RANGES, PROPERTY_TYPES } from "@/constants/properties";
import { useRouter } from "next/navigation";

type ListingType = "buy" | "rent";

const PropertySearchForm = () => {
    const router = useRouter();
    const [listingType, setListingType] = useState<ListingType>("buy");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // Prevent the browser's default form submission
        e.preventDefault();

        // Collect the submitted form values
        const formData = new FormData(e.currentTarget);

        // Build the query string for the properties page
        const params = new URLSearchParams();

        const location = formData.get("location")?.toString().trim();
        const propertyType = formData.get("propertyType")?.toString();
        const priceRange = formData.get("priceRange")?.toString();

        // Convert the selected listing type to the value expected by the properties page
        params.set("listing", listingType === "buy" ? "sale" : "rent");

        // Add optional filters only when the user has selected a value
        if (location) params.set("location", location);
        if (propertyType && propertyType !== "any")
            params.set("type", propertyType);

        // Convert the selected price range into minimum and maximum price parameters
        if (priceRange && priceRange !== "any") {
            if (priceRange.endsWith("+")) {
                // A range ending with "+" represents a minimum price only
                params.set("minPrice", priceRange.slice(0, -1));
            } else {
                const [min, max] = priceRange.split("-");

                params.set("minPrice", min);
                params.set("maxPrice", max);
            }
        }

        // Navigate to the properties page with the selected filters
        router.push(`/properties?${params.toString()}`);
    };

    return (
        <div className="mt-9 lg:mt-12">
            <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/60 bg-background/95 p-3">
                {/* Select the listing type and update the available price ranges */}
                <ToggleGroup
                    type="single"
                    value={listingType}
                    onValueChange={(value) => {
                        if (value === "buy" || value === "rent")
                            setListingType(value);
                    }}>
                    <ToggleGroupItem value="buy">خرید</ToggleGroupItem>
                    <ToggleGroupItem value="rent">اجاره</ToggleGroupItem>
                </ToggleGroup>

                <div className="mt-2 flex flex-wrap gap-3">
                    {/* Location filter */}
                    <div className="w-full lg:flex-1 rounded-xl border px-3 py-2.5">
                        <Label
                            htmlFor="location"
                            className="text-xs font-medium text-muted-foreground">
                            شهر یا محله
                        </Label>

                        <div className="relative mt-1">
                            <MapPin
                                aria-hidden="true"
                                className="absolute inset-s-3 top-1/2 size-4 -translate-y-1/2 text-accent"
                            />

                            <Input
                                id="location"
                                name="location"
                                placeholder="نام شهر یا محله"
                                autoComplete="off"
                                className="h-9 rounded-none border-0 ps-10 focus-visible:ring-0"
                            />
                        </div>
                    </div>

                    {/* Property type filter */}
                    <div className="w-full sm:w-[calc(50%-0.375rem)] lg:flex-1 rounded-xl border px-3 py-2.5">
                        <Label
                            htmlFor="property-type"
                            className="text-xs font-medium text-muted-foreground">
                            نوع ملک
                        </Label>

                        <Select name="propertyType" defaultValue="any">
                            <SelectTrigger
                                id="property-type"
                                className="mt-1 h-9 w-full rounded-none border-0 px-0 focus-visible:ring-0">
                                <SelectValue placeholder="انتخاب نوع ملک" />
                            </SelectTrigger>

                            <SelectContent position="popper" align="start">
                                {PROPERTY_TYPES.map((type) => (
                                    <SelectItem
                                        key={type.value}
                                        value={type.value}>
                                        {type.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Price range filter */}
                    <div className="w-full sm:w-[calc(50%-0.375rem)] lg:flex-1 rounded-xl border px-3 py-2.5">
                        <Label
                            htmlFor="price-range"
                            className="text-xs font-medium text-muted-foreground">
                            محدوده قیمت
                        </Label>

                        <Select name="priceRange" defaultValue="any">
                            <SelectTrigger
                                id="price-range"
                                className="mt-1 h-9 w-full rounded-none border-0 px-0 focus-visible:ring-0">
                                <SelectValue placeholder="انتخاب محدوده قیمت" />
                            </SelectTrigger>

                            <SelectContent position="popper" align="start">
                                {PRICE_RANGES[listingType].map((price) => (
                                    <SelectItem
                                        key={price.value}
                                        value={price.value}>
                                        {price.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Submit the search form */}
                    <Button
                        type="submit"
                        size="lg"
                        className="h-12 w-full lg:w-auto lg:h-14 lg:self-end px-7">
                        <Search aria-hidden="true" />
                        جستجو
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default PropertySearchForm;
