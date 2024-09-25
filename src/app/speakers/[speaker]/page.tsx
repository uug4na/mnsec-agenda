import Image from "next/image";
import speakers from "../../sections/speakers.json";


interface Speaker {
    firstname: string;
    lastname: string;
    position: string;
    topic: string;
}


export default function Page({ params }: { params: { speaker: string } }) {
    const speaker: Speaker | undefined = speakers.find(spk => spk.firstname.toLowerCase() === params.speaker.toLowerCase());
    const fullName = `${speaker?.firstname ?? ''} ${speaker?.lastname ?? ''}`.trim();

    if (!speaker) {
        return <div>Speaker not found</div>;
    }

    return (
        <div className="h-screen flex flex-col md:flex-row lg:flex-row  justify-center gap-20 mx-8 md:mx-5 lg:mx-20 bg-black">
            <div className="flex mt-20">
                <div className="animate-pulse bg-[url('/bg.gif')] bg-cover bg-no-repeat" style={{ animationDuration: '10s' }}>
                </div>
                <div className="text-[#B1D572]">
                    <div>
                        <Image src={'/' + params.speaker + '.svg'} width={310} height={310} alt="image" />
                    </div>
                    <div className="text-[20px] md:text-[30px] lg:text-[48px] font-semibold mt-5">{fullName}</div>
                    <div className="text-[16px] md:text-[20px] lg:text-[24px] font-extralight">{speaker.position}</div>
                    <div className="text-[16px] md:text-[20px] lg:text-[30px] font-semibold mt-16">
                        {speaker.topic}
                    </div>
                </div>
            </div>

            <div className="bg-[url('/bg.gif')] bg-cover bg-no-repeat">
                <div className="md-0 md:mt-20 lg:mt-20">
                    <div className="">
                        <Image src={'/small-logo.svg'} width={547} height={107} alt="image" className="relative z-10 backdrop-blur-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
}
