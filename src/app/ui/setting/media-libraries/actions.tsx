// 'use client';

import { Delete, Update } from "./buttons";

export default function Actions({ media }: { media: any }) {

    return (
        <div className="flex justify-end gap-3">
            <Update id={media._id.toString()} />
            {/* <Delete id={media._id.toString()} /> */}
        </div>
    )

}