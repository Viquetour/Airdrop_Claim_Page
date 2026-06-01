"use client";
import Image from "next/image";
import {
  createThirdwebClient,
  getContract,
  prepareContractCall,
  toWei,
  sendAndConfirmTransaction,
  sendTransaction,
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

import toast from "react-hot-toast";
import { id } from "ethers/lib/utils";

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});

const AirdropSections = () => {
  const activeAccount = useActiveAccount();
  const account = useActiveAccount()!;
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();

  // const contract = getContract({
  //   address: process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS!,
  //   chain: bsc,
  //   client,
  // });

  const handleClicker = async () => {
    if (!activeAccount) {
      toast.error("Connect your wallet to get started");
      return;
    }
    toast.success("Airdrop claim registered! Check your wallet for tokens.", {
      duration: 4000,
    });
  };

  return (
    <div className="w-full h-auto md:h-[600px] relative border-t-4 border-b-4 border-gray-800 bg-[#5eb8df] px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-8">
      {/* Main Flex Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-end gap-6 sm:gap-8 md:gap-10 lg:gap-12 h-full">
        {/* Left Section */}
        <div className="w-full lg:w-2/5 flex flex-col items-center justify-end lg:justify-end pb-0">
          {/* Logo Text */}
          <p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-header font-bold text-white mb-1 sm:mb-2 md:mb-2 text-center"
            style={{
              WebkitTextStroke: "0.5px black",
              WebkitTextFillColor: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            $LIWU
          </p>

          {/* Panda Image */}
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 -mb-4 sm:-mb-5 md:-mb-6 lg:-mb-8">
            <Image
              src="/Images/liwu.png"
              alt="LiWU Panda"
              width={200}
              height={200}
              className="rounded-lg drop-shadow-lg object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/5 mt-4 p-4 md:mt-0 md:pl-6 flex flex-col justify-end items-center lg:items-start">
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
            LiWU Panda 的灵感来自中文词语“礼物”（Li Wù），
            意为“礼物”，它代表的不仅仅是一种代币，
            <br />
            更是一场慷慨和社区的运动。
          </p>
          {!activeAccount ? (
            <button
              onClick={handleClicker}
              className="inline-flex justify-center items-center gap-2 rounded-lg border-2 border-blue-500 text-gray-800 bg-gradient-to-b from-blue-200 to-blue-300 font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base cursor-pointer transition-all duration-150 shadow-[0_6px_12px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_16px_rgba(59,130,246,0.5)] hover:-translate-y-1 active:shadow-[0_2px_4px_rgba(59,130,246,0.2)] active:translate-y-0.5"
            >
              Connect Wallet First
            </button>
          ) : (
            <button
              onClick={handleClicker}
              className="inline-flex justify-center items-center gap-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base border border-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 active:scale-95"
            >
              Claim Airdrop
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AirdropSections;
