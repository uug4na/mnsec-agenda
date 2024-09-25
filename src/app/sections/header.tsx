import Image from "next/image";

const Header = () => {
    return (
        <div className="relative bg-[url('/bg.gif')] bg-cover bg-center flex justify-center items-center mx-10 md:mx-15 lg:mx-20 min-h-screen">
            <div className="relative z-10 backdrop-blur-sm">
                <Image src={'/logo.svg'} width={843} height={469} alt='logo' />
            </div>
        </div>
    );
};

export default Header;
