import Image from "next/image";
const Location = () => {
    return (
        <div className="bg-[url('/bg-2.svg')] bg-cover bg-center">
            <div className="mx-10 md:mx-15 lg:mx-20 text-[#B1D572] flex flex-col items-center mt-0 md:mt-4 lg:mt-8">
                <div className="text-[24px] md:text-[42px] lg:text-[64px] font-normal whitespace-pre-line leading-tight text-center">{`
                On 9/26/2024 Ballroom of\nShangri-La
                `}</div>
                <div className="flex flex-row justify-between mt-10 md:mt-20 lg:mt-24 gap-6">
                    <div className="p-2 md:p-5 lg:p-10 bg-black">
                        <Image className="" src={'qr.svg'} width={300} height={300} alt='qr' />
                    </div>
                    <div className="self-end">
                        <Image src={'arrow.svg'} width={372} height={181} alt='arrow' />
                    </div>
                    <div className="flex  flex-col leading-tight self-end">
                        <div className="text-[12px] md:text-[24px] lg:text-[36px]">Location</div>
                        <div className="text-[10px] md:text-[24px] lg:text-[36px] whitespace-pre-line">{`
                            Scan QR Code
                            `}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location;
