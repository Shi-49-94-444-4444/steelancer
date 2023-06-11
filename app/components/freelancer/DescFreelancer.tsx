'use client'

import { BsFillPatchCheckFill } from "react-icons/bs"
import Rating from "../Rating"
import Performance from "./Performance";
import DetailFreelancer from "./DetailFreelancer";
import SkillFreelancer from "./SkillFreelancer";
import useQrModal from "@/hooks/useQrModal";
import useEditModal from "@/hooks/useEditModal";
import QrMomo from "../modal/ModalQRMomo";
import { useContext, createContext } from "react";

interface PerformanceItem {
    title: string;
    percent: number;
}

interface DetailItem {
    title: string;
    description: string;
}

export interface SkillItem {
    title: string;
}

interface DescFreelancerProps {
    id?: string;
    title?: string;
    label?: string;
    star?: number;
    rateStar?: number;
    numberCmt?: number;
    performance?: PerformanceItem[];
    // detail?: DetailItem[];
    detail?: string;
    skill?: SkillItem[];
}

const DescFreelancer: React.FC<DescFreelancerProps> = ({
    id,
    title,
    label,
    // star,
    // rateStar,
    // numberCmt,
    // performance,
    detail,
    skill
}) => {
    const qrModal = useQrModal();
    const editModal = useEditModal();

    const UserContext = createContext({
        role: 'business',
        userId: undefined,
    });
    const { role, userId } = useContext(UserContext);

    const isBusinessRole = role === 'business';
    const isFreelancerRole = role === 'freelancer' && userId;

    const handleHireButtonClick = () => {
        qrModal.onOpen();
    };

    const handleEditButtonClick = () => {
        editModal.onOpen();
    };

    return (
        <div className="
                bg-white 
                rounded-15 
                shadow-lg
            "
        >
            <div className="
                    flex 
                    flex-col 
                    p-8 
                    px-10 
                    gap-2
                "
            >
                <div className="flex flex-row justify-between">
                    <div className="
                            flex 
                            flex-row 
                            gap-4 
                            items-center
                        "
                    >
                        <h1 className="text-3xl font-medium">
                            {title}
                        </h1>
                        <BsFillPatchCheckFill size={30} className="text-pink-cus-tx" />
                    </div>
                    <div>
                        {isBusinessRole && (
                            <div>
                                <button
                                    onClick={handleEditButtonClick}
                                    className="
                                        bg-pink-cus-bt 
                                        text-white 
                                        rounded-50 
                                        px-8 
                                        h-12 
                                        text-xl 
                                        font-semibold
                                    "
                                >
                                    Hire now
                                </button>
                                {/* <QrMomo /> */}
                                
                            </div>
                        )}
                        {isFreelancerRole && (
                            userId === id && (
                                <div>
                                    <button
                                        onClick={handleHireButtonClick}
                                        className="
                                            bg-pink-cus-bt 
                                            text-white 
                                            rounded-50 
                                            px-8 
                                            h-12 
                                            text-xl 
                                            font-semibold
                                        "
                                    >
                                        Edit Profile
                                    </button>
                                    <QrMomo />
                                </div>
                            )
                        )}
                    </div>
                </div>
                <h2 className="text-2xl">
                    {label}
                </h2>
                {/* <div className="
                        flex 
                        flex-row 
                        items-center 
                        space-x-2
                    "
                >
                    <Rating rating={star} maxStars={5} sizeCus={30} />
                    <div className="text-xl">
                        {rateStar} ({numberCmt} Comment)
                    </div>
                </div> */}
                {/* <div className="
                        flex 
                        flex-row 
                        gap-3 
                        space-x-10
                    "
                >
                    {performance.map((item) => (
                        <Performance
                            key={item.title}
                            percent={item.percent}
                            title={item.title} />
                    ))}
                </div> */}
                <div className="pt-10 space-y-5">
                    <DetailFreelancer
                        title={label}
                        description={detail}
                    />
                    <div className="
                            grid 
                            grid-cols-12 
                            items-center
                        "
                    >
                        <div className="col-span-2">
                            <h3 className="text-gray-400">
                                Skill
                            </h3>
                        </div>
                        <div className="col-span-10">
                            <div className="
                                    flex 
                                    flex-row 
                                    space-x-2 
                                    cursor-pointer
                                "
                            >
                                {skill?.map((item) => (
                                    <SkillFreelancer
                                        key={item.title}
                                        title={item.title}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescFreelancer