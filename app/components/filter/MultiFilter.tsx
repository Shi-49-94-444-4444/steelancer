'use client'

import Select from 'react-select';

interface Option {
    value: string;
    label: string;
}

interface MultiFilterProps {
    options: Option[];
    title: string;
}

const MultiFilter: React.FC<MultiFilterProps> = ({ title, options }) => {
    return (
        <div className="w-full h-auto px-3 py-3 gap-5 border-[1px] rounded-15 shadow-lg bg-white">
            <h1 className="font-semibold my-3">{title}</h1>
            <Select
                options={options}
                className="my-3"
                isClearable
                isMulti
                filterOption={(option, inputValue) =>
                    option.label.toLowerCase().includes(inputValue.toLowerCase())
                }
            />
        </div>
    );
};

export default MultiFilter;
