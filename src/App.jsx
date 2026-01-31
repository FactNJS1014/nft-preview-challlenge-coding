function App() {
  return (
    <>
      <main className="min-h-screen bg-blue-950 flex items-center justify-center">
        <div className="w-[350px] h-[600px] bg-blue-900 rounded-lg shadow-lg p-5">
          <div className="flex items-center relative">
            <img
              src="../images/image-equilibrium.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-cyan-400 hover:opacity-60 rounded-lg cursor-pointer group">
              <img
                src="../images/icon-view.svg"
                alt=""
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block group-hover:text-white group-hover:opacity-100"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <h1 className="text-2xl text-white font-bold hover:text-cyan-400 cursor-pointer">
              Equilibrium #3429
            </h1>
            <p className="text-gray-400">
              Our Equilibrium collection promotes balance and harmony.
            </p>
          </div>
          <div className="flex justify-between mt-5">
            <div className="flex items-center gap-2">
              <img src="../images/icon-ethereum.svg" alt="" />
              <p className="text-cyan-400">0.041 ETH</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="../images/icon-clock.svg" alt="" />
              <p className="text-blue-300">3 days left</p>
            </div>
          </div>
          <hr className="border-blue-800 mt-5" />
          <div className="flex items-center gap-2 mt-5">
            <img
              src="../images/image-avatar.png"
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <p className="text-gray-400">
              Creation of{" "}
              <span className="text-white hover:text-cyan-400 cursor-pointer">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
