'use client'

import React, { useState, useEffect } from "react";
import Container from "../Container";
import { Logo, NavLink, ButtonCus } from "../navbar";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`
                flex 
                flex-row 
                justify-center 
                ${isScrolled ?
                    "pt-0" : "pt-8"
                } 
                sticky 
                top-0
                z-50
                `
            }
        >
            <div
                className={`
                    md:h-[100px] 
                    bg-white 
                    z-10 
                    shadow-lg 
                    ${isScrolled ?
                        "rounded-none w-full" : "rounded-full w-[90%]"
                    }
                    `
                }
            >
                <Container>
                    <div className="
                            flex 
                            flex-row 
                            items-center 
                            justify-between 
                            gap-3 
                            md:gap-0
                        "
                    >
                        <Logo />
                        <NavLink />
                        <ButtonCus />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
