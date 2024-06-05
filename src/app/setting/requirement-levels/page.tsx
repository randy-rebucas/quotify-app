import { fetchRequirementLevels } from '@/app/lib/data';
import { Create } from '@/app/ui/setting/requirement-levels/buttons';
import Table from '@/app/ui/setting/requirement-levels/table';
import Title from '@/app/ui/title';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Requirement Levels',
};

export default async function Page() {
    const requirementLevels = await fetchRequirementLevels();
    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search amenities..." /> */}
                <Title title='Requirement Label' />
                <Create />

            </div>
            <Table requirementLevels={requirementLevels} />
        </div>
    )
}