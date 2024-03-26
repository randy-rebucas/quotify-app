export default function Popup() {
    return (
        <div className="wrapper__close hidden">
            <div className=" flex">
                <div className="flex">
                    <div className="bg-white h-[211px] grid grid-cols-3">
                        <div className="relative p-30 bg-gray2A w-[286px] flex flex-col items-center justify-center">
                            <h5 className="opacity-1 font-normal">close project
                                <p className="mt-3 text-xs text-black">You are about to close this project. All your progression has been
                                    saved.</p>
                            </h5>
                        </div>
                        <div className="relative p-30 bg-gray3A w-[286px] flex flex-col items-center justify-center">
                            <a href="#" id="js-cancel-popup" className="absolute cover w-full h-full z-30"></a>
                            <h5 className="opacity-20">cancel</h5>
                        </div>
                        <div className="relative p-30 bg-gray4A w-[286px] flex flex-col items-center justify-center">
                            <a href="file-management1.html" className="absolute cover w-full h-full z-30"></a>
                            <h5 className="opacity-50">close</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}