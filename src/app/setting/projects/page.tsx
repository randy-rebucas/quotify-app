import { fetchProjects } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Table from '@/app/ui/setting/projects/table';
import Title from '@/app/ui/title';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Projects',
};

export default async function Page() {
    const projects = await fetchProjects();
    return (

        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search projects..." /> */}
                <Title title='Projects' />
            </div>
            <Table projects={projects} />
        </div>
    )
}