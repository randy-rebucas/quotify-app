import { useEffect, useState } from "react";

export default function ProgressBar({ percentage }: { percentage: number }) {
    const [hex, setHex] = useState<string>('');

    useEffect(() => {
        const bg = (percentage: number) => {
            const roundPercentage = Math.round(percentage);
            if (roundPercentage > 0 && roundPercentage <= 15) {
                setHex('#D2D2D2')
            } else if (roundPercentage > 15 && roundPercentage <= 35 ) {
                setHex('#C4D6E1')
            } else if (roundPercentage > 35 && roundPercentage <= 45 ){
                setHex('#93B7CD')
            } else if (roundPercentage > 45 && roundPercentage <= 60 ){
                setHex('#6298BA')
            } else if (roundPercentage > 60 && roundPercentage <= 80 ){
                setHex('#3179A6')
            } else if (roundPercentage > 80 && roundPercentage <= 90 ){
                setHex('#186a9c')
            } else if (roundPercentage > 90 && roundPercentage <= 100 ){
                setHex('#005A92')
            } else {
                setHex('#F2F2F2')
            }
        }

        if (percentage) {
            bg(percentage);
        }
    }, [percentage])

    return (
        <div className={`custom-accordion__legend bg-[${hex}]`}></div>
    );
}