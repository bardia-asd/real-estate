"use client";

import { DirectionProvider } from "@radix-ui/react-direction";

type DirectionProviderProps = {
    children: React.ReactNode;
};

export function RTLProvider({ children }: DirectionProviderProps) {
    return <DirectionProvider dir="rtl">{children}</DirectionProvider>;
}
