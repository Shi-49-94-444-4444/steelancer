'use client'

import { useCallback, useState } from "react"
import { MenuItem } from "../navbar"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const NavLink = () => {
    const [isMoreOpen, setIsMoreOpen] = useState(false)
    const { t } = useTranslation();

    const toggleMoreOpen = useCallback(() => {
        setIsMoreOpen((value) => !value);
    }, [])

    // function LanguageSwitcher() {
    //     const { i18n } = useTranslation();

    //     const handleChangeLanguage = (language: string) => {
    //         i18n.changeLanguage(language);
    //     };

    //     return (
    //         <div>
    //             <button onClick={() => handleChangeLanguage('en')}>English</button>
    //             <button onClick={() => handleChangeLanguage('vi')}>Vietnamese</button>
    //         </div>
    //     );
    // }

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
            <nav className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    font-semibold
                    text-sm
                "
            >
                <Link href="/" className="px-6 hover:text-pink-cus-bt">
                    {t('Home')}
                </Link>
                <Link href="/list_business" className="px-6 hover:text-pink-cus-bt">
                    {t('Find work')}
                </Link>
                <Link href="/list_freelancer" className="px-6 hover:text-pink-cus-bt">
                    {t('Find Freelancers')}
                </Link>
                <Link href="/login" className="px-6 hover:text-pink-cus-bt" replace>
                   {t('Log in')}
                </Link>
                <Link href="/register" className="px-6 hover:text-pink-cus-bt">
                    {t('Sign up')}
                </Link>
                <div className="relative">
                    <div
                        onClick={toggleMoreOpen}
                        className="
                            px-6
                            hover:text-pink-cus-bt
                        "
                    >
                        {t('More')}
                    </div>
                    {isMoreOpen && (
                        <div className="
                                absolute
                                w-10
                                md:w-40
                                bg-white
                                overflow-hidden
                            "
                        >
                            <div className="
                                    flex 
                                    flex-col 
                                    cursor-pointer
                                "
                            >
                                <>
                                    <MenuItem
                                        href="/"
                                        label={t('Policy')}
                                    />
                                    <MenuItem
                                        href="/"
                                        label={t('FAQ')}
                                    />
                                    <MenuItem
                                        href="/"
                                        label={t('Contract')}
                                    />
                                    <MenuItem
                                        href="/"
                                        label={t('Price list')}
                                    />
                                </>
                            </div>
                        </div>
                    )}
                    {/* {LanguageSwitcher()} */}
                </div>
            </nav>
        </div>
    )
}

export default NavLink