import { fetchRequirementLevels } from '@/app/lib/data';
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
    const currentPage = 1;
    const pageSize = 10;
    const onPageChange = () => {
        // setCurrentPage(page);
    };
    const requirementLevels = await fetchRequirementLevels();
    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Title title='Requirement Label' />

                {/* <Search placeholder="Search amenities..." /> */}
                <Create />

            </div>
            <Suspense key={currentPage} fallback={<p>Loading...</p>}>
                <Table requirementLevels={requirementLevels} />
            </Suspense>

            {/* <div className="mt-5 flex w-full justify-center">
                <Pagination
                    items={requirementLevels.length} // 100
                    currentPage={currentPage} // 1
                    pageSize={pageSize} // 10
                    onPageChange={onPageChange}
                />
            </div> */}
        </div>
    )
}