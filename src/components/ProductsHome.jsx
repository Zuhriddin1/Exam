import { useNavigate } from "react-router-dom";
import Product from "../assets/ear.jpg";
import { useEffect, useState } from "react";
function ProductsHome() {
  const [yx1, steyx1] = useState([]);
  const navigate = useNavigate();
  function handleClick() {
    navigate("/XX99MarkII");
  }
  useEffect(() => {
    fetch("http://localhost:3000/xx99-mark-two-headphones")
      .then((data) => data.json())
      .then((data) => {
        steyx1(data);
      });
  }, []);
  console.log(yx1);
  return (
    <>
      <div className="ml-[200px] mr-[200px]  w-[398px] h-[346px] pt-[171px] hero-left  flex flex-col">
        <div className="flex gap-5 leading-[19.12px]  -translate-y-6 text-sm ">
          <p className="">
            {yx1 && yx1.new === true ? (
              <span>
                N E W <span className="ml-2">P R O D U C T </span>
              </span>
            ) : (
              ""
            )}
          </p>
          <p></p>
        </div>
        <h1 className="font-bold text-[56px] leading-[58px] tracking-[2px] text-white">
          {yx1.name}
        </h1>
        <div className="pt-[30px] font-medium leading-[25px] text-[15px]">
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music <br /> enthusiast.
          </p>
        </div>
        <button
          onClick={handleClick}
          className="btn hover:bg-[#FBAF85] text-white  w-[160px] mt-[40px] uppercase  bg-[#D87D4A]"
        >
          see product
        </button>
      </div>
      <div className="flex ">
        <img
          src={Product}
          alt=""
          className="hero-rigth  object-cover  -translate-y-[350px] rounded-3xl  h-[600px] translate-x-[700px] "
        />
      </div>
    </>
  );
}
export default ProductsHome;