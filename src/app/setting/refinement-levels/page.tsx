import { fetchRefinementLevels } from '@/app/lib/data';
import { Create } from '@/app/ui/setting/refinement-levels/buttons';
import Table from '@/app/ui/setting/refinement-levels/table';
import Title from '@/app/ui/title';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Refinement Levels',
};

export default async function Page() {
    const refinementLevels = await fetchRefinementLevels();
    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search amenities..." /> */}
                <Title title='Refinement Label' />
                <Create />

            </div>
            <Table refinementLevels={refinementLevels} />
        </div>
    )
}