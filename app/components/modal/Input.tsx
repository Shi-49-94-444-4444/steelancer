'use-client'

// import {
//     FieldErrors,
//     FieldValues,
//     UseFormRegister
// } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps {
    id: string;
    placeholder: string;
    type?: string;
    // disabled?: boolean;
    // formatPrice?: boolean;
    // required?: boolean;
    // register: UseFormRegister<FieldValues>,
    // errors: FieldErrors,
    icon: IconType
}

const Input: React.FC<InputProps> = ({
    id,
    placeholder,
    type,
    icon: Icon
}) => {
    return (
        <div className="
                relative 
                flex 
                items-center
            "
        >
            <Icon className="
                h-6 
                w-6 
                absolute 
                left-3
                "
            />
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="
                pl-14 
                pr-6 
                py-2 
                w-full
                h-14 
                rounded-15
                border-2 
                border-gray-400 
                text-xl
                "
            />
        </div>
    )
}

export default Input