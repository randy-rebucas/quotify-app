
import { Metadata } from "next";
import { lusitana } from "../../ui/fonts";
import { Suspense } from "react";
import CardWrapper from "@/app/ui/setting/cards";
import { CardsSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
    title: 'Settings'
};

export default async function Page() {
    // const projects = await fetchProjects();

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Settings
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <RevenueChart revenue={revenue} />
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <LatestInvoices latestInvoices={latestInvoices} />
            </div> */}
        </main>
    )
}