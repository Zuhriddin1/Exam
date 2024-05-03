import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Login() {
  const userPasswordRef = useRef("");
  const userNameRef = useRef("");
  const navigate = useNavigate();
  // const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const inputUser = {
      username: userNameRef.current.value,
      password: userPasswordRef.current.value,
    };
    if (
      storedUser &&
      storedUser.username === inputUser.username &&
      storedUser.password === inputUser.password
    ) {
      navigate("/");
      localStorage.setItem("token", "true");
    } else {
      alert("Please enter Name or Password correctly");
    }
  }
  function handleClick() {
    localStorage.setItem("token", "true");
    navigate("/");
  }
  return (
    <div className="container flex items-center justify-center ml-[0px] mt-[0px] text-white">
      <section className="h-screen grid place-items-center">
        <form className="card p-8" onSubmit={handleSubmit}>
          <h4 className="text-center text-3xl font-bold block mt-16 text-white">
            Log in
          </h4>
          <div className="mb-3 mt-3">
            <span className="flex ml-3 mt-5 mb-5">User Name</span>
            <label
              htmlFor="username"
              className="input input-bordered p-3 items-center"
            >
              <input ref={userNameRef} type="text" className="grow pr-16" />
            </label>
          </div>
          <div className="flex flex-col mt-2">
            <span className="pl-2 mb-3">Password</span>
            <label className="input input-bordered items-center gap-2">
              <input
                type="password"
                ref={userPasswordRef}
                className="grow mt-3"
              />
            </label>
          </div>
          <div className="mt-4">
            <button
              className="btn mt-3 bg-[#D87D4A] mb-3 text-white hover:bg-[#FBAF85] btn-block uppercase"
              type="submit"
            >
              Sign in
            </button>
            <button
              className="btn bg-[#F1F1F1] text-black mt-3 btn-outline btn-block uppercase"
              type="button" // Change type to "button" here
              onClick={handleClick}
            >
              Guest user
            </button>
          </div>
          <p className="mt-5">
            A new member?
            <NavLink
              to={"/register"}
              className="ml-5 hover:bg-slate-700 p-3 rounded-lg"
            >
              Register
            </NavLink>
          </p>
        </form>
      </section>
    </div>
  );
}
export default Login;
