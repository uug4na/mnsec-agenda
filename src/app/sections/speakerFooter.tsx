"use client";

const SpeakerFooter = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-gray-800 text-[#B1D572] border-t-2 border-white">
            <div className="flex justify-around py-4">
                <button className="text-lg hover:underline">
                    <a href="/">
                        Sponsors
                    </a>
                </button>
                <button className="text-lg hover:underline">
                    <a href="/">
                        Location
                    </a>
                </button>
                <button className="text-lg hover:underline">
                    <a href="/">
                        Agenda
                    </a>
                </button>

            </div>
        </footer>
    );
};

export default SpeakerFooter;
