import Image from "next/image";
const Location = () => {
    return (
        <div className="bg-[url('/bg-2.svg')] bg-cover bg-center">
            <div className="mx-10 md:mx-15 lg:mx-20 text-[#B1D572] flex flex-col items-center mt-0 md:mt-4 lg:mt-8">
                <div className="text-[24px] md:text-[42px] lg:text-[64px] font-medium whitespace-pre-line leading-tight text-center mt-20 self-center mb-20">{`
                On 9/26/2024 Ballroom of\nShangri-La
                `}</div>
            </div>
        </div>
    )
}

export default Location;
