"use client"
import { useState } from "react";
import Image from "next/image";

export default function Page() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flex flex-col text-[#B1D572] justify-center items-center bg-black">
            <div className="mx-14 md:mx-24 lg:mx-44 flex flex-col gap-10 mt-10">
                <div>
                    <a href="/">
                        <Image src={'/back-arrow.svg'} width={40} height={40} alt="arrow" className="text-white bg-[#B1D572]" />
                    </a>
                </div>
                <div className="font-bold text-3xl md:text-4xl lg:text-5xl">MNSEC Conference Badge: Matrix Gerege</div>
                <div className="text-xl md:text-2xl">Welcome to the MNSEC 11th Conference! We’re excited to introduce the innovative badge for this year’s event, designed to enhance your networking experience and add a touch of personalization.
                </div>
                <div className="font-bold text-3xl md:text-4xl lg:text-5xl">Concept</div>
                <div className="text-xl md:text-2xl">The Matrix is everywhere. It is all around us. It is the world that has been pulled over your eyes to blind you from the truth. A prison for your mind.</div>
                <div className="text-xl">- MORPHEUS -</div>
                <div className="font-bold text-3xl md:text-4xl lg:text-5xl">Badge Features</div>
                <ul className="list-disc">
                    <li className="font-bold text-2xl">Rechargeable Battery</li>
                    <div>Never worry about running out of power! The Matrix Gerege badge comes with a long-lasting, rechargeable battery that can be easily charged via USB-C. Enjoy a full day of connectivity and interaction without interruptions.</div>
                    <li className="font-bold text-xl md:text-2xl">Customizable LEDs</li>
                    <div>Stand out in the crowd! Our badge features customizable LED lights, allowing you to select from a wide array of colors and patterns. Whether you want to showcase your unique style or represent your team, the choice is yours.</div>
                    <li className="font-bold text-xl md:text-2xl">Change Modes</li>
                    <div>Adapt your badge to fit the moment with multiple display modes:</div>
                    <div>Default Mode (Matrix Theme): Enjoy the classic Matrix aesthetic.
                        <div>
                            Red Team Mode: If you work in the red team, activate this mode to show your colors.
                        </div>
                        <div>
                            Blue Team Mode: For those in the blue team, select this mode to represent your team.
                        </div>
                        <div>
                            Rainbow Mode: If you're involved in all areas, use the vibrant rainbow mode to showcase your versatility.
                        </div>
                        <div>
                            Secret Mode (Shhhh): Activate this stealthy mode for confidential discussions—perfect for behind-the-scenes networking!</div>
                    </div>
                </ul>
                <div className="font-bold text-3xl md:text-4xl lg:text-5xl">Cautions</div>
                <div>To ensure the longevity and safe use of your badge, please observe the following cautions:</div>
                <ul className="list-decimal">
                    <li>Power Off When Not in Use: To preserve battery life, please power off the badge when it's not in use.</li>
                    <li>Battery Replacement: When replacing the battery, ensure you follow the indicated battery direction for proper installation.</li>
                    <li>Use a Soft Case: To protect your badge from damage while moving, please use a soft case.</li>
                </ul>
                <div className="font-bold text-5xl">Why Choose the Matrix Gerege Badge?</div>
                <div>The Matrix Gerege badge isn’t just an identification tool; it’s a way to express yourself and engage with others at the MNSEC conference. Its innovative features are designed to enhance networking, making it easier to connect with fellow attendees.</div>
                <div className="font-bold text-5xl">Get Your Badge</div>
                <div>Don’t miss out on this exciting opportunity! Make sure to pick up your Matrix Gerege badge at the registration desk when you arrive. Let’s make this conference unforgettable!</div>
                <div className="font-bold text-5xl">Customization Instructions</div>
                <div>To fully customize your Matrix Gerege badge, you'll need the following:</div>
                <ul className="list-disc">
                    <li>TTL (Transistor-Transistor Logic) interface <a href="https://elec.mn/category/9/product/1743" target="_blank" className="underline">https://elec.mn/category/9/product/1743</a></li>
                    <li>Arduino IDE complier  - <a href="https://www.arduino.cc/en/software" target="_blank" className="underline">https://www.arduino.cc/en/software</a>
                    </li>
                    <li>Your own code or sample code to program the badge’s LED features</li>
                </ul>
                <div className="font-bold text-5xl">Sample Code</div>
                <div>Below is a simple example of Arduino code to get you started with customizing the LED display on your badge. This code allows you to switch between different modes based on button presses: <a href="https://pastebin.com/tQgPG8a6" target="_blank" className="underline">https://pastebin.com/tQgPG8a6</a>
                </div>
            </div>
            <div className="py-10">
                <div
                    className={`relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] transition-transform duration-700 ${isFlipped ? '' : ''}`}
                    onClick={handleClick}
                >
                    <div className={`absolute w-full h-full backface-hidden ${isFlipped ? 'hidden' : ''}`}>
                        <Image src={'/front.png'} width={400} height={500} alt="Front badge" />
                    </div>
                    <div className={`absolute w-full h-full backface-hidden ${isFlipped ? '' : 'hidden'}`}>
                        <Image src={'/back.png'} width={400} height={500} alt="Back badge" />
                    </div>
                </div>
            </div>
        </div>
    );
}
