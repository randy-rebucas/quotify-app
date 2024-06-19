'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'
import { v4 as uuid } from 'uuid'

import Plan from '@/app/ui/estimation/project-information/steps/plan';
import HeadCount from '@/app/ui/estimation/project-information/steps/head-count';
import Area from '@/app/ui/estimation/project-information/steps/area';
import Address from '@/app/ui/estimation/project-information/steps/address';

import {
    type MultiFormStore,
    createMultiFormStore,
    initMultiFormStore,
} from "@/app/lib/multiFormStore";

export type MultiFormStoreApi = ReturnType<typeof createMultiFormStore>

export const MultiFormStoreContext = createContext<MultiFormStoreApi | undefined>(
    undefined,
)

export interface MultiStoreProviderProps {
    children: ReactNode
}

export const MultiFormStoreProvider = ({
    children,
}: MultiStoreProviderProps) => {
    const storeRef = useRef<MultiFormStoreApi>()
    if (!storeRef.current) {
        storeRef.current = createMultiFormStore(initMultiFormStore([
            <Plan key={uuid()} />,
            <Address key={uuid()} />,
            <Area key={uuid()} />,
            <HeadCount key={uuid()} />
        ]))
    }

    return (
        <MultiFormStoreContext.Provider value={storeRef.current}>
            {children}
        </MultiFormStoreContext.Provider>
    )
}

export const useMultiFormStore = <T,>(
    selector: (store: MultiFormStore) => T,
): T => {
    const multiFormStoreContext = useContext(MultiFormStoreContext)

    if (!multiFormStoreContext) {
        throw new Error(`useMultiFormStore must be used within MultiFormStoreProvider`)
    }

    return useStore(multiFormStoreContext, selector)
}