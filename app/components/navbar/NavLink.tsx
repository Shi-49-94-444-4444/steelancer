'use client'

import { useCallback, useState } from "react";
import { MenuItem } from "../navbar";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface NavLinkProps {
    isLoggedIn: boolean;
    userRole: string;
}

const NavLink = ({ isLoggedIn, userRole }: NavLinkProps) => {
    const { t } = useTranslation();

    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isFreelancerOpen, setIsFreelancerOpen] = useState(false);
    const [isBusinessOpen, setIsBusinessOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsMoreOpen(true);
    };

    const handleMouseLeave = () => {
        setIsMoreOpen(false);
    };

    const handleMouseEnterUser = () => {
        setIsFreelancerOpen(true);
        setIsBusinessOpen(true);
    };

    const handleMouseLeaveUser = () => {
        setIsFreelancerOpen(false);
        setIsBusinessOpen(false);
    };

    return (
        <div
            className="
                w-full
                md:w-auto
                py-2
                transition
                cursor-pointer
            "
        >
            <nav
                className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    font-semibold
                    text-sm
                "
            >
                <Link href="/" className="px-6 hover:text-pink-cus-bt">
                    {t("Home")}
                </Link>
                <Link href="/list_business" className="px-6 hover:text-pink-cus-bt">
                    {t("Find work")}
                </Link>
                <Link href="/list_freelancer" className="px-6 hover:text-pink-cus-bt">
                    {t("Find Freelancers")}
                </Link>
                {isLoggedIn && (userRole === "freelancer" || userRole === "business") ? (
                    <>
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnterUser}
                            onMouseLeave={handleMouseLeaveUser}
                        >
                            <Link href="/username" className="px-6 hover:text-pink-cus-bt" replace>
                                {t("Username")}
                            </Link>
                            {userRole === "freelancer" && isFreelancerOpen && (
                                <div
                                    className="
                                        absolute
                                        w-10
                                        md:w-40
                                        bg-white
                                        overflow-hidden
                                    "
                                >
                                    <div
                                        className="
                                            flex 
                                            flex-col 
                                            cursor-pointer
                                        "
                                    >
                                        <>
                                            <MenuItem href="/" label={t("Profile")} />
                                            <MenuItem href="/" label={t("Manage job")} />
                                        </>
                                    </div>
                                </div>
                            )}
                            {userRole === "business" && isBusinessOpen && (
                                <div
                                    className="
                                        absolute
                                        w-10
                                        md:w-40
                                        bg-white
                                        overflow-hidden
                                    "
                                >
                                    <div
                                        className="
                                            flex 
                                            flex-col 
                                            cursor-pointer
                                        "
                                    >
                                        <>
                                            <MenuItem href="/" label={t("Profile")} />
                                            <MenuItem href="/" label={t("Manage job")} />
                                        </>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <Link href="/login" className="px-6 hover:text-pink-cus-bt" replace>
                        {t("Log in")}
                    </Link>
                )}


                {isLoggedIn ? (
                    <Link href="/register" className="px-6 hover:text-pink-cus-bt">
                        {t("Sign up")}
                    </Link>
                ) : (
                    <Link href="/logout" className="px-6 hover:text-pink-cus-bt">
                        {t("Logout")}
                    </Link>
                )}
                <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div
                        className="
                            px-6
                            hover:text-pink-cus-bt
                        "
                    >
                        {t("More")}
                    </div>
                    {isMoreOpen && (
                        <div
                            className="
                                absolute
                                w-10
                                md:w-40
                                bg-white
                                overflow-hidden
                            "
                        >
                            <div
                                className="
                                    flex 
                                    flex-col 
                                    cursor-pointer
                                "
                            >
                                <>
                                    <MenuItem href="/" label={t("Policy")} />
                                    <MenuItem href="/" label={t("FAQ")} />
                                    <MenuItem href="/" label={t("Contract")} />
                                    <MenuItem href="/" label={t("Price list")} />
                                </>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavLink;
