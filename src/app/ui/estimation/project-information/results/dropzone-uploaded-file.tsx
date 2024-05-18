import Image from "next/image";
import { useState } from "react";

export default function DropzoneUploadedFile() {
  // const [files, setFiles] = useState<any>([]);


  // const removeFile = (fileName: any, idx: any) => {
  //   const newArr = [...files];
  //   newArr.splice(idx, 1);
  //   setFiles([]);
  //   setFiles(newArr);
  // }

  return (
    <div className="mt-[30.833vh] px-30 w-full">
      <div className="dropzone-uploads">
        <p className="text-darkblue font-latobold">my floorplans</p>
        <div className="dropzone-content mt-10 flex flex-wrap">
          {/* <!-- Uploaded files will automatically be shown here --> */}
          {/* {files.map((file: any, idx: any) => (
            <div key={idx} className="flex flex-row space-x-5">
              <span>{file.name}</span>
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => removeFile(file.name, idx)}
              >
                remove
              </span>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}