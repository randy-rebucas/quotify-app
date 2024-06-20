'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from './lib/store'

// Loading Initial Data
// import { initializeCount } from '../lib/features/counter/counterSlice'

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();

        // Loading Initial Data
        // storeRef.current.dispatch(initializeCount(count))
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}