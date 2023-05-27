'use client'

import FormatCusMd from "@/app/components/FormatCusMd"
import Layout from "@/app/layout"
import Container from "@/app/components/Container"
import { RiLockPasswordFill } from "react-icons/ri"
import { IoMail } from "react-icons/io5"
import { FaUserEdit } from "react-icons/fa"
import Select from "react-select"
import Input from "@/app/components/Input"
import FormatForm from "@/app/components/FormatForm"

const options = [
  { value: "Click Choose Role", label: "Click Choose Role", isDisabled: true },
  { value: "Business", label: "Business" },
  { value: "Freelancer", label: "Freelancer" },
];

const bodyContent = (
  <form className="px-28 space-y-5 pt-10">
    <Input
      icon={FaUserEdit}
      id="fullName"
      placeholder="Full Name"
    />
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
    <Input
      icon={RiLockPasswordFill}
      id="confirmPassword"
      placeholder="Confirm Password"
      type="password"
    />
    <Select
      options={options}
      className="text-xl"
      isClearable
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

const Register = () => {
  return (
    <Layout>
      <FormatCusMd>
        <Container>
          <FormatForm
            title="Register"
            body={bodyContent}
            footer={footerContent}
          />
        </Container >
      </FormatCusMd >
    </Layout >
  )
}

export default Register