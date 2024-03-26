import Image from "next/image";

export function Video() {
    const videoThumbnail = {
        backgroundImage: `url('/images/thumb-vid.png')`
    };

    return (
        <>
            <div className="video-wrapper col-span-3 relative flex items-center justify-center bg-cover"
                style={videoThumbnail}>
                <a href="#" id="video-wrapper-play" className="video-wrapper__thumb flex justify-center lg:w-[200px] w-4/12">
                    <Image
                        src="/images/icon-play.svg"
                        alt="thumb-video"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </a>
            </div>

            <video id="video-content" className="video-content bg-black hidden col-span-3 relative w-full" controls preload="none">
                <source src="https://quotify.mmoser.app/src/videos/flowbite.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    )
}