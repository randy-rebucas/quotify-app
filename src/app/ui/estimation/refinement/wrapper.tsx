
import { MouseEventHandler, ReactNode, useEffect } from "react";
import Tooltip from "@/components/tooltip";
import Buttons from "./buttons";
import { useRefinementStore } from "@/app/lib/store/refinementStore";

type Props = {
    stepIndex: number;
    isFirstStep: boolean;
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function Wrapper({ stepIndex, isFirstStep, children, onClick }: Props) {
    const refinement = useRefinementStore(state => state.refinement);
    const refinementId = useRefinementStore(state => state.refinementId);
    const getRefinement = useRefinementStore(state => state.getRefinement);

    useEffect(() => {
        if (refinementId) {
            getRefinement(refinementId)
        }
    }, [getRefinement, refinementId])

    return (
        <div className="js-step step active">
            <div className="col-start-1 col-span-4 flex flex-col justify-start items-start w-full h-full">
                <div className="col-start-1 col-span-4 flex flex-col justify-start items-start w-full h-full">
                    <div className="h-full w-full">
                        <div className="p-30 pt-[74px]">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <div className="h-1 w-20 bg-black"></div>
                                    <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                        {refinement?.name}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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