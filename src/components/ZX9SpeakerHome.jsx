import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function ZX9Speaker() {
  const [speaker, setSpeaker] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/zx9-speaker")
      .then((res) => res.json())
      .then((data) => {
        setSpeaker(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleClick() {
    navigate("/ZX9SPEAKER");
  }
  return (
    <div>
      <div className="bg-[url('./assets/SpeakerBig.svg')] w-[1110px] h-[560px]">
        <div className="w-[1000px]  translate-y-[139px] text-white h-[303px] top-[1431px] pl-[661px] left-[831px]">
          <h1 className="font-bold  text-[56px] tracking-[2px] pb-[37px] leading-[58px] ">
            {speaker.name}
          </h1>
          <p className="text-[15px] leading-[25px] mb-[45px]">
            {speaker.description}
          </p>
          <button
            className="uppercase btn btn-active text-white"
            onClick={handleClick}
          >
            See Product
          </button>
        </div>
      </div>
    </div>
  );
}
export default ZX9Speaker;
