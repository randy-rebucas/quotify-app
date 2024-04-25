
import { Metadata } from "next";
import { lusitana } from "../../ui/fonts";

export const metadata: Metadata = {
    title: 'Settings'
};

export default async function Page() {
    // const projects = await fetchProjects();

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Settings
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <p>Test</p>
            </div>
        </main>
    )
}