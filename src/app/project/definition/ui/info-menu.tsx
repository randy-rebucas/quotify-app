'use client';

export default function InfoMenu() {
    {/* <!--
    /*  Menu Main
    /*  This block is hidden on page load.
    /*  It will be shown after page introduction animation is finished.
    /--> */}
    return (
        <div className="col-start-1 row-span-2 intro-menu overflow-y-scroll">
            <div className="h-full">
                <div className="p-30 bg-darkblue">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h1 className="font-latobold text-white">
                                01:
                            </h1>
                            <h4 className="font-latolight mt-3 text-white">
                                Project information
                            </h4>
                            <div className="estimation-col__bar mt-6 mb-6"></div>
                            <div className="estimation-col__content">
                                <div className="js-step-indicator step-indicator">
                                    <span className="font-latoblack">01.1:</span> <br />
                                    plan upload
                                </div>
                                <div className="js-step-indicator step-indicator">
                                    <span className="font-latoblack">01.2:</span> <br />
                                    address
                                </div>
                                <div className="js-step-indicator step-indicator">
                                    <span className="font-latoblack">01.3:</span> <br />
                                    space size & rentable area
                                </div>
                                <div className="js-step-indicator step-indicator">
                                    <span className="font-latoblack">01.4:</span> <br />
                                    headcount & staffing
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-30 bg-blue">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h1 className="font-latobold text-white">
                                02:
                            </h1>
                            <h4 className="font-latolight mt-3 text-white">
                                Area breakdown
                            </h4>
                            <div className="estimation-col__bar mt-6 mb-6"></div>
                            <div className="estimation-col__content">
                                <div className="js-step-indicator step-indicator active">
                                    <span className="font-latoblack">02.1:</span> <br />
                                    area definition
                                </div>
                                <div className="js-step-indicator step-indicator">
                                    <span className="font-latoblack">02.2:</span> <br />
                                    proportion breakdown
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}