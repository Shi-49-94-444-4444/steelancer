'use client'

const ButtonCus = () => {
    return (
        <div className="relative">
            <div className="
                    flex 
                    flex-row 
                    items-center 
                    gap-3
                "
            >
                <button
                    onClick={() => { }}
                    className="
                        hidden
                        w-full
                        md:block
                        text-sm
                        py-3
                        px-4
                        bg-pink-cus-bt
                        text-white
                        font-semibold
                        rounded-full
                        transition
                        cursor-pointer
                        hover:bg-pink-600
                    "
                    style={{ width: 'fit-content' }}
                >
                    Post a project
                </button>
            </div>
        </div>
    )
}

export default ButtonCus