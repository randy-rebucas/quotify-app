'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


export type ProjectRequirementMenu = {
    menu: number | null
}

export interface ProjectRequirementMenuContextInterface {
    projectRequirementMenu: ProjectRequirementMenu,
    setProjectRequirementMenu: Dispatch<SetStateAction<ProjectRequirementMenu>>
}

const defaultState = {
    projectRequirementMenu: {
        menu: null,
    },
    setProjectRequirementMenu: (projectRequirementMenu: ProjectRequirementMenu) => { }
} as ProjectRequirementMenuContextInterface

export const ProjectRequirementMenuContext = createContext(defaultState);

export const ProjectRequirementContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [projectRequirementMenu, setProjectRequirementMenu] = useState<ProjectRequirementMenu>({
        menu: null,
    })

    return <ProjectRequirementMenuContext.Provider value={{ projectRequirementMenu, setProjectRequirementMenu }}>{children}</ProjectRequirementMenuContext.Provider>;
};
