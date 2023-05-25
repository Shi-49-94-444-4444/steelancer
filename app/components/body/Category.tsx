import CategoryBox from "../CategoryBox"
import Container from "../Container"
import { categories } from "../constants"

const Category = () => {
    return (
        <div className="px-20 py-20">
            <Container>
                <div className="
                    flex 
                    flex-col 
                    gap-3 
                    md:gap-0 
                    z-10
                    "
                >
                    <div className="
                        flex 
                        flex-row 
                        justify-center 
                        items-center
                        "
                    >
                        <h1 className="
                            font-poppins 
                            font-normal 
                            text-[50px] 
                            font-semibold
                            "
                        >
                            <span>Choose Different </span>
                            <span className="text-pink-300">Category</span>
                        </h1>
                    </div>
                    <div className="
                        grid 
                        grid-cols-1 
                        md:grid-cols-2 
                        lg:grid-cols-4 
                        gap-4 
                        justify-center 
                        pt-20
                        "
                    >
                        {categories.map((item) => (
                            <CategoryBox
                                key={item.label}
                                image={item.src}
                                label={item.label}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Category