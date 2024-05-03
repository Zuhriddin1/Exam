import HeaderSideCa from "./HeaderSideCa";
function HeaderDetail({ children }) {
  return (
    <div className="bg-[#131313] opacity-[1] w-full h-[130px]">
      <HeaderSideCa></HeaderSideCa>
      {children}
    </div>
  );
}
export default HeaderDetail;
