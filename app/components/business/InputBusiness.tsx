'use-client'

// import {
//     FieldErrors,
//     FieldValues,
//     UseFormRegister
// } from "react-hook-form";

interface InputBusinessProps {
    id: string;
    placeholder: string;
    type?: string;
    // disabled?: boolean;
    // formatPrice?: boolean;
    // required?: boolean;
    // register: UseFormRegister<FieldValues>,
    // errors: FieldErrors,
}

const InputBusiness: React.FC<InputBusinessProps> = ({
    id,
    placeholder,
    type,
    // register,
    // required,
    // disabled,
    // errors
}) => {
    return (
        <div>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                // {...register(id, { required })}
                // disabled={disabled}
                className="
                w-full
                h-10 
                border-2 
                border-gray-400 
                ${errors[id] ? 'border-pink-cus-bt' : 'border-neutral-300'}
                ${errors[id] ? 'focus:border-pink-cus-bt' : 'focus:border-black'}
                "
            // {...register(id)}
            />
        </div>
    )
}

export default InputBusiness