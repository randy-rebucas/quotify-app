'use client'

import { pathMapping, sourceMapping } from "@/lib/mock";
import { Modal } from "./modal";
import ShareButtons from "@/components/share-buttons";

export default function ShareModal({ params }: { params: { id: string, path: any, source: any } }) {
    return (
        <Modal>
            <ShareButtons path={pathMapping.get(params?.path)} id={params.id} source={sourceMapping.get(params?.source)}/>
        </Modal>
    )
}