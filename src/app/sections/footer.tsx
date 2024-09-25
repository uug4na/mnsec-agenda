"use client";

import { RefObject } from "react";

interface FooterProps {
    sponsorsRef: RefObject<HTMLDivElement>;
    agendaRef: RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({ sponsorsRef, agendaRef }) => {
    const scrollToSection = (sectionRef: RefObject<HTMLDivElement>) => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="fixed bottom-0 w-full bg-gray-800 text-[#B1D572] border-t-2 border-white">
            <div className="flex justify-around py-4">
                <button onClick={() => scrollToSection(sponsorsRef)} className="text-lg hover:underline">
                    Sponsors
                </button>
                <button className="text-lg hover:underline">
                    <a href="/badge">
                        Badge
                    </a>
                </button>
                <button onClick={() => scrollToSection(agendaRef)} className="text-lg hover:underline">
                    Agenda
                </button>

            </div>
        </footer>
    );
};

export default Footer;
