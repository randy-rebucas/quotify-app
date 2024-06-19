import { useProjectInformationStore } from "@/app/lib/projectInformationStore";
import Upload from "../upload"
import { useRef } from "react";

export default function Plan() {

    const spaceName = useProjectInformationStore(state => state.spaceName);
    const hasFloorPlan = useProjectInformationStore(state => state.hasFloorPlan);
    const addFloorPlan = useProjectInformationStore(state => state.addFloorPlan);
    const spacedName = useProjectInformationStore(state => state.spacedName);
    const toggleFloorPlan = useProjectInformationStore(state => state.toggleFloorPlan);

    const handleChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            for (let i = 0; i < e.target.files["length"]; i++) {
                addFloorPlan(e.target.files[i]);
            }
        }
    }

    const inputRef = useRef<any>(null);
    const openFileExplorer = () => {
        inputRef.current.value = "";
        inputRef.current.click();
    }

    return (

        <div className="lg:col-span-2 col-span-12 flex flex-col justify-start items-start w-full h-full">
            <div className="h-full w-full">
                <div className="px-30 pt-[6.852vh]">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="h-1 w-20 bg-black"></div>
                            <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                let’s start by defining your space
                            </h5>

                            <div className="mt-[9.259vh] w-full">
                                <input
                                    className="block border-b border-0 bg-transparent py-1 text-darkblue border-darkblue w-full outline-none "
                                    placeholder="give you a space name" type="text" value={spaceName} name="spaceName" onChange={e => spacedName(e.target.value)} required />

                                <p className="pt-[5.926vh]">To be able to define areas and square
                                    footage in future sections, start by uploading your floorplans.</p>

                                {/* <Upload onChange={handleChange} /> */}
                                <div className="custom-upload mt-5">
                                    <label className="w-full">
                                        <div
                                            className="px-30 flex flex-col items-start justify-end w-full h-64 border-2 border-dashed cursor-pointer">
                                            <div className="flex flex-col items-start justify-start pt-5 pb-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="63"
                                                    height="78" viewBox="0 0 63 78" fill="none">
                                                    <path opacity="0.5"
                                                        d="M-2.02821e-06 31.1L2.1 33.2L29.8 5.6L29.8 77.5L32.8 77.5L32.8 6L60.2 33.4L62.4 31.3L31.1 -1.35942e-06L-2.02821e-06 31.1Z"
                                                        fill="#003855" />
                                                </svg>
                                            </div>
                                            <input
                                                placeholder="fileInput"
                                                className="hidden"
                                                ref={inputRef}
                                                type="file"
                                                name="floorPlans"
                                                multiple={true}
                                                onChange={handleChange}
                                                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" />
                                        </div>

                                        <p className="custom-upload__label mt-4" onClick={openFileExplorer}>drag files here or
                                            <span>browse</span>
                                        </p>
                                    </label>

                                </div>
                                <div className="custom-checkbox mb-4 mt-2">
                                    <input id="tmp-1" type="checkbox" name="hasFloorPlan" className="promoted-input-checkbox" value={1} checked={hasFloorPlan} onChange={e => toggleFloorPlan(e.target.checked)} />
                                    <svg>
                                        <use href="#checkmark-1" xlinkHref="#checkmark-1" />
                                    </svg>
                                    <label htmlFor="tmp-1">I dont have a floorplan for my project</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{
                                        display: 'none'
                                    }}>
                                        <symbol id="checkmark-1" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeMiterlimit="10" fill="none"
                                                d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                            </path>
                                        </symbol>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
