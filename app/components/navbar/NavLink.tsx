const NavLink = () => {
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
                    "
                >
                    <div
                        className="
                        text-sm
                        px-6
                        hover:text-pink-500
                        "
                    >
                        Home
                    </div>
                    <div className="
                        text-sm
                        px-6
                        hover:text-pink-500
                        "
                    >
                        Find work
                    </div>
                    <div className="
                        text-sm
                        px-6
                        hover:text-pink-500
                        "
                    >
                        Find Freelancers
                    </div>
                    <div className="
                        text-sm
                        px-6
                        hover:text-pink-500
                        "
                    >
                        Log In
                    </div>
                    <div className="
                        text-sm
                        px-6
                        hover:text-pink-500
                        "
                    >
                        Sign Up
                    </div>
                    <div className="
                        text-sm
                        px-6
                        hover:text-pink-500
                        "
                    >
                        More
                    </div>
                </div>
            </div>
    )
}

export default NavLink