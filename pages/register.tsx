'use client'

import FormatCusMd from "@/app/components/FormatCusMd"
import Layout from "@/app/layout"
import Container from "@/app/components/Container"
import { RiLockPasswordFill } from "react-icons/ri"
import { IoMail } from 'react-icons/io5'
import { useForm } from "react-hook-form"
import AuthService from '../services/auth'
import { useRouter } from "next/router"

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    let firstName = data.firstName;
    let lastName = data.lastName;
    let email = data.email;
    let password = data.password;
    let confirmPassword = data.confirmPassword;
    let isFreelancer = data.isFreelancer === "role1" ? true : false;

    AuthService
      .register({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        isFreelancer
      })
      .then(response => {
        router.push("/login");
      })
      .catch(error => {
        console.log("Register error: ", error);
      })
  };

  return (
    <Layout>
      <FormatCusMd>
        <Container>
          <div className="px-10">
            <div className="
                px-20 
                h-cus-2 
                bg-white 
                rounded-50
              "
            >
              <div className="
                  flex 
                  flex-col 
                  space-y-5
                "
              >
                <div className="
                    flex 
                    flex-row 
                    justify-center
                  "
                >
                  <h1 className="
                      font-thin 
                      font-mono 
                      text-pink-500 
                      text-9xl
                    "
                  >
                    Register
                  </h1>
                </div>
                <form className="px-28 space-y-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="
                      grid 
                      grid-cols-3 
                      gap-4
                    "
                  >
                    <div className="col-span-1">
                      <input
                        placeholder="First Name"
                        className="
                          px-3 
                          py-2 
                          w-full 
                          h-14 
                          rounded-15 
                          border-2 
                          border-gray-400 
                          text-xl
                        "
                        {...register("firstName")}
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        placeholder="Last Name"
                        className="
                          px-3 
                          py-2 
                          w-full 
                          h-14 
                          rounded-15 
                          border-2 
                          border-gray-400 
                          text-xl
                        "
                        {...register("lastName")}
                      />
                    </div>
                  </div>
                  <div className="
                      relative 
                      flex 
                      items-center
                    "
                  >
                    <IoMail className="h-6 w-6 absolute left-3" />
                    <input
                      type="email"
                      placeholder="Mail"
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
                      {...register("email")}
                    />
                  </div>
                  <div className="
                      relative 
                      flex 
                      items-center
                    "
                  >
                    <RiLockPasswordFill className="h-6 w-6 absolute left-3" />
                    <input
                      type="password"
                      placeholder="Password"
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
                      {...register("password")}
                    />
                  </div>
                  <div className="
                      relative 
                      flex 
                      items-center
                    "
                  >
                    <RiLockPasswordFill className="h-6 w-6 absolute left-3" />
                    <input
                      type="password"
                      placeholder="Confirm Password"
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
                      {...register("confirmPassword")}
                    />
                  </div>
                  <select title="changeLater" className="
                      px-3 
                      py-3 
                      w-full 
                      h-14 
                      rounded-15 
                      border-2 
                      border-gray-400 
                      text-xl
                    "
                    {...register("isFreelancer")}
                  >
                    <option value="" selected disabled>Click Choose Role</option>
                    <option value="role1">Business</option>
                    <option value="role2">Freelancer</option>
                  </select>
                  <button type="submit" className="
                      w-full 
                      bg-pink-500 
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
              </div>
            </div>
          </div>
        </Container>
      </FormatCusMd>
    </Layout>
  )
}

export default Register