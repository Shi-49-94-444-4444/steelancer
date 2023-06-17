'use client'

import { Container, FormatCusMd, OfferBusiness } from "@/app/components";
import { freelancerList } from "@/app/constants";
import { MyContext } from "@/app/layout";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import JobService from "../services/jobs";
import FreelancerService from '../services/freelancerProfiles';
import JobResponse from "@/models/jobResponse";
import FreelancerResponse from "@/models/freelancerResponse";

const Management_job = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { currentUser, currentBusiness } = useContext(MyContext);
    const [jobs, setJobs] = useState<JobResponse[]>([]);

    useEffect(() => {
        if (currentUser.Role !== "Business" || !currentUser.IsPremium) {
            router.push("/");
        }

        JobService.getJobByBusiness(currentBusiness.BusinessName)
            .then((jobsResponse: any) => {
                console.log(jobsResponse.value);
                setJobs(jobsResponse.value);
            })
    }, [currentUser])

    interface JobDisplayProps {
        job: JobResponse
    }

    const JobDisplay: React.FC<JobDisplayProps> = ({
        job
    }) => {
        const [projectStatus, setProjectStatus] = useState("Open");
        const [savedStatus, setSavedStatus] = useState("");
        const [freelancers, setFreelancer] = useState<FreelancerResponse[]>([]);

        useEffect(() => {
            FreelancerService.getByJob(job.Id)
                .then(freelancersResponse => {
                    console.log(freelancersResponse)
                    setFreelancer(freelancersResponse)
                })
                .catch(err => {
                    console.log(err);
                })
        }, [])

        const handleStatusChange = (status: string) => {
            setProjectStatus(status);
        };

        const handleSaveStatus = () => {
            setSavedStatus(projectStatus);
        };

        return (
            <>
                <div className="flex flex-col p-6">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-xl font-medium">{job.Name}</h2>
                        <div className="flex flex-row">
                            <button
                                className={`flex items-center justify-center text-[15px] px-4 border border-pink-cus-tx font-semibold ${projectStatus === "Open" ? "bg-green-200 text-green-500" : ""
                                    }`}
                                onClick={() => handleStatusChange("Open")}
                                style={{ width: "calc(100% / 3)" }}
                            >
                                {t("Open")}
                            </button>
                            <button
                                className={`flex items-center justify-center text-[15px] px-4 border border-pink-cus-tx font-semibold ${projectStatus === "Complete" ? "bg-gray-400 text-blue-cus" : ""
                                    }`}
                                onClick={() => handleStatusChange("Complete")}
                                style={{ width: "calc(100% / 3)" }}
                            >
                                {("Project complete")}
                            </button>
                            <button
                                className={`flex items-center justify-center text-[15px] px-4 border border-pink-cus-tx font-semibold ${projectStatus === "Close" ? "bg-gray-cus text-blue-cus" : ""
                                    }`}
                                onClick={() => handleStatusChange("Close")}
                                style={{ width: "calc(100% / 3)" }}
                            >
                                {("Project Close")}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <h2>
                            {("Posted on")}
                            <span> {job.CreatedDate}</span>
                        </h2>
                        <h2>
                            {t("Expiring on")}
                            <span> {job.ApplyExpireDate}</span>
                        </h2>
                    </div>
                    {projectStatus === "Open" && (
                        <div className="m-8">
                            {freelancerList
                                .filter(item => item.offer) // Filter out items without an offer
                                .slice(0, 100) // Limit the list to the first 100 items
                                .map((item) => (
                                    <>
                                        <OfferBusiness
                                            key={item.id}
                                            src={item.src}
                                            title={item.title}
                                            offer={item.offer}
                                            showButton={true}
                                        />
                                    </>
                                ))}
                        </div>
                    )}
                </div>
                <button onClick={handleSaveStatus} className="text-right text-pink-cus-tx hover:underline">{t("Save")}</button>
            </>
        )

        // if (projectStatus === "Open") {
        //     return
        // } else if (projectStatus === "Complete") {
        //     return <div className="m-8">
        //         {freelancerList
        //             .filter(item => item.offer) // Filter out items without an offer
        //             .slice(0, 100) // Limit the list to the first 100 items
        //             .map((item) => (
        //                 <>
        //                     <OfferBusiness
        //                         key={item.id}
        //                         src={item.src}
        //                         title={item.title}
        //                         offer={item.offer}
        //                     />
        //                 </>
        //             ))}
        //     </div>;
        // } else if (projectStatus === "Close") {
        //     return;
        // }
    };

    return (
        <FormatCusMd>
            <Container>
                <h1 className="text-3xl font-semibold mb-10">{t("Manage Jobs")}</h1>
                <div className="flex flex-col bg-white shadow-lg border-[1px] p-4 border-pink-cus-tx">
                    <h2 className="text-2xl font-medium py-2">{t("Project")}</h2>
                    <div className="border-b-2"></div>
                    {jobs.map(j => <JobDisplay key={j.Id} job={j} />)}
                </div>
            </Container>
        </FormatCusMd>
    );
};

export default Management_job;


