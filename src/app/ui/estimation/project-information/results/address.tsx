import { useProjectInformationStore } from "@/app/lib/store/projectInformationStore";

export default function Address() {

    const project = useProjectInformationStore(state => state.projectInformation);
    
    return (
        <>
            {project.address.place && <div className="mt-[13.333vh] px-30 w-full">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
                    <path d="M8 0C3.802 0 0 3.403 0 7.602C0 11.8 3.469 16.812 8 24C12.531 16.812 16 11.8 16 7.602C16 3.403 12.199 0 8 0ZM8 11C6.343 11 5 9.657 5 8C5 6.343 6.343 5 8 5C9.657 5 11 6.343 11 8C11 9.657 9.657 11 8 11Z" fill="black" />
                </svg> */}
                <p className="font-latobold opacity-60 mt-[15px] ">My space name</p>
                <p className="mt-[15px] max-w-[150px]">
                    {project.address.place}
                </p>
            </div>}
        </>

    )
}