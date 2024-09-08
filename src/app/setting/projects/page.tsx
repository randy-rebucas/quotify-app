
import Table from '@/components/setting/projects/table';
import Title from '@/components/setting/title';
import { fetchProjects } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects',
};

export default async function ProjectsPage() {
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