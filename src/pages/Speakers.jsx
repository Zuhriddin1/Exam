import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Zx9p from "../assets/Zx9.svg";
import Speaker from "../assets/Zx7.svg";
import ProductsNavigate from "../components/ProductsNavigate";
import ProductsNav from "../components/ProductsNav";
import ProductNavigate from "../components/ProductNavigate";
import Footer from "../layout/Footer";
import AudioPeople from "../components/AudioPeople";
function Speakers() {
  const navigate = useNavigate();
  const [Zx9, setZx9] = useState({});
  const [Zx7, setZx7] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/zx9-speaker")
      .then((res) => res.json())
      .then((data) => {
        setZx9(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/zx7-speaker")
      .then((res) => res.json())
      .then((data) => {
        setZx7(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleClick() {
    navigate("/ZX9SPEAKER");
  }
  function handleClickTwo() {
    navigate("/ZX7Speaker");
  }
  return (
    <div>
      <div className="">
        <h1 className="font-bold text-[40px] uppercase pt-[40px] leading-[44px] tracking-[1.43px] pl-[670px] text-white">
          {Zx9 && Zx9.category === "speakers" ? <span>Speakers</span> : ""}
        </h1>
      </div>
      <div className="w-[1110px] flex h-[560px] pt-[170px] ml-[185px]">
        <div className="left-side w-[440px] h-[460px] mt-[50px] bg-[#F1F1F1] rounded-2xl ">
          <img
            src={Zx9p}
            className="w-[500.24px] pt-[95px] pl-[0px] h-[386px]"
            alt=""
          />
        </div>
        <div className="right pt-[70px]">
          <div className="w-[600px] pt-[0px] pl-[130px] h-[343px]">
            <span className="">
              {Zx9 && Zx9.new === true ? (
                <span className="text-[#D87D4A] text-[14px] leading-[20px] tracking-[7px]">
                  N E W <span className="ml-2">P R O D U C T </span>
                </span>
              ) : (
                ""
              )}
            </span>
            <h1 className="font-bold pt-[16px] text-[40px] leading-[44px] tracking-[1.43px]">
              {Zx9.name}
            </h1>
            <p className="pt-[45px]">{Zx9.description}</p>
            <button
              onClick={handleClick}
              className="uppercase text-white btn hover:bg-[#FBAF85] mt-[40px] bg-[#D87D4A]"
            >
              see product
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[1110px] flex h-[560px] pt-[170px] ml-[185px]">
          <div className="right pt-[70px]">
            <div className="w-[600px] mt-[10px] pl-[0] pr-[130px] h-[343px]">
              <span className="">
                {Zx7 && Zx7.new === true ? (
                  <span className="text-[#D87D4A] text-[14px] leading-[20px] tracking-[7px]">
                    N E W <span className="ml-2">P R O D U C T </span>
                  </span>
                ) : (
                  ""
                )}
              </span>
              <h1 className="font-bold pt-[25px] text-[40px] leading-[44px] tracking-[1.43px]">
                {Zx7.name}
              </h1>
              <p className="pt-[45px]">{Zx7.description}</p>
              <button
                onClick={handleClickTwo}
                className="uppercase text-white btn hover:bg-[#FBAF85] mt-[40px] bg-[#D87D4A]"
              >
                see product
              </button>
            </div>
          </div>
          <div className="left-side w-[440px] h-[460px] mt-[50px] bg-[#F1F1F1] rounded-2xl ">
            <img
              src={Speaker}
              className="w-[500.24px] pt-[95px] pl-[0px] h-[386px]"
              alt=""
            />
          </div>
        </div>
        <div className="w-1 mt-[340px] rounded-2xl ml-[190px] ">
          <div className="flex gap-7">
            <ProductsNavigate></ProductsNavigate>
            <ProductsNav></ProductsNav>
            <ProductNavigate></ProductNavigate>
          </div>
        </div>{" "}
        <div>
          <div className="mt-[200px] ml-[190px]">
            <AudioPeople></AudioPeople>
          </div>
          <div className="mt-[200px]">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Speakers;