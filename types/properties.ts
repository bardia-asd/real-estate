export type PropertyType =
    | "apartment"
    | "house"
    | "villa"
    | "townhouse"
    | "commercial"
    | "land";

export type ListingType = "sale" | "rent";

export type PropertyImage = {
    id: string;
    storage_path: string;
    alt_text: string;
    is_cover: boolean;
    sort_order: number;
};

export type PropertySummary = {
    id: string;
    title: string;
    price: number;
    slug: string;
    is_featured: boolean;
    listing_type: ListingType;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area_sqm: number;
    property_type: PropertyType;
    property_images: Pick<
        PropertyImage,
        "storage_path" | "alt_text" | "is_cover"
    >[];
};
