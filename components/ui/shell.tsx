import * as React from "react";
import { cn } from "@/lib/utils";

type ShellProps = React.HTMLAttributes<HTMLDivElement> & {
    as?: React.ElementType;
};

const Shell = ({
    as: Comp = "div",
    className,
    children,
    ...props
}: ShellProps) => {
    return (
        <Comp
            className={cn("container mx-auto max-w-7xl px-5", className)}
            {...props}>
            {children}
        </Comp>
    );
};

export default Shell;
