'use client'

import { useAppStore } from "@/app/lib/store/appStore";
import Detail from "./detail";

export default function DetailWrapper({ requirementGroups, refinements }: { requirementGroups: any[], refinements: any[] }) {

    const projectId = useAppStore(state => state.projectId);

    return (
        <>
            {projectId && <div className='js-open-results-content open-results-content wrapper__content-2 js-linear-anim-2 el !absolute top-0 left-0 !z-30' style={{ transform: projectId ? 'translateX(100%)' : '' }}>
                <Detail requirementGroups={requirementGroups} refinements={refinements} projectId={projectId}/>
            </div >}
        </>
    )
}