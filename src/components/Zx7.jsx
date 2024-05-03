import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Zx7() {
  const [speaker, setSpeaker] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/zx7-speaker")
      .then((res) => res.json())
      .then((data) => {
        setSpeaker(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleClick() {
    navigate("/ZX7Speaker");
  }
  return (
    <div className="bg-[url('./assets/Zx7A.svg')] w-[1110px] h-[320px]">
      <div className="w-[300px] h-[118px] pt-[101px] pl-[95px]">
        <h1 className="font-bold text-black  text-[28px] leading-[39px] tracking-[2px]">
          {speaker.name}
        </h1>
        <button
          onClick={handleClick}
          className="uppercase btn btn-outline bg-inherit border-black mt-[33px] text-white rounded-none w-[160px] h-[48px] hover:bg-black hover:text-white"
        >
          see product
        </button>
      </div>
    </div>
  );
}

export default Zx7;
