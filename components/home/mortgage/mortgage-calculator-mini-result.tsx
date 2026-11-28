import { toPersianNumber } from "@/lib/format";
import { MortgageResult } from "@/lib/mortgage";

const MortgageCalculatorMiniResult = ({
    result,
}: {
    result: MortgageResult;
}) => {
    const principalPercent = (result.monthlyPrincipal / result.monthly) * 100;
    const interestPercent = (result.monthlyInterest / result.monthly) * 100;

    return (
        <div className="p-4 rounded-xl bg-muted w-full text-muted-foreground">
            <p className="text-sm font-semibold">قسط ماهانه تخمینی</p>

            <div role="status" className="flex items-end gap-1.5 mt-1">
                <span className="text-primary font-extrabold text-2xl">
                    {Math.round(result.monthly).toLocaleString("fa-IR")}
                </span>
                <span className="text-sm">تومان در ماه</span>
            </div>

            <div
                aria-hidden="true"
                className="flex mt-4 h-2 overflow-hidden rounded-full bg-border">
                <div
                    className="bg-primary"
                    style={{ width: `${principalPercent}%` }}
                />
                <div
                    className="bg-accent"
                    style={{ width: `${interestPercent}%` }}
                />
            </div>

            <ul className="flex items-center justify-between text-sm mt-2">
                <li className="flex items-center gap-1.5">
                    <span
                        aria-hidden="true"
                        className="size-2 rounded-full bg-primary"
                    />
                    اصل وام: {toPersianNumber(Math.round(principalPercent))}٪
                </li>
                <li className="flex items-center gap-1.5">
                    <span
                        aria-hidden="true"
                        className="size-2 rounded-full bg-accent"
                    />
                    سود: {toPersianNumber(Math.round(interestPercent))}٪
                </li>
            </ul>
        </div>
    );
};

export default MortgageCalculatorMiniResult;
