import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

const Gridsection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-0">
      {/* First Container */}
      <div className="border-gray-800 border-2 bg-[#e19ec8] p-6 sm:p-8 lg:p-10 relative min-h-[400px]">
        {/* Heading */}
        <div
          className="text-white font-header text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center sm:text-left leading-tight"
          style={{
            WebkitTextStroke: "2px black",
            WebkitTextFillColor: "white",
            textShadow: "2px 2px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          JOIN $LIWU AIRDROP
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center sm:justify-start mt-8">
          <button className="flex items-center border-4 border-gray-800 bg-white text-black px-5 sm:px-7 py-3 text-base font-bold cursor-pointer hover:bg-gray-100 transition duration-300">
            <span>Get Started</span>
            <MdArrowOutward className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Panda Image */}
        <div className="absolute bottom-4 right-4 sm:right-6 lg:right-8">
          <Image
            src="/Images/LiwuInSports.png"
            alt="Liwu Panda"
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Second Container */}
      <div className="border-gray-800 border-2 bg-[#cdc5bb] p-6 sm:p-8 lg:p-10 relative min-h-[400px]">
        {/* Heading */}
        <div
          className="font-header text-3xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left leading-tight"
          style={{
            WebkitTextStroke: "2px black",
            WebkitTextFillColor: "white",
            textShadow: "2px 2px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          ELIGIBILITY CRITERIA
        </div>

        {/* Read More Button */}
        <div className="flex justify-center sm:justify-start mt-8">
          <button className="flex items-center border-4 border-gray-800 bg-white text-black px-5 sm:px-7 py-3 text-base font-bold cursor-pointer hover:bg-gray-100 transition duration-300">
            <span>Read More</span>
            <MdArrowOutward className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Panda Image */}
        <div className="absolute bottom-4 right-4 sm:right-6 lg:right-8">
          <Image
            src="/Images/LiwuHappyLife.png"
            alt="Liwu Panda"
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Gridsection;
