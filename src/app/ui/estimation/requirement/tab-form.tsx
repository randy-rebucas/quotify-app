'use client';

import clsx from 'clsx';
import { FormEventHandler, useEffect, useState } from 'react';
import { tabMapping, titleMapping } from './entities';
import { StimateData } from './form';

type Props = {
    stimates: StimateData[];
    onSubmit: FormEventHandler<HTMLFormElement>;
}

export default function TabForm({ stimates, onSubmit }: Props) {

    const [toggle, setToggle] = useState<boolean>(false);
    const [toggleOption, setToggleOption] = useState<boolean>(false);
    const [source, setSource] = useState<string>('');
    const [title, setTitle] = useState<any>('');

    const onSelectSource = (id: string) => {
        setSource(id);
        setToggleOption(!toggleOption);
    }

    let last_stimate = stimates.length - 1;

    useEffect(() => {
        setTitle(titleMapping.get(stimates.length))
    }, [stimates]);

    return (
        <div className="bg-darkgreen relative">
            <button onClick={() => setToggle(!toggle)} className={clsx(
                'js-new-estimate new-estimate h-[55px] w-[43px] flex items-center justify-center',
                {
                    'active': toggle,
                },
            )}>
                <span className='new-estimate__icon p-2'>&nbsp;</span>
            </button>
            {toggle && <div className="flex flex-col absolute right-0 top-[55px] px-30 pt-30 pb-4 text-md bg-darkgreen">
                <h3 className="text-green mb-3">new variation</h3>

                <form onSubmit={onSubmit} className="flex flex-col justify-end items-end">
                    <input type="hidden" name='source' value={source} />
                    <div className="flex mb-1 text-white items-center justify-start w-full">
                        <span className="text-green">from</span>
                        <button id="custom-dropdown" data-dropdown-toggle="dropdown"
                            className="text-white border-green border-solid border-b-2 border-l-0 border-r-0 border-t-0 font-medium text-md px-5 py-2 text-center flex justify-stretch items-center w-full outline-none"
                            type="button">
                            estimate {tabMapping.get(+source)}
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" onClick={() => setToggleOption(!toggleOption)}>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {/* <!-- Dropdown menu --> */}
                        {toggleOption && <div id="dropdown" style={{
                            position: 'absolute',
                            inset: '0px auto auto 0px',
                            margin: '0px',
                            transform: 'translate(85px, 124px)'
                        }}
                            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 block">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="custom-dropdown">
                                {stimates.map((stimate: StimateData, index: number) => (
                                    <li key={index}>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => onSelectSource(`${stimate.id}`)}>
                                            estimate {tabMapping.get(stimate.id)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>}
                    </div>

                    <div className="js-count-chars flex flex-col items-end w-full mb-3">
                        <div
                            className="text-white flex border-b-2 border-l-0 border-r-0 border-t-0 outline-none border-solid border-green w-full">
                            <h3 className="text-green py-2">{tabMapping.get(last_stimate + 1)}:</h3>
                            <input className="js-count-chars__field bg-transparent px-3 py-2 outline-none text-white placeholder-green"
                                maxLength={40} type="text" name='title' placeholder="name" value={title} onChange={() => { }} />
                        </div>
                        <div className="js-count-chars__status text-[10px] font-lato text-green mt-1">0/40</div>
                    </div>

                    <div className="js-count-chars flex flex-col items-end w-full mb-3">
                        <textarea
                            className="js-count-chars__field bg-transparent h-[80px] py-2 text-white placeholder-green border-b-2 border-l-0 border-r-0 border-t-0 outline-none border-solid border-green w-full"
                            name="description" maxLength={250} placeholder="description" defaultValue='this is a short description for this estimate.'></textarea>
                        <div className="js-count-chars__status text-[10px] font-lato text-green mt-1">0/250</div>
                    </div>

                    <button type="submit">
                        <h3 className="text-green">create</h3>
                    </button>
                </form>
            </div>}
        </div>
    )
}

