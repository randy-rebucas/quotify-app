'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


export type ProjectRequirementMenu = {
    menu: number
}

export interface ProjectRequirementMenuContextInterface {
    projectRequirementMenu: ProjectRequirementMenu,
    setProjectRequirementMenu: Dispatch<SetStateAction<ProjectRequirementMenu>>
}

const defaultState = {
    projectRequirementMenu: {
        menu: 0,
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
        menu: 0,
    })

    return <ProjectRequirementMenuContext.Provider value={{ projectRequirementMenu, setProjectRequirementMenu }}>{children}</ProjectRequirementMenuContext.Provider>;
};
