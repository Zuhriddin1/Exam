import HeaderSide from "../components/HeaderSide";

function Header({ children }) {
  return (
    <>
      <div className="bg-[#131313] opacity-[1] w-screen h-[735px]">
        <HeaderSide></HeaderSide> 
        {children}
      </div>
    </>
  );
}

export default Header;
