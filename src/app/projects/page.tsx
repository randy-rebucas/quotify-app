import WrapperCover from "@/components/wrapper-cover";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/projects/content-wrapper";
import PageWrapper from "@/components/projects/page-wrapper";
import { getSession } from "@/actions/session";
import { fetchProjectsByUserId } from "@/lib/data";

export const metadata: Metadata = {
    title: 'My Projects',
};

export default async function ProjectsPage() {
    const session = await getSession();
    const projects = await fetchProjectsByUserId(session?.userId);

    const colors: string[] = ['bg-gray1B', 'bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-gray5A']

    return (
        <div className="wrapper lg:bg-transparent bg-black">
            <PageWrapper>
                
                <ContentWrapper projects={projects}/>

            </PageWrapper>

            <WrapperCover colors={colors} target={null} className="opacity-1" />
        </div>
    )
}