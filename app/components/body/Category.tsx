'use client'

import CategoryBox from "../CategoryBox"
import Container from "../Container"
import FormatCusMd from "../FormatCusMd"
import { categories } from "../constants"

const Category = () => {
    return (
        <FormatCusMd>
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
                              
                              
                            text-5xl 
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
                        mt-20
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
                    <div className="
                        flex 
                        flex-row 
                        justify-center 
                        items-center
                        mt-10
                        "
                    >
                        <button
                            onClick={() => { }}
                            className="
                                text-sm
                                px-10
                                py-5
                                bg-pink-500
                                text-white
                                font-semibold
                                transition
                                cursor-pointer
                                hover:bg-pink-600
                                rounded-[10px]
                                text-[20px]
                                whitespace-nowrap
                            "
                        >
                            More Categories
                        </button>
                    </div>

                </div>
            </Container>
        </FormatCusMd>
    )
}

export default Category