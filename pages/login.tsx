'use client'

import { RiLockPasswordFill } from "react-icons/ri"
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoMail } from 'react-icons/io5'
import AuthService from '../services/auth'
import { useRouter } from "next/router"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import {
  Input,
  FormatForm,
  FormatCusMd,
  Container
} from "@/app/components"

const Login = () => {
  const router = useRouter();
  
  const BodyContent: React.FC = () => {

    const {
      register,
      handleSubmit,
      formState: {
        errors,
      },
    } = useForm<FieldValues>({
      defaultValues: {
        email: '',
        password: '',
      },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      AuthService
        .authenticate(data)
        .then(response => {
          localStorage.setItem("auth", response.token);
          router.push("/")
        })
        .catch(error => {
          console.log("Login error: ", error);
        })
    };

    return (
      <form className="
          px-28 
          space-y-5 
          pt-10
      "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          icon={IoMail}
          id="email"
          placeholder="Mail"
          type="Email"
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
        <h1
          onClick={() => { }}
          className="
            text-pink-cus-tx 
            cursor-pointer
        "
        >
          Forgot password ?
        </h1>
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
          Forgot password ?
        </button>
      </form>
    )
  }

  const footerContent = (
    <div>
      <h1 className="
          text-center 
          text-pink-cus-bt
        "
      >
        Or
      </h1>
      <div className="
          flex 
          flex-row 
          justify-center
        "
      >
        <FaFacebook size={80} className="text-blue-500 cursor-pointer mr-20" />
        <FcGoogle size={80} className="cursor-pointer" />
      </div>
    </div>
  )

  return (
    <FormatCusMd>
      <Container>
        <FormatForm
          title="Login"
          body={<BodyContent />}
          footer={footerContent}
        />
      </Container>
    </FormatCusMd>
  )
}

export default Login