import logo from "../assets/logoc.svg";
import { ToastContainer } from "react-toastify";
    import { Link } from "react-router-dom";
function HeaderSideCa() {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div>
        <div className="gap-4 flex ml-[1200px] pt-2">
          <Link to={"/login"}>
            <button className="hover:underline">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="">
              <div className="hover:underline">Register</div>
            </button>
          </Link>
        </div>
        <div className="navbar w-[1400px] items-center h-[28px] text-center flex pl-[220px] pt-[24px]">
          <div className="navbar-start">
            <Link to={"/"}>
              <a className="font-bold text-3xl text-white">
                <img src={logo} alt="" />
              </a>
            </Link>
          </div>
          <div className="text-white navbar-center  hidden lg:flex">
            <ul className="menu menu-horizontal text-base px-1 cursor-pointer">
              <li>
                <Link to={"/"}>
                  <a className="hover:text-[#D87D4A] transition duration-500 text-first">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/headphones"}>
                  <summary className="hover:text-[#D87D4A] transition duration-500">
                    Headphones
                  </summary>
                </Link>
              </li>
              <li>
                <Link to={"/speakers"}>
                  <a className="hover:text-[#D87D4A] transition duration-500">
                    Speakers
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/earphones"}>
                  <a className="hover:text-[#D87D4A] transition duration-500">
                    Earphone
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-24"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                    <span className="badge badge-sm indicator-item">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <hr className="text-gray-800  w-[1159px] ml-[180px] pt-5" />
      </div>
    </>
  );
}

export default HeaderSideCa;
