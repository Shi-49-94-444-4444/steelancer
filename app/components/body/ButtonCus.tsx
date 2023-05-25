'use client'

const ButtonCus = () => {
    return (
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
    )
}

export default ButtonCus