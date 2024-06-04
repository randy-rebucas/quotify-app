import { fetchMediaLibraries } from "@/app/lib/data";
import { Create } from "@/app/ui/setting/media-libraries/buttons";
import Grid from "@/app/ui/setting/media-libraries/grid";


export default async function Layout({ children }: { children: React.ReactNode }) {
    const medias = await fetchMediaLibraries();

    return (
        <div className="flex h-screenmd:flex-row md:overflow-hidden">
            <div className="flex flex-col w-3/5">
                <div className="mb-3 mt-4 flex items-center justify-between gap-2 md:mt-8">
                    <Create />
                </div>

                <Grid medias={medias} />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto w-2/5">{children}</div>
        </div>
    );
}