'use client'

const Button = () => {
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => { }}
                    className="
                    hidden
                    w-full
                    md:block
                    text-sm
                    py-3
                    px-4
                    bg-pink-500
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
                </div>
            </div>
        </div>
    )
}

export default Button