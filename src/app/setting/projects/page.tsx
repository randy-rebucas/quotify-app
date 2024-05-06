import { fetchProjects } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Table from '@/app/ui/setting/projects/table';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Projects',
};

export default async function Page() {
    const projects = await fetchProjects();
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Projects</h1>
            </div>
            <Table projects={projects} />
        </div>
    )
}