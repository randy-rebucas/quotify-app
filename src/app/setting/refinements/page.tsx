
import { Create } from '@/components/setting/refinements/buttons';
import Table from '@/components/setting/refinements/table';
import Title from '@/components/setting/title';
import { fetchRefinements } from '@/lib/data';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Refinements',
};

export default async function Page() {
    const refinements = await fetchRefinements();
    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search amenities..." /> */}
                <Title title='Refinements' />
                <Create />

            </div>
            <Table refinements={refinements} />
        </div>
    )
}