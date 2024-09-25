import Link from "next/link";
import Image from "next/image";

const Sponsors = () => {
    return (
        <div className="bg-[url('/bg-1.svg')] bg-cover bg-center">
            <div className="flex flex-col text-[#B1D572] items-center mx-5 md:mx-10 lg:mx-0">
                <div className="text-[24px] md:text-[42px] lg:text-[64px] font-normal whitespace-pre-line leading-snug text-center">{`
            Co-organizer,\nSponsoring organizations`}</div>
                <div className="items-center mt-10 md:mt-20 lg:mt-20">
                    {/* Gold Sponsors */}
                    <div className="flex flex-col self-start">
                        <div className="text-[24px] md:text-[42px] lg:text-[64px]">
                            Gold sponsors
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            <div>
                                <Link href="https://eset.com" target="_blank">
                                    <Image src={'/1-eset.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.linkedin.com/company/cyberworld-asia-limited/" target="_blank">
                                    <Image src={'/2-cyberworld.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.checkpoint.com/" target="_blank">
                                    <Image src={'/3-checkpoint.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.paloaltonetworks.com/" target="_blank">
                                    <Image src={'/4-paloalto.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Silver Sponsors */}
                    <div className="flex flex-col self-start mt-10">
                        <div className="text-[24px] md:text-[42px] lg:text-[64px]">
                            Silver sponsors
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-start">
                            <div>
                                <Link href={"https://www.proofpoint.com/us"} target="_blank">
                                    <Image src={'/5-proof.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                            <div>
                                <Link href={"https://www.crowdstrike.com/en-us/"} target="_blank">
                                    <Image src={'/6-crowd.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                            <div>
                                <Link href={"https://www.hashicorp.com/"} target="_blank">
                                    <Image src={'/7-hashi.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                            <div>
                                <Link href={"https://www.infoblox.com/"} target="_blank">
                                    <Image src={'/8-info.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                            <div>
                                <Link href={"https://gov.protelion.com/"} target="_blank">
                                    <Image src={'/9-pro.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bronze Sponsors */}
                    <div className="flex flex-col self-start mt-10">
                        <div className="text-[24px] md:text-[42px] lg:text-[64px]">
                            Bronze sponsors
                        </div>
                        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <Link href={"https://www.team-cymru.com/"} target="_blank">
                                    <Image src={'/10.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                            <div>
                                <Link href={"https://weknowcyber.com/"} target="_blank">
                                    <Image src={'/11-we.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                            <div>
                                <Link href={"https://mobinet.mn/"} target="_blank">
                                    <Image src={'/12-mobi.svg'} width={296} height={180} alt='sponsor' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Sponsors;
