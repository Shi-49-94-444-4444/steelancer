'use client'

interface JobFormatProps {
    title: string;
    label: string;
    jobName: React.ReactElement;
    jobDescription: React.ReactElement;
    jobSelect: React.ReactElement;
    jobPayment: React.ReactElement;
    jobPrice: React.ReactElement | null;
    jobInformation: React.ReactElement | null;
}

const JobFormat: React.FC<JobFormatProps> = ({
    title,
    label,
    jobName,
    jobDescription,
    jobPayment,
    jobSelect,
    jobPrice,
    jobInformation
}) => {
    return (
        <div className="
                flex 
                flex-col 
                space-y-8 
                text-2x
            "
        >
            <section className="flex flex-col space-y-5">
                <h1 className="text-4xl font-medium">{title}</h1>
                <h2>{label}</h2>
            </section>
            <form className="
                    flex 
                    flex-col 
                    bg-white
                    w-auto 
                    h-auto 
                    px-12 
                    py-5 
                    shadow-lg 
                    gap-8 
                    border-[1px] 
                    border-pink-cus-tx 
                    rounded-[5px]
                "
            >
                <div className="space-y-3">
                    {jobName}
                </div>
                <div className="space-y-3">
                    {jobDescription}
                </div>
                <div className="space-y-3">
                    {jobSelect}
                </div>
                <div className="space-y-3">
                    {jobPayment}
                </div>
                {jobPrice}
                {jobInformation}
            </form>
        </div>
    )
}

export default JobFormat