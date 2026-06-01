"use client";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";

import {
  createThirdwebClient,
  getContract,
  prepareContractCall,
  toWei,
  sendTransaction,
  sendAndConfirmTransaction,
} from "thirdweb";
import { base, bsc, polygonAmoy } from "thirdweb/chains";
import {
  ThirdwebProvider,
  useSendTransaction,
  useActiveAccount,
  useSendAndConfirmTransaction,
  useDisconnect,
  useActiveWallet,
  ConnectButton,
  useReadContract,
} from "thirdweb/react";

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});

const Hero = () => {
  const activeAccount = useActiveAccount();
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();

  // const contract = getContract({
  //   address: process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS!,
  //   chain: bsc,
  //   client,
  // });

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-no-repeat pt-20 sm:pt-24 md:pt-28">
      <Image
        src="/Images/bgphoto.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        className="brightness-75 -z-10"
        priority
      />
      {/* Navigation */}
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between items-center z-10">
        {/* Menu Button */}
        <button className="flex items-center border-2 gap-1 sm:gap-2 border-gray-100 bg-[#37302a] hover:bg-white text-white hover:text-black text-xs sm:text-sm md:text-base font-bold px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start">
          <FaTelegramPlane className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          <span className="hidden sm:inline">Connect With Telegram</span>
          <span className="sm:hidden">Telegram</span>
        </button>

        {/* Connect Button */}
        <div className="w-full sm:w-auto">
          <ConnectButton
            client={client}
            connectButton={{
              label: "Connect Wallet",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-end items-center flex-grow w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
        {/* Banner Image */}
        <Image
          className="object-contain w-auto h-auto max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl drop-shadow-lg -mb-4 sm:-mb-5 md:-mb-6 lg:-mb-8"
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
