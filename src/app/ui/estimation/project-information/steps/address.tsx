import { GoogleMapsEmbed } from '@next/third-parties/google'

type AddressData = {
    address: string
    hasAddress: boolean
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}
export default function Address({
    address,
    hasAddress,
    updateFields,
}: AddressFormProps) {
    return (

        <div className="lg:col-span-2 col-span-12 flex flex-col justify-start items-start w-full h-full">
            <div className="h-full w-full">
                <div className="p-30 pt-[6.852vh]">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="h-1 w-20 bg-black"></div>
                            <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                where is the space located?
                            </h5>

                            <div className="mt-[18.519vh] w-full">
                                <input id="map-search"
                                    className="block border-b border-0 bg-transparent py-1 text-darkblue border-darkblue w-full outline-none "
                                    placeholder="enter building address here" type="text" value={address} onChange={e => updateFields({ address: e.target.value })} />

                                <div className="relative w-full h-[37.037vh] mt-[4.63vh]">
                                    <GoogleMapsEmbed
                                        apiKey="AIzaSyCSpu4SkHDlOVRji08oCB01hFatAjtlcNE"
                                        height={200}
                                        width="100%"
                                        mode="place"
                                        q="Brooklyn+Bridge,New+York,NY"
                                    />
                                    {/* <iframe className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                                        style={{
                                            border: 0
                                        }} allowFullScreen={true} aria-hidden="false"
                                        tabIndex={0}>
                                    </iframe> */}
                                </div>

                                <div className="custom-checkbox mb-4 mt-10">
                                    <input id="tmp-4" type="checkbox" className="promoted-input-checkbox" value={1} checked={hasAddress} onChange={e => updateFields({ hasAddress: e.target.checked })} />
                                    <svg>
                                        <use href="#checkmark-4" xlinkHref="#checkmark-4" />
                                    </svg>
                                    <label htmlFor="tmp-4">I don’t have an adress for my project</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{
                                        display: 'none'
                                    }}>
                                        <symbol id="checkmark-4" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeMiterlimit="10" fill="none"
                                                d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                                            </path>
                                        </symbol>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}