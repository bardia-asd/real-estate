export const LOAN_TERMS = [
    { label: "۵ سال", value: "5" },
    { label: "۱۰ سال", value: "10" },
    { label: "۱۵ سال", value: "15" },
    { label: "۲۰ سال", value: "20" },
    { label: "۲۵ سال", value: "25" },
    { label: "۳۰ سال", value: "30" },
] as const;

export const DEFAULT_VALUES: Record<string, string> = {
    price: "5000000000",
    downPayment: "20",
    interestRate: "6",
    loanTerm: "20",
};

export type FormValues = typeof DEFAULT_VALUES;
