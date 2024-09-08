
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import { Create } from '@/components/setting/requirement-levels/buttons';
import Table from '@/components/setting/requirement-levels/table';
import Title from '@/components/setting/title';
import { fetchRequirementLevelsPages } from '@/lib/data';
import { Metadata } from 'next';
import { Suspense } from 'react';


export const metadata: Metadata = {
    title: 'Requirement Levels',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchRequirementLevelsPages(query);

    return (
        <div className="w-full">
            <Title title='Requirement Label' />
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search requirement level..." />
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