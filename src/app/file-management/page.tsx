import Link from "next/link";
import Image from "next/image";
import StaggerCover from "../ui/stagger-cover";
import PageWrapper from "../ui/file-management/page-wrapper";
import ResultWrapper from "../ui/file-management/result-wrapper";
import { Suspense } from "react";
import { fetchProjectsByUserId } from "../lib/data";
import { Metadata } from "next";
import { getSession } from "../actions/session";
import { PowerIcon } from "@heroicons/react/24/outline";
import { logout } from "../actions/auth";

export const metadata: Metadata = {
    title: 'File Management'
};

export default async function Page() {

    const session = await getSession();

    const projects = await fetchProjectsByUserId(session?.userId);

    const colors: string[] = ['bg-gray1B', 'bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-gray5A']

    return (
        <div className="wrapper lg:bg-transparent bg-black">
            <PageWrapper>
                <div className="grid lg:grid-cols-5 lg:grid-flow-col">
                    <div className="lg:col-span-1 col-span-12 row-span-2 p-30 flex flex-col justify-between row-end-3">
                        <div className="flex items-center justify-between">
                            <Link href="/setting" className="flex wrapper__settings">
                                <Image
                                    src="/images/icon-settings.svg"
                                    width={50}
                                    height={50}
                                    className="pr-5 brightness-200 contrast-100"
                                    alt="settings"
                                />
                                <span className="font-latoblack">settings</span>
                            </Link>
                            <form action={async () => {
                                'use server';
                                await logout();
                            }}>
                                <button className="hover:text-red-500 md:p-2 text-red text-sm w-full">
                                    <PowerIcon className="w-6" />
                                    <div className="hidden md:block">Sign Out</div>
                                </button>
                            </form>
                        </div>
                        <Link href="/estimation">
                            <Image
                                src="/images/icon-create.svg"
                                width={50}
                                height={50}
                                alt="create-new"
                            />
                        </Link>
                    </div>

                    <ResultWrapper projects={projects} />

                </div>
            </PageWrapper>

            <StaggerCover colors={colors} target={null} className="opacity-1" />
        </div>
    )
}

