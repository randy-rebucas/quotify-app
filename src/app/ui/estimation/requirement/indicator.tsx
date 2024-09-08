'use client';

import { useRequirementStore } from "@/lib/store/requirementStore";
import { useEffect, useState } from "react";

type Props = {
    estimateId: number;
    requirementId: string;
}
export default function Indicator({
    estimateId,
    requirementId,
}: Props) {
    const [requirementName, setRequirementname] = useState<string>("");
    const estimates = useRequirementStore((state) => state.estimates);

    useEffect(() => {
        

        const getRequirementLabel = async (id?: string) => {
            if (id) {
                const response = await fetch(`/api/requirement-level/${id}`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                });

                let requirementLabelResponse = await response.json();

                setRequirementname(requirementLabelResponse.level);
            }
        };

        if (estimates) {

            const nextRequirement = estimates[estimateId].requirement.find(
                (requirement: { requirementId: string }) =>
                    requirement.requirementId === requirementId
            );

            getRequirementLabel(nextRequirement.requirementLevelId);
        }

    }, [estimateId, estimates, requirementId]);

    return (
        <>
            {requirementName.toLowerCase()}
        </>
    )
}
