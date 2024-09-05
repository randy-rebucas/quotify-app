
'use client';

import { createContext } from 'react';

export const SessionContext = createContext<any>(null);

export default function SessionProvider({
    children, session
}: {
    children: React.ReactNode;
    session: any
}) {
    return (
        <SessionContext.Provider value={{ session }}>
            {children}
        </SessionContext.Provider>
    );
}
