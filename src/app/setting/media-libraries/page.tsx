import { fetchMediaLibraries } from '@/app/lib/data';
import { Create } from '@/app/ui/setting/media-libraries/buttons';
import Title from '@/app/ui/title';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Media Libraries',
};

export default async function Page() {
    const medias = await fetchMediaLibraries();

    console.log(medias);
    return (
        <div className="w-full">
            <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search amenities..." /> */}
                <Title title='Media Libraries' />
                <Create /> 
            </div>
        </div>
    )
}