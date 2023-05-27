import FormatCusMd from "@/app/components/FormatCusMd"
import Layout from "@/app/layout"
import Container from "@/app/components/Container"
import { RiLockPasswordFill } from "react-icons/ri"
import { IoMail } from 'react-icons/io5'
import Select from "react-select"

const options = [
  { value: "Click Choose Role", label: "Click Choose Role", isDisabled: true },
  { value: "Business", label: "Business" },
  { value: "Freelancer", label: "Freelancer" },
];

const Register = () => {
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
                      text-pink-cus-bt 
                      text-8xl
                    "
                  >
                    Register
                  </h1>
                </div>
                <form className="px-28 space-y-5 pt-10">
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
                    />
                  </div>
                  <Select
                    options={options}
                    className="
                          text-xl"
                    isClearable
                  />
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