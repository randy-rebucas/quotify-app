import { fetchCustomSpaces } from '@/lib/data';
import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/setting/custom-space/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Amenity Create',
};
export default async function CustomspaceCreatePage() {

    const custom_spaces = await fetchCustomSpaces();
    
    let customSpaces = custom_spaces.map((custom_space: any) => {
        return {
          id: custom_space._id.toString(),
          customSpaceName: custom_space.customSpaceName,
          customSpaceGroupName: custom_space.customSpaceGroupName,
          capacity: custom_space.capacity,
        };
    });

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Custom Spaces', href: '/setting/custom-spaces' },
                    {
                        label: 'Create Custom Space',
                        href: '/setting/custom-spaces/create',
                        active: true,
                    },
                ]}
            />
            <Form custom_spaces={customSpaces} />
        </main>
    );
}