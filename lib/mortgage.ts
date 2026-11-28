export type MortgageInput = {
    price: number;
    downPaymentPercent: number;
    annualRatePercent: number;
    years: number;
};

export type MortgageResult = {
    downAmount: number;
    loanAmount: number;
    monthly: number;
    total: number;
    totalInterest: number;
    monthlyInterest: number;
    monthlyPrincipal: number;
};

export const calculateMortgage = ({
    price,
    downPaymentPercent,
    annualRatePercent,
    years,
}: MortgageInput): MortgageResult => {
    const downPercent = Math.min(Math.max(downPaymentPercent, 0), 100);
    const downAmount = (price * downPercent) / 100;
    const loanAmount = Math.max(price - downAmount, 0);
    const monthlyRate = annualRatePercent / 100 / 12;
    const months = years * 12;

    let monthly = 0;
    if (loanAmount > 0 && months > 0)
        monthly =
            monthlyRate === 0
                ? loanAmount / months
                : (loanAmount * monthlyRate) /
                  (1 - Math.pow(1 + monthlyRate, -months));

    const monthlyInterest = loanAmount * monthlyRate;
    const monthlyPrincipal = monthly - monthlyInterest;

    const total = monthly * months;
    const totalInterest = total - loanAmount;

    return {
        downAmount,
        loanAmount,
        monthly,
        monthlyPrincipal,
        monthlyInterest,
        total,
        totalInterest,
    };
};
