import { useNavigate } from "react-router-dom";
import airport from "../assets/airpots.svg";
import { useEffect, useState } from "react";
function Yx1() {
  const [ear, setEar] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/yx1-earphones")
      .then((res) => res.json())
      .then((data) => {
        setEar(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleClick() {
    navigate("/YX1Earphone");
  }
  return (
    <div className="flex gap-[30px] text-black">
      <div className="flex">
        <img src={airport} alt="" />
      </div>
      <div className="w-[540px] bg-[#F1F1F1] h-[320px] rounded-2xl pt-[101px] pl-[95px]">
        <h1 className="font-bold text-[28px] leading-[39px] tracking-[2px]">
          {ear.name}
        </h1>
        <button
          onClick={handleClick}
          className="uppercase outline-none btn btn-outline bg-inherit text-black border-black mt-[33px]  rounded-none w-[160px] h-[48px] hover:bg-black hover:outline-none hover:text-white"
        >
          see product
        </button>
      </div>
    </div>
  );
}
export default Yx1;
