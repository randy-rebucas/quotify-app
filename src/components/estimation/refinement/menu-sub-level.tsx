"use client";

// import { Estimate } from "@/app/lib/store/refinementStore";
import { ProjectAreaDefination } from "./form";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Indicator from "./indicator";
import { Estimate } from "@/lib/store/refinementStore";

type Props = {
    projectId: string;
    estimateId: number;
    estimates: Estimate[];
    refinementId?: string;
}
export default function MenuSubLevel({
    projectId,
    estimates,
    estimateId,
    refinementId,
}: Props) {
    const [projectAmenities, setProjectAmenities] = useState<ProjectAreaDefination[]>(
        []
    );
    const [projectCustomSpaces, setProjectCustomSpaces] = useState<ProjectAreaDefination[]>(
        []
    );
    const [projectAreaDefinations, setProjectAreaDefinations] = useState<ProjectAreaDefination[]>([]);

    useEffect(() => {
        const getProjectAmenitiesLabel = async (id?: string) => {
            if (id) {
                const response = await fetch(
                    `/api/project/amenities/by-project/${id}`,
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    }
                );

                let projectAmenitiesResponse = await response.json();

                setProjectAmenities(projectAmenitiesResponse);
            }
        };

        const getProjectCustomSpaces = async (id: string) => {
            const response = await fetch(
                `/api/project/custom-space/by-project/${id}`,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );

            let projectCustomSpaceResponse = await response.json();

            setProjectCustomSpaces(projectCustomSpaceResponse);
        }

        getProjectAmenitiesLabel(projectId);
        getProjectCustomSpaces(projectId);
    }, [projectId]);

    useEffect(() => {
        setProjectAreaDefinations([...projectCustomSpaces, ...projectAmenities]);
    }, [projectAmenities, projectCustomSpaces]);

    const getSelectedRefinementProjectAmenity = (
        index: number,
        id?: string
    ) => {
        let a = estimates[index].refinement.some(
            (refinement: {
                id: string;
                refinementId: string;
                refinementLevel: string;
            }) => {
                return (
                    refinement.id === id &&
                    refinement.refinementId === refinementId
                );
            }
        );
        return a;
    };

    return (
        <>
            <div className="js-sub-step pt-3">
                {projectAreaDefinations &&
                    projectAreaDefinations.map((projectAreaDefination: { _id: string; name: string, type: string }, index: number) => (
                        <div
                            key={projectAreaDefination._id}
                            className={clsx(
                                `js-step-indicator pl-3`,
                                getSelectedRefinementProjectAmenity(
                                    estimateId,
                                    projectAreaDefination._id
                                )
                                    ? "flex step-indicator "
                                    : "hidden"
                            )}
                            style={{ justifyContent: "space-between" }}
                            data-category={projectAreaDefination.name}
                        >
                            {getSelectedRefinementProjectAmenity(
                                estimateId,
                                projectAreaDefination._id
                            ) && (
                                    <>
                                        <Indicator
                                            refinementId={refinementId}
                                            id={projectAreaDefination._id}
                                            estimateId={estimateId}
                                        />

                                        <div
                                            className="js-step-indicator step-indicator pl-3 checked"
                                            style={{
                                                paddingBottom: "unset",
                                            }}
                                            data-category="03.1.1"
                                        ></div>
                                    </>
                                )}
                        </div>
                    ))}
            </div>
        </>
    );
}