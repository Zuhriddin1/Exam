import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Register() {
  const userNameRef = useRef("");
  const userPasswordRef = useRef("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: userNameRef.current.value,
      password: userPasswordRef.current.value,
    };
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === newUser.username) {
      setError("User already exists");
    } else {
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/login");
    }
  }
  return (
    <div className="container flex items-center justify-center ml-[0px] mt-[0px] text-white">
      <section className="h-screen  grid place-items-center">
        <form className="card p-8" onSubmit={handleSubmit}>
          <h4 className="text-center text-3xl font-bold block mt-16 text-white">
            Register
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
              Sign up
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <p className="mt-5">
            Already a member?
            <NavLink
              to={"/login"}
              className="ml-5 hover:bg-slate-700 p-3 rounded-lg"
            >
              Login
            </NavLink>
          </p>
        </form>
      </section>
    </div>
  );
}
export default Register;
