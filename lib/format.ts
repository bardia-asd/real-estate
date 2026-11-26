import { PROPERTY_TYPES } from "@/constants/properties";

const faNumber = new Intl.NumberFormat("fa-IR");

export const toPersianNumber = (value: number | string): string =>
    faNumber.format(Number(value));

export const formatPrice = (price: number, unit = "تومان"): string =>
    `${toPersianNumber(price)} ${unit}`;

export const formatArea = (sqm: number): string =>
    `${toPersianNumber(sqm)} متر`;

export function formatPropertyType(type: string) {
    return PROPERTY_TYPES.find((item) => item.value === type)?.label ?? type;
}
