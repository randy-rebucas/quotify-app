import { fetchMediaLibraries } from '@/app/lib/data';
import { Create } from '@/app/ui/setting/media-libraries/buttons';
import Grid from '@/app/ui/setting/media-libraries/grid';
import Title from '@/app/ui/title';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Media Libraries',
};

export default async function Page() {
    // const medias = await fetchMediaLibraries();

    return (
        <div className="w-full">
            detail
        </div>
    )
}