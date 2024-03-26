export default function WrapperAnimation() {
    return (
        <div className="js-wrapper__cover wrapper__cover opacity-1">
            <div className="js-staggering-anim staggering-anim">
                <div className="js-el el bg-gray1"></div>
                <div className="js-el el bg-gray2A"></div>
                <div className="js-el el bg-gray3A"></div>
                <div className="js-el el bg-gray4A"></div>
                <div className="js-el el bg-gray5A"></div>
            </div>
        </div>
    );
}
