import speakers from "../assets/speak.svg";
import nav from "../assets/nav.svg";
import { useNavigate } from "react-router-dom";
function ProductsNav() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/speakers");
  }
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div className="w-[350px] h-[204px] rounded-[8px] bg-[#F1F1F1]">
        <div className="-translate-y-[80px] translate-x-[110px]">
          <img src={speakers} alt="" />
          <p className="pt-[40px] pl-3  text-black font-bold text-[18px] leading-[25px] tracking-[1.29px] items-center">
            SPEAKERS
          </p>
          <div className="flex gap-3 mt-[24px] items-center ml-10">
            <p className="uppercase font-bold hover:text-[#D87D4A] transition duration-1000">
              shop
            </p>
            <img src={nav} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsNav;
