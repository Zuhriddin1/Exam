import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import two from "../assets/two.svg";
import { useNavigate } from "react-router-dom";
function XX99MarkTwo() {
  const navigate = useNavigate();
  const [MarkTwo, setMarkTwo] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/xx99-mark-two-headphones")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMarkTwo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  function handleClick() {
    window.history.back();
  }
  function handleAdd() {
    setTimeout(() => {
      setTimeout(() => {
        toast.success("This product is added to the basket");
      }, 0);
    }, 600);
  }
  return (
    <>
      <div>
        <div className="text-lg font-medium breadcrumbs pt-10 pl-[220px]">
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
        <div>
          <div className="w-[1110px] flex h-[560px] pt-[100px] ml-[185px]">
            <div className="left-side w-[440px] h-[460px] mt-[50px] bg-[#F1F1F1] rounded-2xl ">
              <img
                src={two}
                className="w-[500.24px] pt-[95px] pl-[0px] h-[386px]"
                alt=""
              />
            </div>
            <div className="right pt-[70px]">
              <div className="w-[600px] pt-[0px] pl-[130px] h-[343px]">
                <span className="">
                  {MarkTwo && MarkTwo.new === true ? (
                    <span className="text-[#D87D4A] text-[14px] leading-[20px] tracking-[7px]">
                      N E W <span className="ml-2">P R O D U C T </span>
                    </span>
                  ) : (
                    ""
                  )}
                </span>
                <h1 className="font-bold pt-[16px] text-[40px] leading-[44px] tracking-[1.43px]">
                  {MarkTwo.name}
                </h1>
                <p className="pt-[45px] text-[15px] leading-[25px]">
                  {MarkTwo.description}
                </p>
                <p className="pt-[20px] text-[18px] leading-[25px] font-bold tracking-[1.29px]">
                  $ {numberWithCommas(MarkTwo.price ?? 0)}
                </p>
                <button
                  onClick={handleAdd}
                  className="uppercase text-white btn hover:bg-[#FBAF85] mt-[40px] bg-[#D87D4A]"
                >
                  add to card
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1110px] h-[318px] flex ">
          <div className="left-side pt-[161px] pl-[220px] w-[1110px] h-[318px] ">
            <h1 className="font-bold uppercase text-[32px] leading-[36px] tracking-[1.14px]">
              Features
            </h1>
            <div className="mt-8">
              {MarkTwo.features &&
                MarkTwo.features.split("\n").map((feature, index) => (
                  <p className="pt-2" key={index}>
                    {feature}
                  </p>
                ))}
            </div>
          </div>
          <div className="right-side w-[350px] ml-[100px] translate-x-[100px] h-[225px]">
            <h1 className="uppercase font-bold mt-[165px] mb-8 text-[32px] pl-5 leading-[36px] tracking-[1.14px]">
              In the box
            </h1>
            <ul className="list-disc gap-2 pl-5">
              {MarkTwo.includes &&
                MarkTwo.includes.map((item, index) => (
                  <div className="flex gap-1">
                    <>
                      <li
                        key={index}
                        className="list-none mt-3   text-[#D87D4A]"
                      >
                        {item.quantity}
                      </li>
                      <p className="text-[#D87D4A] mt-3">x</p>{" "}
                      <span className="pl-4 mt-3">{item.item}</span>
                    </>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default XX99MarkTwo;
