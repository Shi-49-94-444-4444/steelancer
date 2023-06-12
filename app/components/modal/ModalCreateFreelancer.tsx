import useCreateModal from '@/hooks/useCreateModal';
import CustomModal from './Modal';
import Input from './Input';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";

const ModalCreate = () => {
    const createModal = useCreateModal();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            src: '',
            name: '',
            title: '',
            address: '',
            price: '',
            description: '',
            skill: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    };

    return (
        <CustomModal
            isOpen={createModal.isOpen}
            onClose={createModal.onClose}
            title="Create Item"
            width={"w-2/4"}
            height={"h-3/4"}
        >
            <form className="w-full px-10" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="src"
                    label="ImageURL"
                    placeholder="Enter imageURL"
                    register={register}
                    errors={errors}
                />
                <Input
                    id="name"
                    label="Full Name"
                    placeholder="Enter fullname"
                    register={register}
                    errors={errors}
                />
                <Input
                    id="title"
                    label="Title"
                    placeholder="Enter title"
                    register={register}
                    errors={errors}
                />
                <Input
                    id="address"
                    label="Address"
                    placeholder="Enter address"
                    register={register}
                    errors={errors}
                />
                <Input
                    id="price"
                    label="Price"
                    placeholder="Enter price"
                    register={register}
                    errors={errors}
                />
                <label htmlFor="description" className='block text-xl font-semibold text-left'>Description</label>
                <textarea
                    rows={5}
                    className="
                        w-full 
                        border-[1px] 
                        border-pink-cus-tx 
                        rounded-[5px]
                        hover:border-pink-cus-bt 
                        text-xl
                    "
                    {...register("description")}
                ></textarea>
                <Input
                    id="skill"
                    label="Skill"
                    placeholder="Enter skill"
                    register={register}
                    errors={errors}
                />
                <button type="submit" className='mt-4 text-pink-cus-tx hover:underline'>Create</button>
            </form>
        </CustomModal>
    );
};

export default ModalCreate;
