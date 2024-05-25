import Image from "next/image";
import { PlanData } from "../steps/plan";
import { filesize } from "filesize";

export default function DropzoneUploadedFile({ floorPlans, updateFields }: { floorPlans: any[], updateFields: (fields: Partial<PlanData>) => void }) {

  const removeFile = (idx: number) => {
    updateFields({ floorPlans: floorPlans.filter((file: any, id: number) => id !== idx) })
  }

  const isImageType = ['image/jpeg', 'image/jpg', 'image/png'];

  return (
    <>
      <div className="mt-[30.833vh] px-30 w-full">
        <div className="dropzone-uploads">
          <p className="text-darkblue font-latobold">my floorplans</p>
          <div className="flex flex-col gap-3 mt-10">
            {floorPlans.map((file: any, idx: any) => (
              <div key={idx} className="flex gap-3 relative">
                {isImageType.includes(file.type) && <Image src={URL.createObjectURL(file)} alt={""} width={100} height={100} />}
                {!isImageType.includes(file.type) && <div className="icon-upload"></div>}
                <div>
                  <p>{file.name}</p>
                  <p>{file.type}</p>
                  <p>{filesize(file.size, { standard: "jedec" })}</p>
                </div>
                <span className="absolute cursor-pointer right-0 text-red-500"
                  onClick={() => removeFile(idx)} >
                  remove
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}