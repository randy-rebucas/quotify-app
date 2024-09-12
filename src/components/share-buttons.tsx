'use client';

import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, ViberIcon, ViberShareButton, WhatsappIcon, WhatsappShareButton } from "next-share";

export default function ShareButtons({ path, projectId, source }: { path: any, projectId: any, source: any }) {

    const link = process.env.NEXT_PUBLIC_APP_URL + '/estimation/' + path + '/' + projectId;
    return (
        <>
            <h1 className="p-1 text-[14px]">Share {source}</h1>
            <input type="text" defaultValue={link} className="border mb-2 p-2 text-xs w-full" autoFocus />
            <div className="flex gap-2">
                <EmailShareButton
                    url={`${link}`}
                    subject={'Project Definition'}
                    body="Please open the link "
                >
                    <EmailIcon size={42} round />
                </EmailShareButton>
                <FacebookShareButton
                    url={`${link}`}
                    quote={'Project Definition'}
                    hashtag={'#mmoser'}
                >
                    <FacebookIcon size={42} round />
                </FacebookShareButton>
                <TelegramShareButton
                    url={`${link}`}
                    title={'next-share is a social share buttons for your next React apps.'}
                >
                    <TelegramIcon size={42} round />
                </TelegramShareButton>
                <TwitterShareButton
                    url={`${link}`}
                    title={'next-share is a social share buttons for your next React apps.'}
                >
                    <TwitterIcon size={42} round />
                </TwitterShareButton>
                <ViberShareButton
                    url={`${link}`}
                    title={'next-share is a social share buttons for your next React apps.'}
                >
                    <ViberIcon size={42} round />
                </ViberShareButton>
                <WhatsappShareButton
                    url={`${link}`}
                    title={'next-share is a social share buttons for your next React apps.'}
                    separator=":: "
                >
                    <WhatsappIcon size={42} round />
                </WhatsappShareButton>
            </div>
        </>
    )
}