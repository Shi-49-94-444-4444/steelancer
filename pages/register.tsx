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
import AuthService from '../services/auth'
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "react-toastify"

const Register = () => {
  const router = useRouter();

  const options = [
    { value: "Click Choose Role", label: "Click Choose Role", isDisabled: true },
    { value: "Business", label: "Business" },
    { value: "Freelancer", label: "Freelancer" },
  ];

  const [isFreelancer, setIsFreelancer] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isFreelancer: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    data.isFreelancer = isFreelancer === "Freelancer" ? true : false
    console.log(data)

    AuthService.register(data)
      .then(() => {
        toast.success('Registered!');
      })
      .catch((error) => {
        console.log(error.response.data)
        toast.error(error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const bodyContent = (
    <form className="px-28 space-y-5 pt-10" onSubmit={handleSubmit(onSubmit)}>
      <Input
        icon={FaUserEdit}
        id="firstName"
        placeholder="First Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        icon={FaUserEdit}
        id="lastName"
        placeholder="Last Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        icon={IoMail}
        id="email"
        placeholder="Mail"
        type="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        icon={RiLockPasswordFill}
        id="password"
        placeholder="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        icon={RiLockPasswordFill}
        id="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Select
        options={options}
        className="text-xl"
        isClearable
        onChange={(input) => {
          setIsFreelancer(input?.value)
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
          onClick={() => router.push("./login")}
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