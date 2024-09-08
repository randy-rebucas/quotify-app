import Image from "next/image";
import { filesize } from "filesize";
import { useProjectInformationStore } from "@/lib/store/projectInformationStore";


export default function DropzoneUploadedFile() {
  const isImageType = ['image/jpeg', 'image/jpg', 'image/png'];

  const project = useProjectInformationStore(state => state.projectInformation);
  const updateFields = useProjectInformationStore(state => state.updateFields)

  const floorPlans = project.floorPlans;

  const removeFile = (idx: number) => {
    updateFields({ floorPlans: floorPlans.filter((file: any, id: number) => id !== idx) })
  }

  return (
    <>
      <div className="mt-[30.833vh] px-30 w-full">
        <div className="dropzone-uploads">
          <p className="text-darkblue font-latobold">My floorplans</p>
          <div className="flex flex-col gap-3 mt-10">
            {floorPlans && floorPlans.map((file: any, idx: any) => (
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