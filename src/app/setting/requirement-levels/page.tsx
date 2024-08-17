import { fetchRequirementLevels, fetchRequirementLevelsPages } from '@/app/lib/data';
import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';
import { Create } from '@/app/ui/setting/requirement-levels/buttons';
import Table from '@/app/ui/setting/requirement-levels/table';
import Title from '@/app/ui/title';
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
                <Search placeholder="Search amenities..." />
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