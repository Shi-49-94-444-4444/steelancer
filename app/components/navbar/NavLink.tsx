'use client'

import { useCallback, useState } from "react"
import { MenuItem } from "../navbar"
import Link from 'next/link';

const NavLink = () => {
    const [isMoreOpen, setIsMoreOpen] = useState(false)

    const toggleMoreOpen = useCallback(() => {
        setIsMoreOpen((value) => !value);
    }, [])

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
                <Link href="/" className="px-6 hover:text-pink-500">
                    Home
                </Link>
                <Link href="/" className="px-6 hover:text-pink-500">
                    Find work
                </Link>
                <Link href="/" className="px-6 hover:text-pink-500">
                    Find Freelancers
                </Link>
                <Link href="/Login" className="px-6 hover:text-pink-500" replace>
                    Log in
                </Link>
                <Link href="/" className="px-6 hover:text-pink-500">
                    Sign up
                </Link>
                <div className="relative">
                    <div
                        onClick={toggleMoreOpen}
                        className="
                            px-6
                            hover:text-pink-500
                        "
                    >
                        More
                    </div>
                    {isMoreOpen && (
                        <div className="
                                absolute
                                w-[40px]
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
                                        label="Policy"
                                    />
                                    <MenuItem
                                        href="/"
                                        label="FAQ"
                                    />
                                    <MenuItem
                                        href="/"
                                        label="Contract"
                                    />
                                    <MenuItem
                                        href="/"
                                        label="Price list"
                                    />
                                </>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default NavLink