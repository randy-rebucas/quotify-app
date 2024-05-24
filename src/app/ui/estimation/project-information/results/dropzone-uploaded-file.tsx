import Image from "next/image";
import { PlanData } from "../steps/plan";

export default function DropzoneUploadedFile({ floorPlans, updateFields }: { floorPlans: any[], updateFields: (fields: Partial<PlanData>) => void }) {

  const removeFile = (idx: number) => {
    updateFields({ floorPlans: floorPlans.filter((file: any, id: number) => id !== idx) })
  }

  return (
    <>
      {floorPlans.length && <div className="mt-[30.833vh] px-30 w-full">
        <div className="dropzone-uploads">
          <p className="text-darkblue font-latobold">my floorplans</p>
          <div className="dropzone-content mt-10 flex flex-wrap">
            {/* <!-- Uploaded files will automatically be shown here --> */}
            {floorPlans.map((file: any, idx: any) => (
              <div key={idx} className="flex flex-row space-x-5">
                <span>{file.name}</span>
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={() => removeFile(idx)}
                >
                  remove
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>}
    </>
  );
}