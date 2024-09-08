import { fetchMediaLibraryById } from "@/lib/data";
import Image from "next/image";

export default async function ProjectPage({ params }: { params: { id: string } }) {
    const id = params.id;

    const media = await fetchMediaLibraryById(id);

    return (
        <>
            <p>Project details</p>
        </>
    )
}