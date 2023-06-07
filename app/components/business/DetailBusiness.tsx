'use client'

import InputBusiness from "./InputBusiness"

interface DetailBusinessProps {
    id: string;
    description?: string;
    skills?: string;
    date?: number
}

const DetailBusiness: React.FC<DetailBusinessProps> = ({
    id,
    date,
    description,
    skills
}) => {
    return (
        <div className="flex flex-col bg-white shadow-lg p-6 space-y-4 text-xl">
            <h1>Job Description:</h1>
            <p>{description}</p>
            <h2>Skill: {skills}</h2>
            <h2>ID project: {id}</h2>
            <div className="border-b-2"></div>
            <div className="grid grid-cols-3 justify-between items-center">
                <div className="col-span-2">
                    <h2 className="font-bold">Submit a job offer for this job now! <br /> Close offer after {date} day</h2>
                </div>
                <div className="col-span-1 pl-20">
                    <div className="text-[15px] p-2 bg-green-200 rounded-full text-center text-green-500 font-semibold">
                        Open - {date} day ago
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-3">
                <div className="w-full">
                    <h2 className="text-[15px] font-semibold">Offer your price for this job</h2>
                    <InputBusiness
                        id="offer"
                        placeholder="Your offer"
                        type="text"
                    />
                </div>
                <div className="w-full">
                    <h2 className="text-[15px] font-semibold">Your Mail</h2>
                    <InputBusiness
                        id="email"
                        placeholder="Mail"
                        type="Email"
                    />
                </div>
                <div className="w-full">
                    <button className="bg-pink-cus-bt text-white font-semibold text-2xl w-full py-4">
                        Offer for Job
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailBusiness