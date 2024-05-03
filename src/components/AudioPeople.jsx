import people from "../assets/People.svg";
function AudioPeople() {
  return (
    <div className="w-[1110px] h-[588px] rounded-xl flex">
      <div className="left-side w-[455px] h-[295px]">
        <div className="text-[40px] leading-[44px] tracking-[1.43px] font-bold">
          <h1 className="mt-[150px]">
            Bringing you the
            <p className="text-[#D87D4A] inline pr-5">
              <br />
              best
            </p>
            audio gear
          </h1>
        </div>
        <p className="pt-[40px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="right-side">
        <div className="pl-[125px]">
        <img src={people} alt="" />
        </div>
      </div>
    </div>
  );
}
export default AudioPeople;
