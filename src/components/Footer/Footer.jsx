import React from "react";
import twitterIcon from "/src/assets/twitter.png";
import linkedInIcon from "/src/assets/linkedIn.png";
import facebookIcon from "/src/assets/facebook.png";
import emailIcon from "/src/assets/Email.png";

const Footer = () => {
    return (
        <div className="w-full bg-black text-white mt-20">
            <div className="max-w-[450px] xl:max-w-[1400px] mx-auto py-20 px-3 grid grid-cols-2 xl:grid-cols-6">
                <div className="w-[350px] col-span-2 mx-auto xl:mx-0">
                    <h1 className="text-2xl font-bold">CS — Ticket System</h1>
                    <p className="text-base text-[#A1A1AA] text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="col-span-1 mt-6 xl:mt-0">
                    <ul>
                        <li>Company</li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA]">
                                About Us
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA]">
                                Our Mission
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA]">
                                Contact Saled
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 mt-6 xl:mt-0">
                    <ul>
                        <li>Services</li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA]">
                                Products & Services
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA]">
                                Customer Stories
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA]">
                                Download Apps
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 mt-6 xl:mt-0">
                    <ul>
                        <li>Information</li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA]">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA]">
                                Terms & Conditions
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA]">
                                Join Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 mt-6 xl:mt-0">
                    <ul>
                        <li>Social Linksn</li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA] flex">
                                <img
                                    src={twitterIcon}
                                    alt="twitter"
                                    className="mr-2 w-[24px] h-[24px]"
                                />
                                @CS — Ticket System
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA] flex">
                                <img
                                    src={linkedInIcon}
                                    alt="linkedIn"
                                    className="mr-2 w-[24px] h-[24px]"
                                />
                                @CS — Ticket System
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA] flex">
                                <img
                                    src={facebookIcon}
                                    alt="facebook"
                                    className="mr-2 w-[24px] h-[24px]"
                                />
                                @CS — Ticket System
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="text-base text-[#A1A1AA] flex">
                                <img
                                    src={emailIcon}
                                    alt="Email"
                                    className="mr-2 w-[24px] h-[24px]"
                                />
                                support@cst.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center pb-7">
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
