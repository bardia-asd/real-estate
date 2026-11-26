import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PropertyCardSkeleton() {
    return (
        <Card className="h-full overflow-hidden pt-0" aria-hidden="true">
            <Skeleton className="aspect-4/3 w-full rounded-none" />

            <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-36" />
                    <Skeleton className="h-4 w-12" />
                </div>
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
            </CardContent>

            <CardFooter className="mt-auto flex-col">
                <div className="flex w-full gap-4">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                </div>
                <div className="mt-4 flex w-full items-center justify-between">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                </div>
            </CardFooter>
        </Card>
    );
}

export function PropertyGridSkeleton({ count = 4 }: { count?: number }) {
    return (
        <div className="container mx-auto px-4 py-14 lg:py-28">
            <div aria-busy="true">
                <p role="status" className="sr-only">
                    در حال بارگذاری املاک…
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: count }, (_, i) => (
                        <PropertyCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
