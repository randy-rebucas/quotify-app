import { useProjectInformationStore } from "@/lib/store/projectInformationStore";
import Upload from "../upload"


export default function Plan() {
    const project = useProjectInformationStore(state => state.projectInformation);
    const hasFloorPlan = useProjectInformationStore(state => state.hasFloorPlan);
    const updateFields = useProjectInformationStore(state => state.updateFields);
    const updateHasFloorPlan = useProjectInformationStore(state => state.updateHasFloorPlan);

    const handleChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            for (let i = 0; i < e.target.files["length"]; i++) {
                updateFields({ floorPlans: [...project.floorPlans, e.target.files[i]] });
            }
        }
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
                                    placeholder="give you a space name" type="text" name="space-name" id="space-name" value={project?.spaceName} onChange={e => updateFields({ spaceName: e.target.value })} autoFocus required />

                                <p className="pt-[5.926vh]">To be able to define areas and square
                                    footage in future sections, start by uploading your floorplans.</p>

                                <Upload onChange={handleChange} />

                                <div className="custom-checkbox mb-4 mt-2">
                                    <label htmlFor="has-floorplan">
                                        <input id="has-floorplan" type="checkbox" name="has-floorplan" className="promoted-input-checkbox" value={1} checked={hasFloorPlan} onChange={e => updateHasFloorPlan(e.target.checked)} />
                                        <svg>
                                            <use href="#checkmark-1" xlinkHref="#checkmark-1" />
                                        </svg>
                                        I dont have a floorplan for my project
                                    </label>
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
