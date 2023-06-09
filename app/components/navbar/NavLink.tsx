'use client'

import { useState } from "react";
import { MenuItem } from "../navbar";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import AuthService, { UserInfo } from '../../../services/auth'

interface NavLinkProps {
    currentUser: UserInfo | null
}

const NavLink = ({ currentUser }: NavLinkProps) => {
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
                    font-medium
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
                {currentUser && (currentUser.Role === "Freelancer" || currentUser.Role === "Business") ? (
                    <>
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnterUser}
                            onMouseLeave={handleMouseLeaveUser}
                        >
                            <Link href="/username" className="px-6 hover:text-pink-cus-bt" replace>
                                {currentUser.Username}
                            </Link>
                            {currentUser.Role === "Freelancer" && isFreelancerOpen && (
                                <>
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
                                    <Link href="/" onClick={AuthService.logout} className="px-6 hover:text-pink-cus-bt">
                                        {t("Logout")}
                                    </Link>
                                </>
                            )}
                            {currentUser.Role === "Business" && isBusinessOpen && (
                                <>
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
                                    <Link href="/" onClick={AuthService.logout} className="px-6 hover:text-pink-cus-bt">
                                        {t("Logout")}
                                    </Link>
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="px-6 hover:text-pink-cus-bt" replace>
                            {t("Log in")}
                        </Link>
                        <Link href="/register" className="px-6 hover:text-pink-cus-bt">
                            {t("Sign up")}
                        </Link>
                    </>
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
        </div >
    );
};

export default NavLink;
