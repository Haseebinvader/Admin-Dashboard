/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { useDispatch } from "react-redux"
import { funcisAuthorized } from "../../Redux/loginslice"
import "./login.scss"
import { useState } from "react"
import axios from "axios"

const Login = () => {
  const dispatch = useDispatch()
  const [showpass, setshowpass] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const [loginform, setloginform] = useState({
    email: "",
    password: "",
  })
  const LoginUser = (e) => {
    e.preventDefault()
    setisLoading(true)
    axios
      .post(`/admin/login`, {
        email: loginform?.email,
        password: loginform?.password,
      })
      .then((res) => {
        console.log(res)
        alert("Logged In Successfully!")
        dispatch(funcisAuthorized(true))
        setisLoading(false)
      })
      .catch((err) => {
        setisLoading(false)
        alert(`${err.response?.data?.message}`)
      })
  }
  return (
    <div className="px-10">
      <section className="h-screen">
        <div className="h-full">
          {/* <!-- Left column container with background--> */}
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>

            {/* <!-- Right column container --> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form onSubmit={LoginUser}>
                {/* <!--Sign in section--> */}
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-lg">TUTOR4U</p>
                </div>

                {/* <!-- Separator between social media sign in and email/password sign in --> */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                    LOGIN
                  </p>
                </div>

                {/* <!-- Email input --> */}
                <div className=" mb-6" data-te-input-wrapper-init>
                  <label for="exampleFormControlInput2">Email address</label>
                  <input
                    required
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    value={loginform.email}
                    onChange={(e) =>
                      setloginform({
                        ...loginform,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className=" mb-6" data-te-input-wrapper-init>
                  <label for="exampleFormControlInput22">Password</label>
                  <input
                    required
                    type={showpass ? "text" : "password"}
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput22"
                    placeholder="Password"
                    value={loginform.password}
                    onChange={(e) =>
                      setloginform({
                        ...loginform,
                        password: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-6 flex items-center justify-between">
                  {/* <!-- Remember me checkbox --> */}
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="ml-[-0.5rem]"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                      onChange={() => setshowpass(!showpass)}
                    />

                    <label
                      className="inline-block pl-[0.2rem] hover:cursor-pointer"
                      for="exampleCheck2"
                    >
                      Show Password
                    </label>
                  </div>

                  {/* <!--Forgot password link--> */}
                  {/* <a href="#!">Forgot password?</a> */}
                </div>

                {/* <!-- Login button --> */}
                <div className="text-center lg:text-left">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="inline-block rounded bg-black px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {isLoading ? "Logging In..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
