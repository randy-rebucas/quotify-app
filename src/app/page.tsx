// 'use client'

import RootLayout from './layout';
import Image from 'next/image'
import '../../public/css/main.css';

const videoThumbnailStyle = {
  backgroundImage: `url("/images/thumb-vid.png")`
};

export default function Page() {

  return (
    <RootLayout>
      <div className="wrapper lg:bg-transparent bg-black">
        <div className="wrapper__logo animate fade-in delay-last">
          <Image
            src="/images/icon-search.png"
            width={37}
            height={37}
            alt="submit"
          />
        </div>
        <div className="wrapper__content animate fade-in delay-last grid">
          <div className="lg:col-span-1 col-span-12 p-30 flex flex-col justify-end pb-[100px] h-full">
            <p className="text-white">Welcome to</p>
            <h1 className="text-white font-lato xl:text-6xl md:text-5xl text-4xl mb-10">
              Quotify
            </h1>
            <p className="text-white">Your accound has been created. You should receive a confirmation email soon.</p>
          </div>
          <div className="lg:col-start-2 lg:col-span-3 col-span-12">
            <div className="grid lg:grid-cols-3 lg:grid-flow-col p-30">
              <div className="video-wrapper col-span-3 relative flex items-center justify-center bg-cover"
                style={videoThumbnailStyle}>
                <a href="#" id="video-wrapper-play" className="video-wrapper__thumb flex justify-center lg:w-[200px] w-4/12">
                  <Image
                    src="/images/icon-play.svg"
                    width={180}
                    height={37}
                    alt="thumb-video"
                  />
                </a>
              </div>
              <video id="video-content" className="video-content bg-black hidden col-span-3 relative w-full" controls={true} preload="none">
                <source src="src/videos/flowbite.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="grid lg:grid-cols-3 lg:grid-flow-col">
              <p className="p-30 lg:text-black text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <p className="p-30 lg:text-black text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <p className="p-30 lg:text-black text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
          <div className="wrapper__next">
            <div className="absolute top-0 right-0 pulsate flex flex-col items-end w-full p-30">
              <button data-tooltip-target="tooltip-step-1" data-tooltip-trigger="click" type="button"
                className="outline-none">
                <div className="tooltip pulsate flex flex-col items-end">
                  {/* <TooltipIcon/> */}
                  <Image
                    src="/images/icon-tooltip.svg"
                    width={37}
                    height={37}
                    className="tooltip__icon"
                    alt="tooltip"
                  />
                </div>
              </button>

              <div id="tooltip-step-1" role="tooltip"
                className="tooltip__content pl-30 pr-10 py-2 z-10 invisible opacity-0 w-full">
                Throughout your experience, you can toggle the tips to help guide you through each
                section.
              </div>
            </div>
            <a href="file-management1.html">
              <Image
                src="/images/icon-submit.png"
                width={37}
                height={37}
                className="brightness-0"
                alt="next"
              />
            </a>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
