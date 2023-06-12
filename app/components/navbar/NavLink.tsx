'use client'

import { useState } from "react";
import { MenuItem } from "../navbar";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import AuthService, { UserInfo } from '../../../services/auth'
import useCreateModal from "@/hooks/useCreateModal";

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

    const onLogout = () => {
        AuthService.logout();
        console.log("logging out");
        const baseUrl = window.location.origin;
        window.location.href = baseUrl;
    }

    const createModal = useCreateModal()

    const handleCreateButtonClick = () => {
        createModal.onOpen();
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

                            </>
                        )}
                    </div>
                ) : (
                    <>
                        <Link href="/login" className="px-6 hover:text-pink-cus-bt" replace>
                            {t("Log in")}
                        </Link>

                    </>
                )}
                {currentUser?.Username === "" ? (
                    <Link href="/register" className="px-6 hover:text-pink-cus-bt">
                        {t("Sign up")}
                    </Link>
                ) : (
                    <Link href="/" onClick={onLogout} className="px-6 hover:text-pink-cus-bt">
                        {t("Logout")}
                    </Link>
                )}
                <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button
                        onClick={handleCreateButtonClick}
                        className="
                            px-6
                            hover:text-pink-cus-bt
                        "
                    >
                        {t("More")}
                    </button>
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
            </nav >
        </div >
    );
};

export default NavLink;
