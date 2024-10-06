'use client'

import { useEffect, useState } from "react";



export default function Lists() {
    const [bunnyFiles, setBunnyFiles] = useState<any[]>([]);

    useEffect(() => {
        const getBunnyFiles = async () => {
            try {
                const response = await fetch(`/api/bunnies`, {
                    method: "GET"
                });
            } catch (error) {
                console.error(error)
            }
        }
        getBunnyFiles();

    }, [])

    return (
        <>{bunnyFiles}</>
    )
}