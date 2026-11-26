import { createClient } from "@/lib/supabase/server";
import { PropertySummary } from "@/types/properties";
import { cookies } from "next/headers";

export const PROPERTY_SUMMARY_SELECT = `id, title, price, slug, listing_type, is_featured, address, bedrooms, bathrooms, area_sqm, property_type,property_images(storage_path, alt_text, is_cover)`;

export const getFeaturedProperties = async (): Promise<PropertySummary[]> => {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
        .from("properties")
        .select(PROPERTY_SUMMARY_SELECT)
        .eq("is_featured", true)
        .order("created_at", { ascending: false })
        .range(0, 3);

    if (error) throw new Error(error.message);
    return data ?? [];
};
