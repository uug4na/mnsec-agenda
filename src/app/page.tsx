"use client"
import { useRef } from "react";
import Header from "./sections/header";
import Sponsors from "./sections/sponsors";
import Location from "./sections/location";
import AgendaBackground from "./sections/agendaBackground";
import Agenda from "./sections/agenda";
import LastBackground from "./sections/lastBackground";
import Footer from "./sections/footer";

export default function Home() {
    const sponsorsRef = useRef(null);
    const locationRef = useRef(null);
    const agendaRef = useRef(null);

    return (
        <div className="flex flex-col min-h-screen relative bg-black">
            <div className="flex-grow">
                <Header />
                <div ref={sponsorsRef}>
                    <Sponsors />
                </div>
                <div ref={locationRef}>
                    <Location />
                </div>
                <div>
                    <AgendaBackground />
                </div>
                <div ref={agendaRef}>
                    <Agenda />
                </div>
                <LastBackground />
            </div>
            <Footer sponsorsRef={sponsorsRef} locationRef={locationRef} agendaRef={agendaRef} />
        </div>
    );
}
