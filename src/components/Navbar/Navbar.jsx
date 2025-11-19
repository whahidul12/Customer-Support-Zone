import React from "react";

const Navbar = () => {
    return (
        <div className="navbar bg-[#E9E9E9] text-black max-w-[1400px] mx-auto px-3 justify-between">
            <div className="navbar-start md:w-1/3 w-11/12">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-[#E9E9E9]"
                    >
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                        <li>
                            <a>Changelog</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>Download</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
                <a className="text-xl px-0 cursor-pointer">CS — Ticket System</a>
            </div>
            <div className="navbar-end md:w-2/3">
                <ul className="menu menu-horizontal px-1 hidden lg:flex text-base">
                    <li>
                        <a className="hover:bg-[#9B5FF1] hover:text-white active:!bg-[#642FE3] py-2">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#9B5FF1] hover:text-white active:!bg-[#642FE3] py-2">
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#9B5FF1] hover:text-white active:!bg-[#642FE3] py-2">
                            Changelog
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#9B5FF1] hover:text-white active:!bg-[#642FE3] py-2">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#9B5FF1] hover:text-white active:!bg-[#642FE3] py-2">
                            Download
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#9B5FF1] hover:text-white active:!bg-[#642FE3] py-2">
                            Contact
                        </a>
                    </li>
                </ul>
                <a className="btn border-none bg-[linear-gradient(140deg,#632EE3_0%,#9F62F2_100%)]">
                    + New Ticket
                </a>
            </div>
        </div>
    );
};

export default Navbar;
