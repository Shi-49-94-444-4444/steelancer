import { ChangeEvent } from 'react';

interface JobInputProps {
  label?: string;
  number: number;
  name?: string;
  value: string;
  onChange: (value: string) => void;
}

const JobInput: React.FC<JobInputProps> = ({
  label,
  number,
  name,
  value,
  onChange,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      {label && <label>{label}</label>}
      <textarea
        rows={number}
        name={name}
        value={value}
        onChange={handleInputChange}
        className="
            w-full 
            border-[1px] 
            border-pink-cus-tx 
            rounded-[5px]
          "
        placeholder="..."
      ></textarea>
    </>
  );
};

export default JobInput;
