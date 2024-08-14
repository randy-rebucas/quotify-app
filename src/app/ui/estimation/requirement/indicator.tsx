'use client';

import { useRequirementLevelStore } from "@/app/lib/store/requirementLevelStore";
import { useRequirementStore } from "@/app/lib/store/requirementStore";
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

    const nextRequirement = estimates[estimateId].requirement.find(
        (requirement: { requirementId: string }) =>
            requirement.requirementId === requirementId
    );

    const setRequirementLevelUnitRate = useRequirementLevelStore(
        (state) => state.setRequirementLevelUnitRate
    );

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

                setRequirementLevelUnitRate(requirementLabelResponse.unitRate);
                setRequirementname(requirementLabelResponse.level);
            }
        };

        if (nextRequirement) {
            getRequirementLabel(nextRequirement.requirementLevelId);
        }
    }, [nextRequirement, setRequirementLevelUnitRate]);

    return requirementName.toLowerCase();
}
