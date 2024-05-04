import { Link } from "react-router-dom";
import logo from "../assets/logoc.svg";
import { useState } from "react";
function HeaderSide() {
  const [counter, setCounter] = useState(0);
  return (
    <>
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
                  <a className="hover:text-[#D87D4A] uppercase transition duration-500 text-first">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/headphones"}>
                  <summary className="hover:text-[#D87D4A] uppercase transition duration-500">
                    Headphones
                  </summary>
                </Link>
              </li>
              <li>
                <Link to={"/speakers"}>
                  <a className="hover:text-[#D87D4A] uppercase transition duration-500">
                    Speakers
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/earphones"}>
                  <a className="hover:text-[#D87D4A] uppercase transition duration-500">
                    EARPHONES
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="navbar-end"
            >
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold cursor-pointer text-lg uppercase">
                      Cart {counter}
                    </h3>
                    <p className="py-4 hover:underline cursor-pointer">
                      Remove all
                    </p>
                  </div>
                  <p className="cursor-help">
                    {!counter ? <span>Your Basket is empty</span> : ""}
                  </p>
                </div>
              </dialog>
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
                  <span className="badge badge-sm indicator-item">0</span>
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

export default HeaderSide;
