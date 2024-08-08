'use client'

import { MutatingDots } from 'react-loader-spinner'
import { useAppStore } from '../lib/store/appStore';

export default function Loader() {
    const isLoading = useAppStore(state => state.isLoading);

    return (
        <>
            {isLoading && <div className="loader-overlay">
                <div className="loader">
                    <MutatingDots
                        visible={true}
                        height="100"
                        width="100"
                        color="#4fa94d"
                        secondaryColor="#4fa94d"
                        radius="12.5"
                        ariaLabel="mutating-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            </div>}
        </>
    );
}