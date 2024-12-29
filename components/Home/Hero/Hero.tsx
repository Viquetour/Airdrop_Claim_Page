import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full px-4 py-6 sm:px-6 lg:px-10 bg-no-repeat">
  <Image
    src="/Images/bgphoto.jpg"
    alt="Background"
    layout="fill"
    objectFit="cover"
    objectPosition="top"
    className="brightness-80"
    priority
  />
      {/* Navigation */}
      <div className="absolute top-16 lg:top-20 left-4 right-4 flex justify-between items-center z-10">
        {/* Menu Button */}
        <button className="border-2 border-gray-100 bg-[#37302a] text-white text-sm md:text-lg font-bold px-4 py-2 hover:bg-white hover:text-black transition-colors">
          MENU
        </button>

        {/* Connect Button */}
        <button className="flex items-center border-2 border-gray-100 bg-[#37302a] text-white text-sm md:text-lg font-bold px-4 py-2 gap-2 hover:bg-white hover:text-black transition-colors">
          <FaXTwitter className="h-4 w-4 md:h-5 md:w-5" />
          CONNECT WITH X
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-end items-center h-full w-full relative z-0">
        {/* Banner Image */}
        <Image
          className="object-contain mb-10 max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]"
          src="/Images/banner.png"
          alt="Banner"
          width={500}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
