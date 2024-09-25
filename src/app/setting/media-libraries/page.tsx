
import { Create } from '@/components/setting/media-libraries/buttons';
import Grid from '@/components/setting/media-libraries/grid';
import Table from '@/components/setting/media-libraries/table';
import Title from '@/components/setting/title';
import { fetchMediaLibraries, getFiles } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Media Libraries',
};


export default async function MediaLibrariesPage() {
    const medias = await fetchMediaLibraries();
    const files = await getFiles();
    console.log(files)
    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search amenities..." /> */}
                <Title title='Media Libraries' />
                <Create />
            </div>
            <Grid medias={medias} />
        </div>
    )
}