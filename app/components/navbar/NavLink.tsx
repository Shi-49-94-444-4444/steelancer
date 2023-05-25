'use client'

import { useCallback, useState } from "react"
import { MenuHome, MenuMore } from '../navbar'

const NavLink = () => {
    const [isHomeOpen, setIsHomeOpen] = useState(false)
    const [isMoreOpen, setIsMoreOpen] = useState(false)

    const toggleHomeOpen = useCallback(() => {
        setIsHomeOpen((value) => !value);
    }, [])

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
                <div className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    font-semibold
                    text-sm
                    "
                >
                    <div className="relative">
                        <div
                            onClick={toggleHomeOpen}
                            className="
                            px-6
                            hover:text-pink-500
                            "
                        >
                            Home
                        </div>
                        {isHomeOpen && (
                            <div className="
                                    absolute
                                    w-[40px]
                                    md:w-40
                                    bg-white
                                    overflow-hidden
                                "
                            >
                                <div className="flex flex-col cursor-pointer">
                                    <>
                                        <MenuHome 
                                            onClick={() => {}}
                                            label='About us'
                                        />
                                        <MenuHome 
                                            onClick={() => {}}
                                            label='Category'
                                        />
                                        <MenuHome 
                                            onClick={() => {}}
                                            label='Job'
                                        />
                                    </>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        onClick={() => {}}
                        className="
                        px-6
                        hover:text-pink-500
                        "
                    >
                        Find work
                    </div>
                    <div
                        onClick={() => {}}
                        className="
                        px-6
                        hover:text-pink-500
                        "
                    >
                        Find Freelancers
                    </div>
                    <div
                        onClick={() => {}}
                        className="
                        px-6
                        hover:text-pink-500
                        "
                    >
                        Log In
                    </div>
                    <div
                        onClick={() => {}}
                        className="
                        px-6
                        hover:text-pink-500
                        "
                    >
                        Sign Up
                    </div>

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
                                        <MenuMore 
                                            onClick={() => {}}
                                            label='Policy'
                                        />
                                        <MenuMore
                                            onClick={() => {}}
                                            label='FAQ'
                                        />
                                        <MenuMore
                                            onClick={() => {}}
                                            label='Contract'
                                        />
                                        <MenuMore
                                            onClick={() => {}}
                                            label='Price list'
                                        />
                                    </>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    )
}

export default NavLink