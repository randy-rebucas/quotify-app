import ShareButtons from "@/components/share-buttons";

export let pathMapping = new Map<string | undefined, string>();
pathMapping.set('0', "project-definition");
pathMapping.set('1', "estimate-summary");

export let sourceMapping = new Map<string | undefined, string>();
sourceMapping.set('0', "Project Definition");
sourceMapping.set('1', "Estimate Summary");

export default async function ModalSharePage({ params }: { params: { id: string, path: any, source: any } }) {
  
    return (
        <ShareButtons path={pathMapping.get(params?.path)} projectId={params?.id} source={sourceMapping.get(params?.source)}/>
    )
}