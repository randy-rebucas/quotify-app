import { fetchRefinements } from '@/app/lib/data';
import { Create } from '@/app/ui/setting/refinements/buttons';
import Table from '@/app/ui/setting/refinements/table';
import Title from '@/app/ui/title';
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