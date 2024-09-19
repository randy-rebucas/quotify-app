'use client';

export default function PrintButton() {
    const onClickDownload = () => {
        window.print();
    }

    return (
        <button type="button" onClick={onClickDownload} className="absolute flex font-latobold hide-on-print items-center mb-[10px] right-5 text-[24px] top-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.00075 11.175L12.2437 7.933L13.6577 9.347L8.00075 15.004L2.34375 9.347L3.75775 7.933L7.00075 11.175V0H9.00075V11.175Z" fill="#809BA9" />
                <rect y="17" width="16" height="2" fill="#809BA9" />
            </svg>
            <div className="text-blue ml-3 text-opacity-50 hover:text-opacity-100">download</div>
        </button>
    )
}