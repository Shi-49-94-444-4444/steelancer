'use client'

import FormatCusMd from "@/app/components/FormatCusMd"
import Layout from "@/app/layout"
import Container from "@/app/components/Container"
import { RiLockPasswordFill } from "react-icons/ri"
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoMail } from 'react-icons/io5'
import { useForm } from "react-hook-form"
import AuthService from '../services/auth'
import { useRouter } from "next/router"

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    let email = data.email;
    let password = data.password;
    console.log(email);
    console.log(password);

    AuthService
      .authenticate({
        email: email,
        password: password
      })
      .then(response => {
        localStorage.setItem("auth", response.token);
        router.push("/")
      })
      .catch(error => {
        console.log("Login error: ", error);
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
                      font-mono 
                      text-pink-500 
                      text-9xl
                    "
                  >
                    LOGIN
                  </h1>
                </div>
                <form className="px-28 space-y-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="
                      relative 
                      flex 
                      items-center
                    "
                  >
                    <IoMail className="
                        h-6 
                        w-6 
                        absolute 
                        left-3
                      "
                    />
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
                    <RiLockPasswordFill className="
                        h-6 
                        w-6 
                        absolute 
                        left-3
                      "
                    />
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
                  <h1 className="
                      text-pink-300 
                      cursor-pointer
                    "
                  >
                    Forgot password ?
                  </h1>
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
                    SIGN IN
                  </button>
                </form>
                <h1 className="
                    text-center 
                    text-pink-500
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
            </div>
          </div>
        </Container>
      </FormatCusMd>
    </Layout>
  )
}

export default Login