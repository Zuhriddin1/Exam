import { toast } from "react-toastify";
import ears from "../assets/ears.svg";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import speak from "../assets/Zx9.svg";
import white from "../assets/white.svg";
import two from "../assets/two.svg";
import audio from "../assets/audio.svg";
import work from "../assets/work.svg";
import phones from "../assets/phones.svg";
import ProductsNavigate from "../components/ProductsNavigate";
import ProductsNav from "../components/ProductsNav";
import ProductNavigate from "../components/ProductNavigate";
import Footer from "../layout/Footer";
import AudioPeople from "../components/AudioPeople";
import { addToBasket } from "../redux/BasketSlicer";
import { useDispatch } from "react-redux";
function XX99MarkTwo() {
  const [MarkTwo, setMarkTwo] = useState({});
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
  const dispathch = useDispatch();
  const [counter, setCounter] = useState(1);
  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement() {
    setCounter(counter > 1 ? counter - 1 : 1);
  }
  const numberClear = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  function handleClick() {
    window.history.back();
  }
  function handleAdd() {
    setCounter(1);
    setTimeout(() => {
      setTimeout(() => {
        toast.success("This product is added to the basket");
      }, 0);
    }, 600);
    let dataBase = {
      name: MarkTwo.name,
      price: MarkTwo.price,
      image: two,
    };
    dispathch(addToBasket(dataBase));
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
                  $ {numberClear(MarkTwo.price ?? 0)}
                </p>
                <div className="flex">
                  <div className="w-[120px] h-[48px] bg-[#F1F1F1] flex p-2 items-center rounded-xl translate-y-10 mr-[25px] justify-between">
                    <button className="text-lg" onClick={handleIncrement}>
                      +
                    </button>
                    <p>{counter}</p>
                    <button className="text-lg" onClick={handleDecrement}>
                      -
                    </button>
                  </div>
                  <button
                    onClick={handleAdd}
                    className="uppercase text-white btn hover:bg-[#FBAF85] mt-[40px] bg-[#D87D4A] "
                  >
                    add to card
                  </button>
                </div>
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
                MarkTwo.includes.map((el, index) => (
                  <div className="flex gap-1">
                    <>
                      <li
                        key={index}
                        className="list-none mt-3   text-[#D87D4A]"
                      >
                        {el.quantity}
                      </li>
                      <p className="text-[#D87D4A] mt-3">x</p>
                      <span className="pl-4 mt-3">{el.item}</span>
                    </>
                  </div>
                ))}
            </ul>
          </div>
        </div>
        <div className="img-side flex ml-[220px] mt-[399px]">
          <div className="one-side flex flex-col gap-8">
            <img src={audio} className="" alt="" />
            <img className="" src={work} alt="" />
          </div>
          <div className="secound-side ">
            <img src={phones} className="pl-8 " alt="" />
          </div>
        </div>
        <div className="w-[1110px] ml-[220px] h-[571px] mt-[160px]">
          <h1 className="uppercase pl-[400px] font-bold text-[32px] leading-[36px] tracking-[1.14px]">
            you may also like
          </h1>
          <div className="w-[1110px] h-[471px] flex gap-8 mt-8 items-center justify-center">
            <div>
              <div className="w-[350px] mt-[64px] h-[318px] bg-[#F1F1F1] rounded-xl">
                <img
                  src={ears}
                  alt=""
                  className="translate-x-24 translate-y-16 w-[148px] h-[193px] "
                />
              </div>
              <h1 className="pl-[100px] pt-10 text-[24px] leading-[32.78px] tracking-[1.71px]">
                XX99 MARK I
              </h1>
              <Link to={"/XX99MarkI"}>
                <button className="text-white  ml-[113px] hover:bg-[#FBAF85] mt-[32px] btn bg-[#D87D4A]  uppercase">
                  see product
                </button>
              </Link>
            </div>
            <div>
              <div className="w-[350px] mt-[64px] h-[318px] bg-[#F1F1F1] rounded-xl">
                <img src={white} alt="" className="pt-[62px] pl-[80px]" />
              </div>
              <h1 className="pl-[148px] pt-10 text-[24px] leading-[32.78px] tracking-[1.71px]">
                XX59
              </h1>
              <Link to={"/XX59"}>
                <button className="text-white  ml-[113px] hover:bg-[#FBAF85] mt-[32px] btn bg-[#D87D4A]  uppercase">
                  see product
                </button>
              </Link>
            </div>
            <div>
              <div className="w-[350px] mt-[64px] h-[318px] bg-[#F1F1F1] rounded-xl">
                <img
                  src={speak}
                  alt=""
                  className="pt-[40px] w-[255px] h-[300px] pl-[100px]"
                />
              </div>
              <h1 className="uppercase pl-[100px] pt-10 text-[24px] leading-[32.78px] tracking-[1.71px]">
                Zx9 speaker
              </h1>
              <Link to={"/ZX9SPEAKER"}>
                <button className="text-white  ml-[113px] hover:bg-[#FBAF85] mt-[32px] btn bg-[#D87D4A]  uppercase">
                  see product
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="w-1 rounded-2xl ml-[220px] mt-[250px]">
            <div className="flex gap-7">
              <ProductsNavigate></ProductsNavigate>
              <ProductsNav></ProductsNav>
              <ProductNavigate></ProductNavigate>
            </div>
          </div>
        </div>
        <div className="mt-[200px] ml-[190px]">
          <AudioPeople></AudioPeople>
        </div>
        <div className="mt-[200px]">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
export default XX99MarkTwo;
