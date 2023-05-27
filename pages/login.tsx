import FormatCusMd from "@/app/components/FormatCusMd"
import Layout from "@/app/layout"
import Container from "@/app/components/Container"
import { RiLockPasswordFill } from "react-icons/ri"
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoMail } from 'react-icons/io5'

const Login = () => {
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
                      text-pink-cus-bt 
                      text-8xl
                    "
                  >
                    LOGIN
                  </h1>
                </div>
                <form className="px-28 space-y-5 pt-10">
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
                    />
                  </div>
                  <h1 className="
                      text-pink-cus-tx 
                      cursor-pointer
                    "
                  >
                    Forgot password ?
                  </h1>
                  <button className="
                      w-full 
                      bg-pink-cus-bt 
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
                  <FaFacebook size={80} className="text-blue-500 cursor-pointer mr-20"/>
                  <FcGoogle size={80} className="cursor-pointer"/>
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