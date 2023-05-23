import Container from '../Container'
import Logo from './Logo'

const Navbar = () => {
    return (
        <div className="fixed w-full h-[900px] bg-pink-100">
            <div className="flex flex-row justify-center pt-8">
                <div className="w-[90%] h-[100px] bg-white z-10 shadow-sm rounded-full">
                    <div className="py-8">
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
                                {/* <Logo /> */}
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar