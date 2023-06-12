'use client'

import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"

const ButtonCus = () => {
    const router = useRouter()
    const { t } = useTranslation()
    
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
                    onClick={() => router.push('/post_job')}
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
                    {t("Post a project")}
                </button>
            </div>
        </div>
    )
}

export default ButtonCus