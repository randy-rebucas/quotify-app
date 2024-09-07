
import { Metadata } from "next";
import { Suspense } from "react";
import { CardsSkeleton, ProfileSkeleton } from "@/app/ui/skeletons";

import { fetchUserById } from "@/app/lib/data";
import { getSession } from "@/actions/session";
import { lusitana } from "@/app/ui/fonts";
import CardWrapper from "@/components/setting/cards";
import Profile from "@/components/setting/profile";

export const metadata: Metadata = {
    title: 'Settings'
};

export default async function Page() {
    const session = await getSession();

    const user = await fetchUserById(session?.userId);

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Settings
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {user.roles.some((role: any) => role === 'admin') &&
                    <Suspense fallback={<CardsSkeleton />}>
                        <CardWrapper />
                    </Suspense>
                }
                {user.roles.some((role: any) => role === 'user') &&
                    <Suspense fallback={<ProfileSkeleton/>}>
                        <Profile user={user}/>
                    </Suspense>
                }
            </div>
        </main>
    )
}