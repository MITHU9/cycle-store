const MountainBikes = () => {
  return (
    <div
      style={{
        backgroundImage: `url("../src/assets/mountain.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[70vh] w-full"
    >
      <div
        className="h-full w-full "
        style={{
          backgroundImage:
            "linear-gradient(to bottom,transparent, rgba(0,0,0,0.7))",
        }}
      >
        <div className="lg:w-6xl mx-auto p-20">
          <div className="text-white flex flex-col space-y-5">
            <h2 className="text-3xl font-bold italic">
              Discover The Collection
            </h2>
            <h1 className="text-5xl font-bold italic">Mountain Bikes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur placeat est dolor nostrum velit eos, libero sapiente
              maxime praesentium quibusdam.
            </p>
          </div>
          <div className="text-white flex space-x-10 mt-10">
            <ul className="list-disc">
              <li>Officia deserunt mollit</li>
              <li>Officia deserunt mollit</li>
              <li>Officia deserunt mollit</li>
            </ul>
            <ul className="list-disc">
              <li>Officia deserunt mollit</li>
              <li>Officia deserunt mollit</li>
              <li>Officia deserunt mollit</li>
            </ul>
          </div>
          <div className="mt-10">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 cursor-pointer">
              EXPLORE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MountainBikes;
