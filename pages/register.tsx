'use client'

import { RiLockPasswordFill } from "react-icons/ri"
import { IoMail } from "react-icons/io5"
import { FaUserEdit } from "react-icons/fa"
import Select from "react-select"
import {
  Input,
  FormatForm,
  FormatCusMd,
  Container
} from "@/app/components"
import {
  FieldValues,
  SubmitHandler,
  useForm
} from "react-hook-form";
import { useState } from "react"
import axios from "axios"

const Register = () => {

  const options = [
    { value: "Click Choose Role", label: "Click Choose Role", isDisabled: true },
    { value: "Business", label: "Business" },
    { value: "Freelancer", label: "Freelancer" },
  ];

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:'',
      isFreelancer:false
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data)
    .then(() => {
      // toast.success('Registered!');
    })
    .catch((error) => {
      // toast.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }


  const bodyContent = (
    <form className="px-28 space-y-5 pt-10" onSubmit={handleSubmit(onSubmit)}>
      <Input
        icon={FaUserEdit}
        id="fullName"
        placeholder="Full Name"
        disabled={isLoading}
        register={register}
        required
      />
      <Input
        icon={IoMail}
        id="mail"
        placeholder="Mail"
        type="Email"
        disabled={isLoading}
        register={register}
        required
      />
      <Input
        icon={RiLockPasswordFill}
        id="password"
        placeholder="Password"
        type="password"
        disabled={isLoading}
        register={register}
        required
      />
      <Input
        icon={RiLockPasswordFill}
        id="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        disabled={isLoading}
        register={register}
        required
      />
      <Select
        options={options}
        className="text-xl"
        isClearable
        onChange={(selectedOption) => {
          const value = selectedOption?.value === "Freelancer";
          register("isFreelancer").onChange({ target: { value, type: "checkbox" } });
        }}
      />
      <button
        onClick={() => { }}
        className="
          w-full 
          bg-pink-cus-bt 
          rounded-50 
          h-16 
          text-xl 
          font-semibold 
          text-white
        "
      >
        SIGN UP
      </button>
    </form>
  )

  const footerContent = (
    <div className="px-28">
      <h1>
        Already have an account?
        <span
          onClick={() => { }}
          className="
            cursor-pointer 
            text-pink-cus-tx 
            hover:underline
          "
        > Log in
        </span>
      </h1>
    </div>
  )

  return (
    <FormatCusMd>
      <Container>
        <FormatForm
          title="Register"
          body={bodyContent}
          footer={footerContent}
        />
      </Container >
    </FormatCusMd >
  )
}

export default Register