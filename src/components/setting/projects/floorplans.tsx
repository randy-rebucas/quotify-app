'use client'

import { useEffect, useState } from "react"
import Link from "next/link";

export default function Floorplans({ projectId }: { projectId: string }) {
    const [floorplan, setFloorplan] = useState<string>('');

    useEffect(() => {
        const getFloorplan = async (id: string) => {
            const response = await fetch(
                `/api/project/floorplan/${id}`,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );

            let floorplanResponse = await response.json();
            setFloorplan(floorplanResponse.path);
        }

        if (projectId) {
            getFloorplan(projectId)
        }
    }, [projectId])

    if (!floorplan) {
        return <p>--</p>
    }
    return <>
        {floorplan && <Link href={floorplan} target="_blank">View</Link>}
    </>
}