'use client';

import { useEffect } from "react";
import OptionWrapper from "../option-wrapper";
import { useRequirementStore } from "@/lib/store/requirementStore";

type Props = {
    requirementGroups: any[];
}

export default function FurnitureAndFurnishing({
    requirementGroups
}: Props) {
    const activeTab = useRequirementStore((state) => state.activeTab);
    const requirements = useRequirementStore((state) => state.requirements);
    const updateRequirements = useRequirementStore(
        (state) => state.updateRequirements
    );

    useEffect(() => {
        const data = requirementGroups.find(
            (requirementGroup) =>
                requirementGroup._id === "furniture and furnishing"
        );
        if (requirementGroups) {
            updateRequirements(data.requirements);
        }
    }, [requirementGroups, updateRequirements]);

    const getRequirementByName = useRequirementStore(
        (state) => state.getRequirementByName
    );

    useEffect(() => {
        getRequirementByName('furniture and furnishing');

    }, [getRequirementByName]);

    return (
        <>
            {requirements &&
                requirements.map(
                    (requirement: { id: string; name: string, question: string; sort: string }) => (
                        <OptionWrapper
                            key={requirement.id}
                            requirementId={requirement.id} // requirements [...dynamic]                                  // project amenity id
                            requirementName={requirement.name} // requirement name
                            requirementQuestion={requirement.question}
                            tabIndex={activeTab}
                        />
                    )
                )}
        </>
    );
}
