
import { Create } from '@/components/setting/media-libraries/buttons';
import Grid from '@/components/setting/media-libraries/grid';
import Table from '@/components/setting/media-libraries/table';
import Title from '@/components/setting/title';
import { fetchMediaLibraries } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Media Libraries',
};

async function getFiles() {
    const REGION = process.env.BUNNYCDN_REGION; // If German region, set this to an empty string: ''
    const BASE_HOSTNAME = process.env.BUNNYCDN_BASE_HOSTNAME;
    const HOSTNAME = REGION ? `${REGION}.${BASE_HOSTNAME}` : BASE_HOSTNAME;
    const STORAGE_ZONE_NAME = process.env.BUNNYCDN_STORAGE_ZONE;

    const bunnyResponse = await fetch(`https://${HOSTNAME}/${STORAGE_ZONE_NAME}/media/`, {
        method: "GET",
        headers: {
            AccessKey: process.env.BUNNYCDN_API_KEY as string,
            accept: "application/json",
        },
    });
    const getBunnyFiles = bunnyResponse.json();

    return getBunnyFiles;
}
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