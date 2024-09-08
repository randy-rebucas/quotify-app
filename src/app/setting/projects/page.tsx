
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import { Create } from '@/components/setting/projects/buttons';
import Table from '@/components/setting/projects/table';
import Title from '@/components/setting/title';
import { fetchProjects, fetchProjectsCount } from '@/lib/data';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Projects',
};

export default async function ProjectsPage({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchProjectsCount(query);

    return (

        <div className="w-full">
            <Title title='Projects' />
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search projects..." />
                <Create />

            </div>
            <Suspense key={query + currentPage} fallback={<p>Loading...</p>}>
                <Table query={query} currentPage={currentPage}/>
            </Suspense>

            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
}