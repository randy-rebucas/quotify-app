
import { MouseEventHandler, ReactNode, useEffect } from "react";
import Tooltip from "../../tooltip";
import Buttons from "./buttons";
import { useRequirementStore } from "@/app/lib/store/requirementStore";

type FormWrapperProps = {
    stepIndex: number;
    isFirstStep: boolean;
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>
}


export default function Wrapper({ stepIndex, isFirstStep, children, onClick }: FormWrapperProps) {

    const requirement = useRequirementStore(state => state.requirement);
    const requirementId = useRequirementStore(state => state.requirementId);
    const getRequirementById = useRequirementStore(state => state.getRequirementById);

    useEffect(() => {
        if (requirementId) {
            getRequirementById(requirementId)
        }
    }, [getRequirementById, requirementId])

    return (
        <div className="js-step step active">
            <div className="col-span-1 flex flex-col justify-start items-start w-full h-full">
                {requirement && <div className="h-full w-full">
                    <div className="p-30 pt-[74px]">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <div className="h-1 w-20 bg-black"></div>
                                <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                    {requirement?.name}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="p-30 pt-[74px]">
                        <div className="flex flex-col justify-between h-full">
                            <h5 className="font-latobold mt-1 xl:text-2xl text-1xl text-black">
                                03.{stepIndex + 1}:
                            </h5>
                            <p>{requirement?.question}</p>
                        </div>
                    </div>
                </div>}
                {/* <!--
                    /*  Tooltip
                    /*  This block shows the tooltip
                    /--> */}
                <Tooltip />

            </div>

            {children}

            <Buttons isFirstStep={isFirstStep} onClick={onClick} />
        </div>
    )
}