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
import { useForm, UseFormRegister, FieldErrors, FieldValue, SubmitHandler } from "react-hook-form";

const options = [
  { value: "Click Choose Role", label: "Click Choose Role", isDisabled: true },
  { value: "Business", label: "Business" },
  { value: "Freelancer", label: "Freelancer" },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  // isFreelancer: string;
}

const BodyContent: React.FC = () => {
  const [isFreelancer, setIsFreelancer] = useState<string | undefined>("");

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      // isFreelancer,
    } = data;
    const isFreelancerBool = isFreelancer === "Freelancer" ? true : false;

    AuthService.register({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      isFreelancer: isFreelancerBool,
    })
      .then((response) => {
        router.push("/login");
      })
      .catch((error) => {
        console.log("Register error: ", error);
      });
  };

  return (
    <form className="px-28 space-y-5 pt-10" onSubmit={handleSubmit(onSubmit)}>
      <Input
        icon={FaUserEdit}
        id="firstName"
        placeholder="First Name"
        register={register}
        errors={errors}
      />
      <Input
        icon={FaUserEdit}
        id="lastName"
        placeholder="Last Name"
        register={register}
        errors={errors}
      />
      <Input
        icon={IoMail}
        id="email"
        placeholder="Mail"
        type="email"
        register={register}
        errors={errors}
      />
      <Input
        icon={RiLockPasswordFill}
        id="password"
        placeholder="Password"
        type="password"
        register={register}
        errors={errors}
      />
      <Input
        icon={RiLockPasswordFill}
        id="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        register={register}
        errors={errors}
      />
      <Select
        options={options}
        className="text-xl"
        isClearable
        onChange={input => setIsFreelancer(input?.value)}
        // errors={errors}
        name="isFreelancer"
      />
      <button
        type="submit"
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
  );
};


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

const Register = () => {
  return (
    <FormatCusMd>
      <Container>
        <FormatForm
          title="Register"
          body={<BodyContent />}
          footer={footerContent}
        />
      </Container >
    </FormatCusMd >
  )
}

export default Register