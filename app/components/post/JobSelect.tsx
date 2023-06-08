'use client'

import { useState } from 'react';
import Select from 'react-select';

interface JobSelectProps {
    title?: string;
    description?: string;
    name?: string;
    value: string[];
    onChange: (skills: string[]) => void;
}

const JobSelect: React.FC<JobSelectProps> = ({ 
    title, 
    description, 
    name, 
    onChange 
}) => {
    const [selectedSkills, setSelectedSkills] = useState<{ value: string; label: string }[]>([]);

    const handleSkillChange = (selectedOptions: any) => {
        setSelectedSkills(selectedOptions);
        const skills = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
        onChange(skills);
    };

    return (
        <>
            <label>{title}</label>
            <h2 className="text-xl font-thin">
                {description}
            </h2>
            <Select
                name={name}
                value={selectedSkills}
                onChange={handleSkillChange}
                placeholder="..."
                options={[
                    { value: 'skill1', label: 'Skill 1' },
                    { value: 'skill2', label: 'Skill 2' },
                    { value: 'skill3', label: 'Skill 3' },
                    { value: 'skill4', label: 'Skill 4' },
                    { value: 'skill5', label: 'Skill 5' },
                ]}
                className="
                    w-full 
                    border-[1px] 
                    border-pink-cus-tx 
                    rounded-[5px]
                "
                isClearable
                isMulti
            />
        </>
    );
};

export default JobSelect;
