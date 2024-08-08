import { fetchAmenities, fetchCustomSpacesByGroup, fetchMenuByPageHandled } from "@/app/lib/data";
import FormWrapper from "@/app/ui/estimation/area-breakdown/form-wrapper";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import Popup from "@/app/ui/estimation/popup";
import LinearCover from "@/app/ui/linear-cover";
import Loader from "@/app/ui/loader";
import StaggerCover from "@/app/ui/stagger-cover";
import { notFound } from "next/navigation";


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    if (!id) {
        notFound();
    }

    const menus = await fetchMenuByPageHandled('area-breakdown');

    const amenities = await fetchAmenities();

    const custom_spaces = await fetchCustomSpacesByGroup();

    const introductionColors: string[] = ['bg-blue1', 'bg-blue2', 'bg-blue3', 'bg-blue4', 'bg-blue5'];

    const mainColors: string[] = ['bg-blue2', 'bg-gray4A', 'bg-gray4A', 'bg-white', 'bg-white'];

    return (
        <>
            <div className="wrapper theme theme-blue">
                <Popup />

                <IntroWrapper>
                    <div className="intro-menu lg:col-start-2">
                        <div className="h-full">
                            <div className="p-30 lg:pt-col2">
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
                                            {menus.map((menu, index) => (
                                                <div key={menu._id} className='step-indicator'>
                                                    <span className="font-latoblack">02.{index + 1}:</span> <br />
                                                    {menu.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </IntroWrapper>

                <MainWrapper>
                    <FormWrapper menus={menus} amenities={amenities} custom_spaces={custom_spaces} project_id={id} />
                </MainWrapper>

                <LinearCover colors={introductionColors} target={2} className="introduction" />

                <StaggerCover colors={mainColors} target={2} className="main" />

            </div >
            <Loader />
        </>
    )
}