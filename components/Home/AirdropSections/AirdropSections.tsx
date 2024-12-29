import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const AirdropSections = () => {
  return (
    <div className="h-[75vh] w-full relative border-gray-800 lg:h-[80vh] border-2 bg-[#5eb8df] px-4 sm:px-6 py-6 sm:py-8">
      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start mt-4 sm:mt-8 relative">
        {/* Left Section */}
        <div className="w-full md:w-2/5 flex flex-col items-center relative">
          <p
            className="text-6xl md:text-7xl lg:text-9xl font-header p-2 font-bold text-white mb-6"
            style={{
              WebkitTextStroke: "1px black",
              WebkitTextFillColor: "white",
              textShadow: "1px 1px 0px rgba(0, 0, 0, 0.5)",
            }}
          >
            $LIWU
          </p>

          {/* Panda Image */}
          <div className="relative md:mt-6">
            <Image
              src="/Images/liwu.png"
              alt="LiWU Panda"
              width={120}
              height={120}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/5 mt-6 p-4 md:mt-0 md:pl-8">
          <p className="text-sm md:text-lg font-beta font-medium text-white mb-4 leading-tight">
            In the vibrant world of innovation and blockchain technology, LiWU
            Panda emerges as a symbol of creativity, gaming, and connection.
            Inspired by the Chinese term “礼物” (Li Wù), meaning “gift,” LiWU
            Panda represents more than just a token—it’s a movement of
            generosity and community.
          </p>
          <p className="text-sm md:text-lg font-beta font-medium text-white mb-4 leading-tight">
            在充满活力的创新和区块链技术世界中，LiWU Panda 成为创造力、
            游戏和联系的象征。
            <br />
            LiWU Panda 的灵感来自中文词语“礼物”（Li Wù）， 意为“礼物”，它代表的不仅仅是一种代币，
            <br />
            更是一场慷慨和社区的运动。
          </p>
          <div className="flex justify-end">
            <button className="inline-flex items-center border border-black text-black bg-white px-4 py-2 text-sm font-bold cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
              <span>Read More</span>
              <MdArrowOutward className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirdropSections;
