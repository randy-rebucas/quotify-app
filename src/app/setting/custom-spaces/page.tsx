import { lusitana } from '@/app/ui/fonts';
import { CreateCustomSpace } from '@/components/setting/custom-space/buttons';
import Table from '@/components/setting/custom-space/table';
import Title from '@/components/setting/title';
import { fetchCustomSpaces } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Custom Spaces',
};

export default async function Page() {
    const customSpaces = await fetchCustomSpaces();

    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search custom space..." /> */}
                <Title title='Custom Space' />
                <CreateCustomSpace />
            </div>
            <Table customSpaces={customSpaces} />
        </div>
    )
}