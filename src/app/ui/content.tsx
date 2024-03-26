import { lato } from '@/app/ui/fonts';

export interface ContextValue {
  context: string
}

export default async function ContentWrapper({ contexts }: { contexts: ContextValue[] }) {
  return (
    <>
      {contexts.map((item, index) => (
        <Content context={item.context} key={index} />
      ))}
    </>
  );
}

export function Content({ context }: {
  context: string;
}) {
  return (
    <>
      <p className={`${lato.className} p-30 lg:text-black text-white`}>{context}</p>
    </>
  );
}
