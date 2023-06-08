'use client'

import { Container, FormatCusMd } from "@/app/components"
import { optionSkill } from "@/app/constants"
import Select from "react-select"
import { CSSObject } from 'styled-components';
import { LuFolderClock } from 'react-icons/lu'
import { RiFolderShield2Line } from 'react-icons/ri'
import { useState } from "react";

const Post_job = () => {
    const [paymentType, setPaymentType] = useState(null);

    const [formData, setFormData] = useState({
        projectName: '',
        projectDescription: '',
        projectSkills: [],
        paymentType: '',
        budget: '',
    });

    const handlePaymentTypeChange = (type: any) => {
        setPaymentType(type);
    };

    // Function to handle form input changes
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleProjectSkillsChange = (selectedOptions: any) => {
        const skills = selectedOptions ? selectedOptions.map((option: any) => option.label) : [];
        setFormData((prevData) => ({
            ...prevData,
            projectSkills: skills,
        }));
    };

    const handleBudgetChange = (selectedOption: any) => {
        const budget = selectedOption ? selectedOption.label : '';
        setFormData((prevData) => ({
            ...prevData,
            budget: budget,
        }));
    };

    return (
        <FormatCusMd>
            <Container>
                <div className="flex flex-col space-y-8 text-2xl">
                    <section className="flex flex-col space-y-5">
                        <h1 className="text-4xl font-medium">Let us know what you need to get done</h1>
                        <h2>Contact skilled freelancers in minutes. View profiles, reviews, portfolio and chat with them. Only pay freelancers when you are 100% satisfied with their work.</h2>
                    </section>
                    <form className="flex flex-col bg-white w-auto h-auto px-12 py-5 shadow-lg gap-8 border-[1px] border-pink-cus-tx rounded-[5px]">
                        <div className="space-y-3">
                            <label>Choose a name for your project</label>
                            <textarea
                                rows={1}
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleInputChange}
                                className="w-full border-[1px] border-pink-cus-tx rounded-[5px]"
                                placeholder="..."
                            ></textarea>
                        </div>
                        <div className="space-y-3">
                            <label>Tell us more about your project</label>
                            <textarea
                                rows={5}
                                name="projectDescription"
                                value={formData.projectDescription}
                                onChange={handleInputChange}
                                className="w-full border-[1px] border-pink-cus-tx rounded-[5px]"
                                placeholder="..."
                            ></textarea>
                        </div>
                        <div className="space-y-3">
                            <label>What skills are needed?</label>
                            <h2 className="text-xl font-thin">
                                Fill in up to 5 skills to best describe your project. Freelancers will use these skills to find projects that interest them and have the most experience.
                            </h2>
                            <Select
                                name="projectSkills"
                                value={formData.projectSkills}
                                onChange={handleProjectSkillsChange}
                                placeholder="..."
                                options={optionSkill as any}
                                className="w-full border-[1px] border-pink-cus-tx rounded-[5px]"
                                isClearable
                                isMulti
                            />
                        </div>
                        <div className="space-y-3">
                            <label>How do you want to pay?</label>
                            <div className="flex flex-row justify-between gap-3">
                                <div
                                    className={`flex flex-row w-1/2 border-[1px] ${formData.paymentType === 'hour' ? 'border-pink-cus-tx' : 'border-black'
                                        } gap-8 p-20 items-center rounded-15 ${formData.paymentType === 'hour' ? 'selected' : ''
                                        } ${formData.paymentType ? 'cursor-pointer' : ''}`}
                                    onClick={() => {
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            paymentType: 'hour',
                                        }));
                                    }}
                                >
                                    <div>
                                        <LuFolderClock size={100} />
                                    </div>
                                    <section className="space-y-2">
                                        <h1 className="text-xl font-semibold">Pay by the hour</h1>
                                        <h2 className="text-sm">
                                            Rent at hourly rates and pay for billed hours. Best suited for extended jobs.
                                        </h2>
                                    </section>
                                </div>
                                <div
                                    className={`flex flex-row w-1/2 border-[1px] ${formData.paymentType === 'fixed' ? 'border-pink-cus-tx' : 'border-black'
                                        } gap-8 px-20 py-10 items-center rounded-15 ${formData.paymentType === 'fixed' ? 'selected' : ''
                                        } ${formData.paymentType ? 'cursor-pointer' : ''}`}
                                    onClick={() => {
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            paymentType: 'fixed',
                                        }));
                                    }}
                                >
                                    <div>
                                        <RiFolderShield2Line size={100} />
                                    </div>
                                    <section className="space-y-2">
                                        <h1 className="text-xl font-semibold">Pay a fixed price</h1>
                                        <h2 className="text-sm">
                                            Negotiate the price and disburse payment when the job is completed. Best suited for one-time jobs.
                                        </h2>
                                    </section>
                                </div>
                            </div>
                        </div>
                        {formData.paymentType && (
                            <div className="space-y-3">
                                <label>What is your expected budget?</label>
                                {formData.paymentType === 'hour' && (
                                    <Select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleBudgetChange}
                                        placeholder="..."
                                        options={optionSkill as any}
                                        className="w-full border-[1px] border-pink-cus-tx rounded-[5px]"
                                        isClearable
                                    />
                                )}
                                {formData.paymentType === 'fixed' && (
                                    <input
                                        type="text"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        placeholder="Enter money"
                                        className="w-full border-[1px] border-pink-cus-tx rounded-[5px] p-2"
                                    />
                                )}
                            </div>
                        )}
                        {formData.paymentType && (
                            <div className="space-y-3">
                                <label>Is this information accurate?</label>
                                <div className="grid grid-cols-4 border-[1px] border-pink-cus-tx rounded-[5px] p-8 gap-8">
                                    <div className="col-span-1 border-r-[1px] border-pink-cus-tx">
                                        <div className="flex flex-col items-center">
                                            <div>
                                                {formData.paymentType === 'hour' ? <LuFolderClock size={75} /> : <RiFolderShield2Line size={75} />}
                                            </div>
                                            <h2 className="text-xl">{formData.paymentType === 'hour' ? 'Pay by the hour' : 'Pay a fixed price'}</h2>
                                            <h2 className="text-[15px]">{formData.budget}</h2>
                                        </div>
                                    </div>
                                    <div className="col-span-3">
                                        <div className="flex flex-col items-start">
                                            <h2 className="text-xl">{formData.projectName}</h2>
                                            <p className="text-xl line-clamp-3">{formData.projectDescription}</p>
                                            <div className="text-xl">{formData.projectSkills.join(', ')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </Container>
        </FormatCusMd>
    )
}

export default Post_job