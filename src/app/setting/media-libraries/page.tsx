
import { Create } from '@/components/setting/media-libraries/buttons';
import Grid from '@/components/setting/media-libraries/grid';
import Title from '@/components/setting/title';
import { fetchMediaLibraries } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Media Libraries',
};


export default async function MediaLibrariesPage() {
    const medias = await fetchMediaLibraries();

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