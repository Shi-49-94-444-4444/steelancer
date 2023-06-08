'use client'

import { useState } from 'react';
import Select from 'react-select';
import {
    Container,
    FormatCusMd,
    JobFormat,
    JobInformation,
    JobInput,
    JobPayment,
    JobSelect,
} from '@/app/components';
import { optionSkill } from '@/app/constants';

const Post_job = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        projectDescription: '',
        projectSkills: [],
        paymentType: '',
        budget: '',
    });

    const handlePaymentTypeChange = (paymentType: string) => {
        setFormData((prevData) => ({
            ...prevData,
            paymentType,
            budget: '',
        }));
    };

    const handleInputChange = (name: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleProjectSkillsChange = (skills: string[]) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setFormData((prevData: any) => ({
            ...prevData,
            projectSkills: skills,
        }));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleBudgetChange = (selectedOption: any) => {
        const budget = selectedOption ? selectedOption.label : '';
        setFormData((prevData) => ({
            ...prevData,
            budget: budget,
        }));
    };

    const jobNameContent = (
        <JobInput
            label="Choose a name for your project"
            number={1}
            name="projectName"
            value={formData.projectName}
            onChange={(value) => handleInputChange('projectName', value)}
        />
    );

    const JobDescriptionContent = (
        <JobInput
            label="Tell us more about your project"
            number={5}
            name="projectDescription"
            value={formData.projectDescription}
            onChange={(value) => handleInputChange('projectDescription', value)}
        />
    );

    const JobSelectContent = (
        <JobSelect
            title="What skills are needed?"
            description="Fill in up to 5 skills to best describe your project. Freelancers will use these skills to find projects that interest them and have the most experience."
            name="projectSkills"
            value={formData.projectSkills}
            onChange={handleProjectSkillsChange}
        />
    );

    const JobPaymentContent = (
        <JobPayment
            title="How do you want to pay?"
            paymentType={formData.paymentType}
            onChange={handlePaymentTypeChange}
        />
    );

    const JobPriceContent = formData.paymentType && (
        <div className="space-y-3">
            <label htmlFor="budget">What is your expected budget?</label>
            {formData.paymentType === 'hour' ? (
                <Select
                    name="budget"
                    value={formData.budget}
                    onChange={handleBudgetChange}
                    placeholder="..."
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    options={optionSkill as any}
                    className="w-full border-[1px] border-pink-cus-tx rounded-[5px]"
                    isClearable
                />
            ) : (
                <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    placeholder="Enter money"
                    className="w-full border-[1px] border-pink-cus-tx rounded-[5px] p-2"
                />
            )}
        </div>
    );

    const JobInformationContent = formData.paymentType && (
        <>
            <div className="space-y-3">
                <JobInformation
                    title="Is this information accurate?"
                    paymentType={formData.paymentType}
                    budget={formData.budget}
                    projectName={formData.projectName}
                    projectDescription={formData.projectDescription}
                    projectSkills={formData.projectSkills}
                />
            </div>
            <div>
                <button className="
                        bg-pink-cus-bt 
                        text-white 
                        p-4 
                        rounded-15
                    "
                >
                    YES, Post the project!
                </button>
            </div>
        </>
    );

    return (
        <FormatCusMd>
            <Container>
                <JobFormat
                    title="Let us know what you need to get done"
                    label="Contact skilled freelancers in minutes. View profiles, reviews, portfolio and chat with them. Only pay freelancers when you are 100% satisfied with their work."
                    jobName={jobNameContent}
                    jobDescription={JobDescriptionContent}
                    jobSelect={JobSelectContent}
                    jobPayment={JobPaymentContent}
                    jobPrice={JobPriceContent || null}
                    jobInformation={JobInformationContent || null}
                />
            </Container>
        </FormatCusMd>
    );
};

export default Post_job;
