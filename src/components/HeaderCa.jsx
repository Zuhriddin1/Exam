import HeaderSideCa from "./HeaderSideCa";
function HeaderCa({ children }) {
  return (
    <div className="bg-[#131313] opacity-[1] w-full h-[300px]">
      <HeaderSideCa></HeaderSideCa>
      {children}
    </div>
  );
}

export default HeaderCa;
