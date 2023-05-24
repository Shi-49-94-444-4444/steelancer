import Container from '../Container'
import { Logo, NavLink, Button } from '../navbar'

const Navbar = () => {
    return (
        <div className="
                flex 
                flex-row 
                justify-center 
                pt-8
                sticky
                top-0
                z-50
                "
            >
            <div className="
                    w-[90%] 
                    md:h-[100px] 
                    bg-white 
                    z-10 
                    shadow-lg 
                    rounded-full">
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
                        <Button />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar