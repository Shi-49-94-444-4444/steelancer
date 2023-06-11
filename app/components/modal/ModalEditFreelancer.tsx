'use client'

import useEditModal from '@/hooks/useEditModal';
import CustomModal from './Modal';
import { useState } from 'react';
import Input from './Input';

interface Skill {
    title: string;
}

interface Product {
    src: string;
    title: string;
}

interface ModalEditData {
    src?: string;
    title?: string,
    lable?: string,
    city?: string,
    country?: string
    price?: number
    description?: string,
    language?: string,
    prior?: string,
    skill?: Skill[],
    product?: Product[]
}

interface ModalEditProps {
    onSave: (value: ModalEditData) => void;
    initialData: ModalEditData
}

const ModalEdit: React.FC<ModalEditProps> = ({
    onSave,
    initialData
}) => {
    const editModal = useEditModal()

    const [formData, setFormData] = useState(initialData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "skill") {
            const skillArr = value.split(",").map((item) => ({ title: item.trim() }));
            setFormData((prevData) => ({
                ...prevData,
                skill: skillArr
            }));
        } else if (name.startsWith("product")) {
            const index = parseInt(name.split("-")[1]);
            const updatedProduct = [...formData.product || []];
            updatedProduct[index] = {
                ...updatedProduct[index],
                title: value
            };
            setFormData((prevData) => ({
                ...prevData,
                product: updatedProduct
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };


    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        onSave(formData);
    };

    return (
        <CustomModal
            isOpen={editModal.isOpen}
            onClose={editModal.onClose}
            title="Edit Profile"
            width={"w-2/4"}
            height={"h-3/4"}
        >
            <form className="w-full px-10">
                <Input
                    label="Image"
                    value={formData.src}
                    onChange={handleChange}
                />
                <Input
                    label="Name"
                    value={formData.title}
                    onChange={handleChange}
                />
                <Input
                    label="Lable"
                    value={formData.lable}
                    onChange={handleChange}
                />
                <Input
                    label="City"
                    value={formData.city}
                    onChange={handleChange}
                />
                <Input
                    label="Country"
                    value={formData.country}
                    onChange={handleChange}
                />
                <Input
                    label="Price"
                    value={formData.price}
                    onChange={handleChange}
                />
                <label htmlFor="description" className='block text-xl font-semibold text-left'>Description</label>
                <textarea
                    rows={5}
                    value={formData.description}
                    onChange={handleTextareaChange}
                    className="
                        w-full 
                        border-[1px] 
                        border-pink-cus-tx 
                        rounded-[5px]
                        hover:border-pink-cus-bt 
                        text-xl
                    "
                ></textarea>
                <Input
                    label="Language"
                    value={formData.language}
                    onChange={handleChange}
                />
                <label htmlFor="prior" className='block text-xl font-semibold text-left'>Prior experience</label>
                <textarea
                    rows={2}
                    value={formData.prior}
                    onChange={handleTextareaChange}
                    className="
                        w-full 
                        border-[1px] 
                        border-pink-cus-tx 
                        rounded-[5px]
                        hover:border-pink-cus-bt 
                        text-xl
                    "
                ></textarea>
                <Input
                    label="Skill"
                    value={formData.skill ? formData.skill.map(item => item.title).join(", ") : ""}
                    onChange={handleChange}
                />
                {formData.product &&
                    formData.product.map((item, index) => (
                        <div key={index}>
                            <Input
                                label={`Product ${index + 1} - Title`}
                                name={`product-${index}`}
                                value={item.title}
                                onChange={handleChange}
                            />
                            <Input
                                label={`Product ${index + 1} - Src`}
                                name={`product-${index}-src`}
                                value={item.src}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                <button onClick={handleSubmit} className='mt-4 ml-3 text-pink-cus-tx hover:underline'>Save</button>
            </form>
        </CustomModal>
    );
}

export default ModalEdit
