const Loader = () => {
  return (
    <div className="flex space-x-2 w-full h-full justify-center items-center">
      <span className="sr-only">Loading...</span>
      <div className="size-5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="size-5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="size-5 bg-black rounded-full animate-bounce"></div>
    </div>
  );
}

export default Loader;