'use client';

import { useEffect } from "react";
import { useRequirementStore } from "@/app/lib/store/requirementStore"
import OptionWrapper from "../option-wrapper";

type Props = {
    requirements_groups: any[];
}

export default function FurnitureAndFurnishing({
    requirements_groups
}: Props) {
    const activeTab = useRequirementStore((state) => state.activeTab);
    const requirements = useRequirementStore((state) => state.requirements);
    const updateRequirements = useRequirementStore(
        (state) => state.updateRequirements
    );

    useEffect(() => {
        const data = requirements_groups.find(
            (requirements_group) =>
                requirements_group._id === "furniture and furnishing"
        );
        if (requirements_groups) {
            updateRequirements(data.requirements);
        }
    }, [requirements_groups, updateRequirements]);

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
