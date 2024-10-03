import { ChangeEventHandler, useRef } from "react";

export default function Upload({ onChange }: {
    onChange: ChangeEventHandler<HTMLInputElement>,

}) {
    const inputRef = useRef<any>(null);
    const openFileExplorer = () => {
        inputRef.current.value = "";
        inputRef.current.click();
    }

    return (
        <div className="custom-upload mt-5">
            <label htmlFor="floorplan" className="w-full">
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
                        name="floorplan"
                        id="floorplan"
                        placeholder="fileInput"
                        className="hidden"
                        ref={inputRef}
                        type="file"
                        multiple={true}
                        onChange={onChange}
                        accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" />
                </div>

                <p className="custom-upload__label mt-4" onClick={openFileExplorer}>drag files here or
                    <span>browse</span>
                </p>
            </label>

        </div>
    )
}