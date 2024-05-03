import ProductNavigate from "../components/ProductNavigate";
import ProductsNav from "../components/ProductsNav";
import ProductsNavigate from "../components/ProductsNavigate";
import { useEffect, useState } from "react";
import two from "../assets/two.svg";
import one from "../assets/one.svg";
import head from "../assets/head.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import AudioPeople from "../components/AudioPeople";
function Headphones() {
  const navigate = useNavigate();
  const [MarkTwo, setMarkTwo] = useState({});
  const [MarkOne, setMarkOne] = useState({});
  const [XX59, setXX59] = useState({});
  function handleClick() {
    navigate("/XX99MarkII");
  }
  function handleClickThird() {
    navigate("/XX59");
  }
  function handleClickTwo() {
    navigate("/XX99MarkI");
  }
  useEffect(() => {
    fetch("http://localhost:3000/xx99-mark-two-headphones")
      .then((res) => res.json())
      .then((data) => {
        setMarkTwo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/xx99-mark-one-headphones")
      .then((res) => res.json())
      .then((data) => {
        setMarkOne(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/xx59-headphones")
      .then((res) => res.json())
      .then((data) => {
        setXX59(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="">
        <h1 className=" font-bold uppercase text-[40px] pt-[40px] leading-[44px] tracking-[1.43px] pl-[670px] text-white">
          {MarkTwo && MarkTwo.category === "headphones" ? (
            <span>Headphones </span>
          ) : (
            ""
          )}
        </h1>
        <div className="w-[1110px] flex h-[560px] pt-[170px] ml-[185px]">
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
              <p className="pt-[45px]">{MarkTwo.description}</p>
              <button
                onClick={handleClick}
                className="uppercase text-white btn hover:bg-[#FBAF85] mt-[40px] bg-[#D87D4A]"
              >
                see product
              </button>
            </div>
          </div>
        </div>
        {/* MarkOne */}
        <div className="w-[1110px] flex h-[560px] pt-[170px] ml-[185px]">
          <div className="right pt-[70px]">
            <div className="w-[600px] pt-[0px] pl-[50px] pr-10 h-[343px]">
              <span className="">
                {MarkOne && MarkOne.new === true ? (
                  <span className="text-[#D87D4A] text-[14px] leading-[20px] tracking-[7px]">
                    N E W <span className="ml-2">P R O D U C T </span>
                  </span>
                ) : (
                  ""
                )}
              </span>
              <h1 className="font-bold pt-[16px] text-[40px] w-[445px] h-[88px] leading-[44px] tracking-[1.43px]">
                {MarkOne.name}
              </h1>
              <p className="pt-[45px] pr-[50px] w-[445px] h-[88px]">
                {MarkOne.description}
              </p>
              <button
                onClick={handleClickTwo}
                className="uppercase text-white btn hover:bg-[#FBAF85] mt-[100px] bg-[#D87D4A]"
              >
                see product
              </button>
            </div>
          </div>
          <div className="left-side w-[440px] h-[460px] mt-[50px] bg-[#F1F1F1] rounded-2xl ">
            <img
              src={one}
              className="w-[500.24px] pt-[95px] pl-[0px] h-[386px]"
              alt=""
            />
          </div>
        </div>
        {/* XX59 */}
        <div className="w-[1110px] flex h-[560px] pt-[170px] ml-[185px]">
          <div className="left-side w-[440px] h-[460px] mt-[50px] bg-[#F1F1F1] rounded-2xl ">
            <img
              src={head}
              className="w-[500.24px] pt-[95px] pl-[0px] h-[386px]"
              alt=""
            />
          </div>
          <div className="right pt-[70px]">
            <div className="w-[600px] pt-[0px] mt-10 pl-[130px] h-[343px]">
              <span className="">
                {XX59 && XX59.new === true ? (
                  <span className="text-[#D87D4A] text-[14px] leading-[20px] tracking-[7px]">
                    N E W <span className="ml-2">P R O D U C T </span>
                  </span>
                ) : (
                  ""
                )}
              </span>
              <h1 className="font-bold pt-[16px] text-[40px] leading-[44px] tracking-[1.43px]">
                {XX59.name}
              </h1>
              <p className="pt-[45px]">{XX59.description}</p>
              <button
                onClick={handleClickThird}
                className="uppercase text-white btn hover:bg-[#FBAF85] mt-[40px] bg-[#D87D4A]"
              >
                see product
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-1 rounded-2xl translate-y-[404px] ml-[190px]">
          <div className="flex gap-7">
            <ProductsNavigate></ProductsNavigate>
            <ProductsNav></ProductsNav>
            <ProductNavigate></ProductNavigate>
          </div>
        </div>
        <div>
          <div className="mt-[699px] ml-[190px]">
            <AudioPeople></AudioPeople>
          </div>
          <div className="mt-[200px]">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}
export default Headphones;
