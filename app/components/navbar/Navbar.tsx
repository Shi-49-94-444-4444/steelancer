'use client'

import React, { useState, useEffect } from "react";
import Container from "../Container";
import { Logo, NavLink, ButtonCus } from "../navbar";
import AuthService, { UserInfo } from '../../../services/auth'
// import { ca } from "date-fns/locale";

interface NavbarProps {
    currentUser: UserInfo | null
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser,
}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    // const [user, setUser] = useState<UserInfo>({
    //     Username: "",
    //     Email: "",
    //     Role: ""
    // });
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // useEffect(() => {
    //     try {
    //         console.log(AuthService.getUserInfo());
    //         setUser(AuthService.getUserInfo());
    //         setIsLoggedIn(true);
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }, [])

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
                        <NavLink currentUser={currentUser} />
                        <ButtonCus />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
