'use client'

import FormatCusMd from "@/app/components/FormatCusMd"
import Layout from "@/app/layout"
import Container from "@/app/components/Container"
import { RiLockPasswordFill } from "react-icons/ri"
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoMail } from 'react-icons/io5'
import Input from "@/app/components/Input"
import FormatForm from "@/app/components/FormatForm"

const bodyContent = (
  <form className="
        px-28 
        space-y-5 
        pt-10
    "
  >
    <Input
      icon={IoMail}
      id="mail"
      placeholder="Mail"
      type="Email"
    />
    <Input
      icon={RiLockPasswordFill}
      id="password"
      placeholder="Password"
      type="password"
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

const Login = () => {
  return (
    <Layout>
      <FormatCusMd>
        <Container>
          <FormatForm
            title="Login"
            body={bodyContent}
            footer={footerContent}
          />
        </Container>
      </FormatCusMd>
    </Layout>
  )
}

export default Login