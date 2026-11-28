import { DollarSign } from "lucide-react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FormValues, LOAN_TERMS } from "@/constants/mortgage";
import { toPersianDigits } from "@/lib/digits";
import { toPersianNumber } from "@/lib/format";

type Props = {
    values: FormValues;
    onChange: (key: keyof FormValues, value: string) => void;
    loanAmount: number;
};

const MortgageCalculatorFieldGroup = ({
    values,
    onChange,
    loanAmount,
}: Props) => {
    return (
        <FieldGroup>
            <Field>
                <FieldLabel
                    htmlFor="property-price"
                    className="text-muted-foreground">
                    قیمت ملک
                </FieldLabel>
                <InputGroup className="h-10">
                    <InputGroupInput
                        type="text"
                        inputMode="decimal"
                        id="property-price"
                        min={0}
                        value={toPersianNumber(values.price)}
                        onChange={(e) => onChange("price", e.target.value)}
                        placeholder="مبلغ ملک را وارد کنید"
                    />
                    <InputGroupAddon>
                        <DollarSign />
                    </InputGroupAddon>
                </InputGroup>
            </Field>

            <div className="grid grid-cols-2 gap-3">
                <Field>
                    <FieldLabel
                        htmlFor="down-payment"
                        className="text-muted-foreground">
                        پیش‌پرداخت
                    </FieldLabel>
                    <InputGroup className="h-10 ps-2">
                        <InputGroupInput
                            type="text"
                            inputMode="decimal"
                            id="down-payment"
                            min={0}
                            max={100}
                            value={toPersianDigits(values.downPayment)}
                            onChange={(e) =>
                                onChange("downPayment", e.target.value)
                            }
                            placeholder="درصد پیش‌پرداخت"
                        />
                        <InputGroupAddon align="inline-end">%</InputGroupAddon>
                    </InputGroup>
                </Field>

                <Field>
                    <FieldLabel
                        htmlFor="interest-rate"
                        className="text-muted-foreground">
                        نرخ بهره
                    </FieldLabel>
                    <InputGroup className="h-10 ps-2">
                        <InputGroupInput
                            type="text"
                            inputMode="decimal"
                            id="interest-rate"
                            min={0}
                            max={100}
                            step="0.1"
                            value={toPersianDigits(values.interestRate)}
                            onChange={(e) =>
                                onChange("interestRate", e.target.value)
                            }
                            placeholder="نرخ بهره را وارد کنید"
                        />
                        <InputGroupAddon align="inline-end">%</InputGroupAddon>
                    </InputGroup>
                </Field>

                <Field>
                    <FieldLabel
                        htmlFor="loan-term"
                        className="text-muted-foreground">
                        مدت بازپرداخت
                    </FieldLabel>
                    <Select
                        value={values.loanTerm}
                        onValueChange={(v) => onChange("loanTerm", v)}>
                        <SelectTrigger
                            id="loan-term"
                            className="w-full data-[size=default]:h-10">
                            <SelectValue placeholder="مدت بازپرداخت را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                            {LOAN_TERMS.map((loan) => (
                                <SelectItem key={loan.value} value={loan.value}>
                                    {loan.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </Field>

                <Field>
                    <FieldLabel className="text-muted-foreground">
                        مبلغ وام
                    </FieldLabel>
                    <p className="flex h-10 items-center text-sm font-semibold text-primary">
                        {toPersianNumber(loanAmount)}
                        تومان
                    </p>
                </Field>
            </div>
        </FieldGroup>
    );
};

export default MortgageCalculatorFieldGroup;
