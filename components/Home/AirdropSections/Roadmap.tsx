import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

const Roadmap = () => {
  return (
    <div className="relative border-gray-800 border-2 shadow bg-[#ad8e66] py-8 md:py-10 min-h-[300px]">
      {/* Panda Images Container */}
      <div className="absolute inset-0 flex justify-between items-start px-4">
        {/* Left Panda */}
        <Image
          src="/Images/liwuGroupPhoto.png"
          alt="Left Panda"
          width={100}
          height={80}
          className="object-contain"
        />

        {/* Right Panda (Mirrored) */}
        <Image
          src="/Images/liwuGroupPhoto.png"
          alt="Right Panda"
          width={100}
          height={80}
          className="object-contain"
          style={{ transform: "scaleX(-1)" }} // Flip horizontally
        />
      </div>

      {/* Center Title */}
      <div className="text-center mt-12">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-header font-extrabold text-white px-4 inline-block"
          style={{
            WebkitTextStroke: "1px black",
            WebkitTextFillColor: "white",
            textShadow: "1px 1px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          AIRDROP ROADMAP
        </h1>
      </div>

      {/* Read More Button */}
      <div className="flex justify-center mt-8">
        <button className="flex items-center border-4 border-gray-800 bg-white text-black px-6 sm:px-8 lg:px-10 py-3 text-base lg:text-lg font-bold cursor-pointer hover:bg-gray-100 transition duration-300">
          <span>Read More</span>
          <MdArrowOutward className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Roadmap;
