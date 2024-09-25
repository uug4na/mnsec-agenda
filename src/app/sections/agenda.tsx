"use client";
import { useState } from "react";
import agendaItems from './agenda.json';
import agendaItems2 from './agenda2.json';

const Agenda = () => {
    const [showAgenda, setShowAgenda] = useState(true);

    return (
        <div className="bg-black flex flex-col items-center text-[#B1D572] min-h-screen mx-10">
            {/* <div className="text-xl pb-16 text-[50px] md:text-[70px] lg:text-[90px] self-center">Хөтөлбөр</div> */}

            <div className="flex flex-col w-full max-w-7xl border-2 border-gray-500">
                <div className="flex w-full">
                    <button
                        onClick={() => setShowAgenda(true)}
                        className={`text-[10px] md:text-[30px] lg:text-[40px] px-4 py-2 flex-grow ${showAgenda ? 'bg-black' : 'bg-gray-500'}`}
                    >
                        Stage 1
                    </button>
                    <div className="w-[2px] bg-gray-500"></div>
                    <button
                        onClick={() => setShowAgenda(false)}
                        className={`text-[10px] md:text-[30px] lg:text-[40px] px-4 py-2 flex-grow ${!showAgenda ? 'bg-black' : 'bg-gray-500'}`}
                    >
                        Stage 2
                    </button>
                </div>

                <div className="w-full border-t-2 border-gray-500">
                    {showAgenda ? (
                        agendaItems.map((item, index) => (
                            <div key={index} className="text-[10px] md:text-[30px] lg:text-[40px] my-3 px-4">
                                {item.startTime && item.endTime ? (
                                    <span>{item.startTime} – {item.endTime} – </span>
                                ) : null}

                                {item.firstname ? (
                                    <a href={`/speakers/${item.firstname}`} className="underline">
                                        <span>{item.title}</span>
                                    </a>
                                ) : (
                                    <span>{item.title}</span>
                                )}
                            </div>
                        ))
                    ) : (
                        agendaItems2.map((item, index) => (
                            <div key={index} className="text-[10px] md:text-[30px] lg:text-[40px] my-3 px-4">
                                {item.startTime && item.endTime ? (
                                    <span>{item.startTime} – {item.endTime} – </span>
                                ) : null}

                                {item.firstname ? (
                                    <a href={`/speakers/${item.firstname}`} className="underline">
                                        <span>{item.title}</span>
                                    </a>
                                ) : (
                                    <span>{item.title}</span>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Agenda;
