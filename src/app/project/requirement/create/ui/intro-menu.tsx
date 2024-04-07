export default function IntroMenu() {
    return (
        <div className="intro-menu col-start-3">
            <div className="h-full">
                <div className="p-30 pt-col3">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h1 className="font-latobold text-white">
                                03:
                            </h1>
                            <h4 className="font-latolight mt-3 text-white">
                                Requirements
                            </h4>
                            <div className="estimation-col__bar bg-white mt-6 mb-6"></div>
                            <div className="estimation-col__content">
                                <div className="step-indicator">
                                    <span className="font-latoblack">03.1:</span> <br />
                                    finish and certifications
                                </div>
                                <div className="step-indicator">
                                    <span className="font-latoblack">03.2:</span> <br />
                                    MEP features
                                </div>
                                <div className="step-indicator">
                                    <span className="font-latoblack">03.3:</span> <br />
                                    base building conditions
                                </div>
                                <div className="step-indicator">
                                    <span className="font-latoblack">03.4:</span> <br />
                                    technology
                                </div>
                                <div className="step-indicator">
                                    <span className="font-latoblack">03.5:</span> <br />
                                    furniture and furnishing
                                </div>
                                <div className="step-indicator">
                                    <span className="font-latoblack">03.6</span> <br />
                                    review
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}