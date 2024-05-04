function Error() {
  function handleClick() {
    window.history.back();
  }
  return (
    <div className="flex flex-col justify-center items-center align-middle pt-52">
      <h1 className="font-extrabold text-8xl">Error</h1>
      <p className="pt-5 text-xl">Not Found</p>
      <button onClick={handleClick} className="btn cursor-help mt-5">
        Go Back
      </button>
    </div>
  );
}
export default Error;
