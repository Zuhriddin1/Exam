import { useNavigate } from "react-router-dom";
import air from "../assets/Air.svg";
import nav from "../assets/nav.svg";
function ProductNavigate() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/earphones");
  }
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div className="w-[350px] h-[204px] rounded-[8px] bg-[#F1F1F1]">
        <div className="-translate-y-[67px] translate-x-[110px]">
          <img src={air} alt="" />
          <p
            className="pt-[40px] text-black font-bold text-[18px] leading-[25px] tracking-[1.29px] items-center"
          >
            EARPHONES
          </p>
          <div className="flex gap-3 mt-[24px] items-center ml-10">
            <p className="font-bold hover:text-[#D87D4A] transition duration-1000 mt-1 uppercase">
              shop
            </p>
            <img src={nav} alt="" className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductNavigate;
