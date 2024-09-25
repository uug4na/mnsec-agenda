import Image from "next/image"

export default function Page() {
    return (
        <div className="h-screen flex flex-row justify-center gap-20 ">
            <div className="bg-black flex max-w-[1132px] mt-20">
                <div className="animate-pulse bg-[url('/bg.gif')] bg-cover bg-no-repeat" style={{ animationDuration: '10s' }}>
                </div>
                <div className="text-[#B1D572]">
                    <div>
                        <Image src={'darja-anna.svg'} width={310} height={310} alt="image" />
                    </div>
                    <div className="text-[48px] font-semibold mt-5">Darja-Anna Yurovsky</div>
                    <div className="text-[24px] font-extralight">Senior Security Engineer @ Switch CERT</div>
                    <div className="text-[30px] font-semibold whitespace-pre-line mt-16">
                        {`Behind the Shield: Tales from\nthe Incident Response Frontline`}
                    </div>
                </div>

            </div>

            <div className="bg-[url('/bg.gif')] bg-cover bg-no-repeat">
                <div className="mt-20">
                    <div className="">
                        <Image src={'small-logo.svg'} width={547} height={107} alt="image" className="relative z-10 backdrop-blur-sm" />
                    </div>
                </div>
            </div>
        </div>
    )
}
