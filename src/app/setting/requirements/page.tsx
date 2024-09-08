
import { Create } from '@/components/setting/requirements/buttons';
import Table from '@/components/setting/requirements/table';
import Title from '@/components/setting/title';
import { fetchRequirements } from '@/lib/data';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Requirements',
};

export default async function RequirementsPage() {
    const requirements = await fetchRequirements();

    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search amenities..." /> */}
                <Title title='Requirements' />
                <Create />

            </div>
            <Table requirements={requirements} />
        </div>
    )
}