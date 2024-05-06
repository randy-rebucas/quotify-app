import { fetchCustomSpaces } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Table from '@/app/ui/setting/custom-space/table';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Custom Spaces',
};

export default async function Page() {
    const customSpaces = await fetchCustomSpaces();
    
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Custom Space</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search invoices..." /> */}
                <Link
                    href="/setting/users/create"
                    className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    <span className=" md:block">Create Custom Space</span>
                </Link>
            </div>
            <Table customSpaces={customSpaces} />
        </div>
    )
}