import { useNavigate } from "react-router-dom";
import ears from "../assets/ears.svg";
import nav from "../assets/nav.svg";
function ProductsNavigate() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/headphones");
  }
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div className="w-[350px] h-[204px] rounded-[8px] bg-[#F1F1F1]">
        <div className="-translate-y-[80px] translate-x-[110px]">
          <img src={ears} alt="" className="" />
          <p className="pt-[35px] text-black font-bold text-[18px] leading-[25px] tracking-[1.29px] items-center">
            HEADPHONES
          </p>
          <div className="flex gap-3 mt-[18px] items-center ml-10">
            <p className="uppercase font-bold hover:text-[#D87D4A] transition duration-1000 cursor-pointer">
              shop
            </p>
            <img src={nav} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsNavigate;
