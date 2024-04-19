import Link from "next/link";
import Image from "next/image";
import StaggerCover from "../ui/stagger-cover";
import PageWrapper from "../ui/file-management/page-wrapper";
import ResultWrapper from "../ui/file-management/result-wrapper";
import { Suspense } from "react";
import { fetchProjects } from "../lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'File Management'
};

async function getProjects() {

    const res = await fetch('http://localhost:3000/api/projects')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    const data = await fetchProjects();

    const colors: string[] = ['bg-gray1B', 'bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-gray5A']

    return (
        <div className="wrapper lg:bg-transparent bg-black">
            <PageWrapper>
                <div className="grid lg:grid-cols-5 lg:grid-flow-col">
                    <div className="lg:col-span-1 col-span-12 row-span-2 p-30 flex flex-col justify-between row-end-3">
                        <Link href="/settings" className="flex wrapper__settings">
                            <Image
                                src="/images/icon-settings.svg"
                                width={50}
                                height={50}
                                className="pr-5 brightness-200 contrast-100"
                                alt="settings"
                            />
                            <span className="font-latoblack">settings</span>
                        </Link>
                        <Link href="/estimation">
                            <Image
                                src="/images/icon-create.svg"
                                width={50}
                                height={50}
                                alt="create-new"
                            />
                        </Link>
                    </div>
                    <Suspense fallback={<p>Loading projects...</p>}>
                        <ResultWrapper data={data} />
                    </Suspense>
                </div>
            </PageWrapper>

            <StaggerCover colors={colors} target={null} className="opacity-1" />
        </div>
    )
}