"use client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { useMortgageCalculator } from "@/hooks/use-mortgage-calculator";
import MortgageCalculatorMiniResult from "./mortgage-calculator-mini-result";
import MortgageCalculatorFieldGroup from "./mortgage-calculator-field-group";

const MortgageCalculatorMini = () => {
    const { values, setField, result } = useMortgageCalculator();

    return (
        <Card>
            <CardHeader>
                <CardHeader>
                    <h3 className="text-lg font-semibold">
                        محاسبه سریع وام مسکن
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        با وارد کردن مبلغ ملک و آورده خود، مبلغ وام و قسط ماهانه
                        را تخمین بزنید.
                    </p>
                </CardHeader>
            </CardHeader>
            <CardContent>
                <MortgageCalculatorFieldGroup
                    values={values}
                    onChange={setField}
                    loanAmount={result.loanAmount}
                />
            </CardContent>
            <CardFooter className="border-t-0">
                <MortgageCalculatorMiniResult result={result} />
            </CardFooter>
        </Card>
    );
};

export default MortgageCalculatorMini;
