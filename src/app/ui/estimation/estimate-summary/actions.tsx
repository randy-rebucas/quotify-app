import { MouseEventHandler } from "react";

export default function Actions({ isEdit, onClickEdit }: { isEdit: boolean, onClickEdit: MouseEventHandler<HTMLAnchorElement> }) {
    return (
        <div>
            <a href="#" onClick={onClickEdit} className="text-[24px] font-latobold flex items-center mb-[10px]">
                <svg fill="none" width="16" height="19" stroke="#fff" strokeLinecap="round" strokeWidth="2" viewBox="0 0 23 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                <div className="text-white ml-3 text-opacity-50 hover:text-opacity-100">{isEdit ? 'cancel' : 'edit'}</div>
            </a>
            <a href="#" className="text-[24px] font-latobold flex items-center mb-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00075 11.175L12.2437 7.933L13.6577 9.347L8.00075 15.004L2.34375 9.347L3.75775 7.933L7.00075 11.175V0H9.00075V11.175Z" fill="white" />
                    <rect y="17" width="16" height="2" fill="white" />
                </svg>
                <div className="text-white ml-3 text-opacity-50 hover:text-opacity-100">download</div>
            </a>
            <a href="#" className="text-[24px] font-latobold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6.22222 0V1.77778H1.77778V14.2222H14.2222V9.77778H16V15.1111C16 15.3469 15.9064 15.573 15.7397 15.7397C15.573 15.9064 15.3469 16 15.1111 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V0.888889C0 0.653141 0.0936505 0.427048 0.260349 0.260349C0.427048 0.0936505 0.653141 0 0.888889 0H6.22222ZM12.9653 1.77778H8.88889V0H16V7.11111H14.2222V3.03467L8 9.25689L6.74311 8L12.9653 1.77778Z" fill="white" />
                </svg>
                <div className="text-white ml-3 text-opacity-50 hover:text-opacity-100">share</div>
            </a>
            <div className="pt-[10px] px-0 pb-0 w-full flex items-end justify-end">
                <a className="js-close-project focus:shadow-outline focus:outline-none" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="78" height="63" viewBox="0 0 78 63" fill="none">
                        <path d="M46.4 0L44.3 2.1L71.9 29.8H0V32.8H71.5L44.1 60.2L46.2 62.4L77.5 31.1L46.4 0Z" fill="white" />
                    </svg>
                </a>
            </div>
        </div>
    )
}