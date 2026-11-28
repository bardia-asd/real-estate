const FA = "۰۱۲۳۴۵۶۷۸۹";

export const toEnglishDigits = (input: string) =>
    input.replace(/[۰-۹]/g, (d) => String(FA.indexOf(d))).replace(/٫/g, ".");

export const toPersianDigits = (input: string) =>
    input.replace(/\d/g, (d) => FA[Number(d)]);

export const sanitizeNumeric = (input: string) =>
    toEnglishDigits(input).replace(/[^\d.]/g, "");
