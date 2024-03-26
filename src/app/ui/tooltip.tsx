import Image from "next/image";

export default function Tooltip() {
    return (
        <div className="absolute top-0 right-0 pulsate flex flex-col items-end w-full p-30">
            <button data-tooltip-target="tooltip-step-1" data-tooltip-trigger="click" type="button"
                className="outline-none">
                <div className="tooltip pulsate flex flex-col items-end">
                    <Image
                        src="/images/icon-tooltip.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="tooltip__icon w-full h-auto"
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
    );
}
