'use client'

import { useEffect, useState } from "react";

type Props = {
    projectId: string
}

export default function Count({ projectId }: Props) {

    const [estimatePropertyCount, setEstimatePropertyCount] = useState<number>(0);

    useEffect(() => {
        const getEstimateByProperty = async (projectId: string) => {
            const response = await fetch(`/api/estimate/by-property/${projectId}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            let estimatePropertyResponse = await response.json();

            setEstimatePropertyCount(estimatePropertyResponse.length);
        }

        if (projectId) {
            getEstimateByProperty(projectId);
        }

    }, [projectId])

    return (
        <div className="file__est">
            {estimatePropertyCount} estimates
        </div>
    );
}
