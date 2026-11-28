"use client";

import { useState } from "react";
import { DEFAULT_VALUES } from "@/constants/mortgage";
import { calculateMortgage } from "@/lib/mortgage";
import { sanitizeNumeric } from "@/lib/digits";

export const useMortgageCalculator = (initial = DEFAULT_VALUES) => {
    const [values, setValues] = useState(initial);
    const setField = (key: keyof typeof initial, value: string) =>
        setValues((prev) => ({ ...prev, [key]: sanitizeNumeric(value) }));

    const result = calculateMortgage({
        price: Number(values.price) || 0,
        downPaymentPercent: Number(values.downPayment) || 0,
        annualRatePercent: Number(values.interestRate) || 0,
        years: Number(values.loanTerm) || 0,
    });

    return { values, setField, result };
};
