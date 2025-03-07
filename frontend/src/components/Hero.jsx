const Hero = () => {
  return (
    <div
      className="h-screen flex justify-center items-center "
      style={{
        backgroundImage: "url('../src/assets/cycle-2.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="h-full w-1/2 "
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="text-white h-full p-10 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold italic">Newly launched</h1>
            <h1 className="text-6xl font-extrabold italic">Kryo X26</h1>
            <h1 className="text-6xl font-extrabold italic">MTB</h1>
          </div>
          <div className="mt-6 -ml-20 lg:-ml-24">
            <p className="text-2xl font-bold italic">Specifications:</p>
            <ul className="text-lg font-semibold py-2">
              <li>Frame: Aluminium</li>
              <li>Wheel Size: 26 inches</li>
              <li>Speed: 21</li>
              <li>Brakes: Disc</li>
            </ul>
          </div>
          <button className="text-white border border-amber-500 w-40 px-8 py-2 bg-amber-600 hover:bg-amber-500 hover:text-black cursor-pointer uppercase font-bold">
            Buy now
          </button>
        </div>
      </div>
      <div
        className="h-full w-1/2 "
        style={{
          backgroundColor: "rgba(220, 10, 0, 0.4)",
        }}
      ></div>
      <div></div>
    </div>
  );
};
export default Hero;
