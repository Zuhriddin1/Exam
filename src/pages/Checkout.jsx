import React from "react";
import { useSelector } from "react-redux";
import Footer from "../layout/Footer";
import trueImg from "../assets/RIGHT.svg";
import two from "../assets/two.svg";
import { Link } from "react-router-dom";
function Checkout() {
  const products = useSelector((state) => state.basket.products);
  function handleClick() {
    window.history.back();
  }
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.price;
  });
  return (
    <>
      <div className="flex relative">
        <div>
          <div className="text-lg font-medium breadcrumbs pt-10 pl-[220px] absolute">
            <ul>
              <li>
                <a onClick={handleClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Go Back
                </a>
              </li>
              <li>
                <a></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-[220px]">
          <div className="text-lg font-medium breadcrumbs pt-[79px] mb-[39px]"></div>
          <div className="border border-white h-[1200px] w-[730px] rounded-2xl mr-[220px]">
            <div className="pt-[54px] pl-[48px]">
              <h1 className="font-bold text-[32px] pl-12  mb-[42px] leading-[36px] tracking-[1.14px]">
                CHECKOUT
              </h1>
              <p className="mb-[16px] pl-12 text-[#D87D4A]">Billing Details</p>
              <div className="flex">
                <div className="pl-[45px] w-[309px] h-[81px] ">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text pb-4">Name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Alexei Ward"
                      className="input input-ghost input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
                <div className="pl-[45px] w-[309px] h-[81px] ">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text pb-4">Email Address</span>
                    </div>
                    <input
                      type="text"
                      placeholder="alexei@mail.com"
                      className="input input-ghost input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
              </div>
              <div className="pl-[45px] w-[309px] h-[81px] ">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text  pt-[25px] pb-4">
                      Phone Number
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="+1 202-555-0136"
                    className="input input-ghost input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <p className="uppercase pt-[80px] pl-[50px] text-[#D87D4A]">
                Shipping Info
              </p>
              <div className="w-[634px] h-[291px]">
                <div className="ml-[50px]">
                  <p className="pt-4 pb-4">Address</p>
                  <input
                    type="text"
                    placeholder="1137 Williams Avenue"
                    className="input input-bordered w-full  "
                  />
                </div>
                <div className="flex">
                  <div className="ml-[50px]">
                    <p className="pt-4 pb-4">ZIP Code</p>
                    <input
                      type="text"
                      placeholder="10001"
                      className="input input-bordered "
                    />
                  </div>
                  <div>
                    <div className="ml-[50px]">
                      <p className="pt-4 pb-4">City</p>
                      <input
                        type="text"
                        placeholder="New York"
                        className="input input-bordered "
                      />
                    </div>
                  </div>
                </div>
                <div className="ml-[50px]">
                  <p className="pt-4 pb-4">Country</p>
                  <input
                    type="text"
                    placeholder="United States"
                    className="input input-bordered "
                  />
                </div>
              </div>
              <p className="uppercase pt-[61px] pl-[55px]">Payment Details</p>
              <div className="money flex justify-between  pl-[55px] pr-[55px] pt-[30px]">
                <div>
                  <p>Payment Method</p>
                </div>
                <div className="flex flex-col gap-7">
                  <div className="w-[309px]  border p-2 rounded-2xl border-[#D87D4A]">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">e-Money</span>
                        <input
                          type="radio"
                          name="radio-10"
                          className="radio checked:bg-[#D87D4A]"
                          checked
                        />
                      </label>
                    </div>
                  </div>
                  <div className="w-[309px] border p-2 rounded-2xl border-[#D87D4A]">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Cash on Delivery</span>
                        <input
                          type="radio"
                          name="radio-10"
                          className="radio checked:bg-[#D87D4A]"
                          checked
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pt-[40px]">
                <div className="pl-[45px] w-[309px] h-[81px] ">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text pb-4">e-Money Number</span>
                    </div>
                    <input
                      type="text"
                      placeholder="238521993"
                      className="input input-ghost input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
                <div className="pl-[45px] w-[309px] h-[81px] ">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text pb-4">e-Money PIN</span>
                    </div>
                    <input
                      type="text"
                      placeholder=" 6891"
                      className="input input-ghost input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-[200px] translate-y-[155px]">
          <div className="card w-96 felx bg-base-100 shadow-xl ml-[35px] border border-white">
            <h1 className="uppercase pt-[32px] pl-[33px] font-bold text-[18px] leading-[25px] tracking-[1.29px]">
              Summary
            </h1>
            <div className="card-body gap-3">
              {products.map((product, index) => (
                <div key={index} className="flex justify-between">
                  <p className="uppercase">{product.name}</p>
                  <span>${product.price}</span>
                </div>
              ))}
              <div className="card-actions ">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn hover:bg-[#FBAF85] bg-[#D87D4A] w-full text-white"
                >
                  CONTINUE & PAY
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <img src={trueImg} alt="" />
                    <h3 className="font-bold text-2xl pt-5">
                      THANK YOU <br /> FOR YOUR ORDER
                    </h3>
                    <p className="pt-3">
                      You will receive an email confirmation shortly.
                    </p>
                    <div className="w-[444px] h-[160px] rounded-2xl flex">
                      <div className="bg-[#F1F1F1]  w-[198px]  rounded-2xl p-3 mt-[35px]">
                        <img src={two} className="w-[50px]" alt="" />
                        <p>XX99 MARK II</p>
                        <p>$ 2,999</p>
                      </div>
                      <div className="bg-black w-[198px] translate-y-8 rounded-xl pt-[43px] pl-[32px] h-[130px]">
                        <p>GRAND TOTAL</p>
                        <span>
                          $ {totalPrice}
                        </span>
                      </div>
                    </div>
                    <form method="dialog" className="mt-5">
                      <Link to={"/"}>
                        <button className="btn bg-[#D87D4A] hover:bg-[#FBAF85] text-white w-full">
                          Back To Home
                        </button>
                      </Link>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[200px]">
        <Footer />
      </div>
    </>
  );
}
export default Checkout;
