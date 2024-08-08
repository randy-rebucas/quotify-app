'use client';

import { IRequirement } from "@/app/models/Requirement";

export default function Intro({ requirementGroups }: { requirementGroups: any[] }) {
    return (
        <div className="intro-menu col-start-3">
            <div className="h-full">
                <div className="p-30 pt-col3">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h1 className="font-latobold text-white">
                                03:
                            </h1>
                            <h4 className="font-latolight mt-3 text-white">
                                Requirements
                            </h4>
                            <div className="estimation-col__bar bg-white mt-6 mb-6"></div>
                            <div className="estimation-col__content">
                                {requirementGroups.map((requirements_group: { _id: string; requirements: IRequirement[] }, index: number) => (
                                    <div key={index} className="step-indicator">
                                        <span className="font-latoblack">03.{index + 1}:</span> <br />
                                        {requirements_group._id}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}