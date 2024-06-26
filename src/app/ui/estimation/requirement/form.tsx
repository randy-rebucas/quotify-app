'use client';

import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import { FormEvent, useEffect, useMemo, useState } from "react";
import Wrapper from "./wrapper";
import FinishAndCertification from "./steps/finish-and-certifications";
import MepFeatures from "./steps/mep-features";
import BaseBuildingConditions from "./steps/base-building-conditions";
import Technology from "./steps/technology";
import FurnitureAndFurnishing from "./steps/furniture-and-furnishing";
import Review from "./steps/review";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { menuMapping, tabMapping } from "./entities";
import { v4 as uuid } from 'uuid'
import TabForm from "./tab-form";
import { IRequirement } from "@/app/models/Requirement";
import { INITIAL_DATA, useRequirementStore } from "@/app/lib/store/requirementStore";

export type StimateData = {
    id: number;
    name: string;
    requirement: any | null;
};

export default function Form({ requirements_groups, project_id }: { requirements_groups: any[], project_id: string }) {
    const router = useRouter();

    const estimates = useRequirementStore(state => state.estimates);
    const addEstimate = useRequirementStore(state => state.addEstimate);

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isExpanded, setIsExpanded] = useState<boolean>(true)
    const [activeTab, setActiveTab] = useState<number>(0)
    const [error, setError] = useState<string | null>(null)

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <FinishAndCertification tabiIndex={activeTab} key={uuid()} />,
            <MepFeatures tabiIndex={activeTab} key={uuid()} />,
            <BaseBuildingConditions tabiIndex={activeTab} key={uuid()} />,
            <Technology tabiIndex={activeTab} key={uuid()} />,
            <FurnitureAndFurnishing tabiIndex={activeTab} key={uuid()} />,
            <Review tabiIndex={activeTab} key={uuid()} />
        ])

    // 
    const handleTabFormSubmit = (e: any) => {
        e.preventDefault()
        let sourceId = e.target.source.value;

        let source = estimates.find((stimate) => stimate.id == sourceId);

        const initialRequirement = {
            id: estimates.length,
            name: e.target.title.value,
            requirement: source?.requirement
        };

        addEstimate(initialRequirement)
    }

    let last_stimate = estimates.length - 1;

    // update this to action and implement dispatch
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        if (!isLastStep) return next()
        try {
            let form_data = {
                estimates, ...{
                    projectId: project_id,
                    section: 'requirement'
                }
            };

            const response = await fetch('/api/project/requirement', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form_data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }

            let projectResponse = await response.json();

            if (response.status === 200) {
                router.push(`/estimation/refinement/${projectResponse.id}`)
            }
        } catch (error: any) {
            setError(error.message)
        } finally {
            setIsLoading(false) // Set loading to false when the request completes
        }
    }

    const getSelectedRequirement = (index: number, requirementId: string | undefined, lookup: string) => {
        // console.log(index); // 0,1,2,3
        // console.log(requirementId); // 665aa9359cd783ddb318bd00
        // console.log(lookup); // furniture and furnishing
        let selectedValue = estimates.find((stimate) => stimate.id == index);

        let requirement;
        // console.log(selectedValue);
        const requirementMap = selectedValue?.requirement;

        if (requirementMap) {
            switch (menuMapping.get(lookup)) {
                case 'finish':
                    requirement = Object.hasOwn(requirementMap, 'finish') ? requirementMap.finish : '';
                    break;
                case 'sustainabilityCertification':
                    requirement = Object.hasOwn(requirementMap, 'sustainabilityCertification') ? requirementMap.sustainabilityCertification : '';
                    break;
                case 'mepFeatures':
                    requirement = Object.hasOwn(requirementMap, 'mepFeatures') ? requirementMap.mepFeatures : '';
                    break;
                case 'buildingCondition':
                    requirement = Object.hasOwn(requirementMap, 'buildingCondition') ? requirementMap.buildingCondition : '';
                    break;
                case 'technology':
                    requirement = Object.hasOwn(requirementMap, 'technology') ? requirementMap.technology : '';
                    break;
                case 'furniture':
                    requirement = Object.hasOwn(requirementMap, 'furniture') ? requirementMap.furniture : '';
                    break;
                default:
                    break;
            }
        }

        return requirement;
    }

    // console.log('active tab:' + activeTab)
    // console.log(estimates);
    return (
        <>
            <div data-col={last_stimate + 1} className={clsx(
                `js-tabs absolute z-30 ${isExpanded ? `right-${estimates.length * 2}0` : 'right-20'}`,
                {
                    'top-[52px]': estimates.length == 1,
                    'top-[14px]': estimates.length > 1,
                }
            )}>
                {estimates.length > 1 && <div className={clsx(
                    'bg-darkgreen mb-1 h-[55px] w-[43px] flex items-center justify-center',
                    {
                        'rotate-180': isExpanded
                    }
                )}>
                    <a href="#" className="js-tabs__toggle" onClick={() => setIsExpanded(!isExpanded)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                            <path d="M11 2L3 10L11 18" stroke="#99B9B6" strokeWidth="3" />
                        </svg>
                    </a>
                </div>}
                <h3>
                    {estimates.map((stimate: StimateData, index: number) => (
                        <a key={index} data-menu={tabMapping.get(stimate.id)} className={clsx(
                            'js-tabs-tab tabs-tab',
                            {
                                'active': activeTab == stimate.id,
                                'cursor-pointer': activeTab != stimate.id
                            }
                        )} onClick={() => setActiveTab(stimate.id)}>
                            {tabMapping.get(stimate.id)}:
                        </a>
                    ))}
                </h3>
                {estimates.length < 4 && <TabForm stimates={estimates} onSubmit={handleTabFormSubmit} />}
            </div>

            {estimates.map((stimate: StimateData, index: number) => (
                <div key={index} data-menu={tabMapping.get(stimate.id)}
                    className={clsx(
                        `menu animate fade-in-2 bg-green1 flex flex-col justify-start items-start w-full h-full overflow-y-scroll`,
                        {
                            'col-start-5': !isExpanded,
                            'z-30 active': activeTab == stimate.id,
                            'z-10': activeTab != stimate.id,
                            'js-main-menu col-start-5 bg-green6 bg-green1 ': index == 0, // A
                            'absolute col-span-1 col-start-4 bg-green2 ': index == 1, // B
                            'absolute col-span-1 col-start-3 bg-green3 ': index == 2, // C
                            'absolute col-span-1 col-start-2 bg-green4 ': index == 3, // D
                        },
                    )} >
                    <div className="h-full flex flex-col justify-between">
                        <div className="estimation-col__header px-30">
                            <div className="flex items-end justify-start mt-[7.593vh]">
                                <h2 className="opacity-60">{stimate.name}</h2>
                            </div>
                            <p className="mt-3 font-latolight">this is a short description for this estimate.</p>
                        </div>

                        <div className="flex flex-col justify-between h-full mt-[8.519vh]">
                            <div className="px-30">

                                <div className={clsx(
                                    `js-main-menu__header`,
                                    {
                                        'invisible': activeTab != stimate.id,
                                    },
                                )}>
                                    <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-white">
                                        03:
                                    </h2>
                                    <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-white">
                                        Requirements
                                    </h4>
                                    <div className="estimation-col__bar bg-white mt-6 mb-6"></div>
                                </div>

                                <div className="js-main-menu__content estimation-col__content">
                                    {requirements_groups.map((requirements_group: { _id: string; requirements: { id: string; name: string }[] }, index: number) => (
                                        <div key={requirements_group._id} className={clsx(
                                            'js-step-indicator step-indicator',
                                            {
                                                'active': index === currentStepIndex && activeTab === stimate.id,
                                            },
                                        )}>
                                            <span className="font-latoblack">03.{index + 1}:</span> <br />
                                            {requirements_group._id}
                                            {requirements_group.requirements.map((requirement: { id: string; name: string }, index: number) => (
                                                <>
                                                    <div data-category={`03.1.${index + 1}`}>
                                                        <div key={`option-${index}`} className="pl-3 text-sm">{requirement.name}</div>
                                                        {getSelectedRequirement(stimate.id, requirement.id, requirement.name) && <div className="js-step-indicator step-indicator pl-3 checked" style={{
                                                            paddingBottom: 'unset'
                                                        }} data-category={`03.1.${index + 1}`}>
                                                            <Indicator requirementId={getSelectedRequirement(stimate.id, requirement.id, requirement.name)} />
                                                        </div>}
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-darkgreen2 p-30 flex items-center sticky w-full bottom-0 justify-between text-white">
                                <span className="text-[18px] leading-[24px] font-lato">cost estimate <br />per square foot</span>
                                <span className="text-[53px] font-latoblack">$55</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="col-span-4 h-full w-full relative overflow-y-scroll overflow-x-hidden">

                <form onSubmit={onSubmit} className="h-full" >
                    <Wrapper stepIndex={currentStepIndex} isFirstStep={isFirstStep} onClick={back}>
                        {step}
                    </Wrapper>
                </form >
            </div>
        </>
    )
}

export function Indicator({ requirementId }: { requirementId: string }) {
    const [requirementName, setRequirementname] = useState<string>('')

    useEffect(() => {
        const getRequirementLabel = async (id?: string) => {
            if (id) {

                const response = await fetch(`/api/requirement-level/${id}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                });

                let requirementLabelResponse = await response.json();
                setRequirementname(requirementLabelResponse.level);
            }
        }

        if (requirementId) {
            getRequirementLabel(requirementId);
        }
    }, [requirementId])


    return requirementName;
} 