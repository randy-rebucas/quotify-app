import ShareButtons from "@/components/share-buttons";
import { pathMapping, sourceMapping } from "@/lib/mock";

export default async function ModalSharePage({ params }: { params: { id: string, path: any, source: any } }) {
  
    return (
        <ShareButtons path={pathMapping.get(params?.path)} projectId={params?.id} source={sourceMapping.get(params?.source)}/>
    )
}