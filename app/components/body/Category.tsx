'use client'

import CategoryBox from "../modal"
import Container from "../Container"
import FormatCusMd from "../format"
import { categories } from "@/app/constants"
import { ButtonCus } from "../body"

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
                    <ButtonCus />
                </div>
            </Container>
        </FormatCusMd>
    )
}

export default Category