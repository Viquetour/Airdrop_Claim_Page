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

  const contract = getContract({
    address: process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS!,
    chain: bsc,
    client,
  });

  const handleClicker = async () => {
    if (!activeAccount) {
      toast.error("Connect your wallet to get started");
      return;
    }
    const notification = toast.loading("Preparing your airdrop..");

    const transaction = prepareContractCall({
      contract,
      method: "function RegisterAirDrop() payable",
      params: [],
    });

    console.log("TRANSACTION ACTIVE ACCOUNT IS ", activeAccount);

    const { transactionHash } = await sendAndConfirmTransaction({
      account,
      transaction,
    });
    console.log("TRANSACTION HASH IS ", transactionHash);
    if (transactionHash) {
      // saveDataToFirestore(data, transactionHash);
      toast.success(
        "You have successfully registered for the airdrop. Check your wallet in a few hours.",
        {
          id: notification,
        }
      );
    } else {
      toast.error("Whoops something went wrong!", {
        id: notification,
      });
    }
  };

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
          <div className="relative md:mt-44">
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
            LiWU Panda 的灵感来自中文词语“礼物”（Li Wù），
            意为“礼物”，它代表的不仅仅是一种代币，
            <br />
            更是一场慷慨和社区的运动。
          </p>
          {!activeAccount ? (
            <p>Connect your wallet to claim tokens</p>
          ) : (
            <div className=" pt-14 pr-40">
              <div className="flex justify-center pr-96 h-20 w-50">
                <button
                  onClick={handleClicker}
                  className="inline-flex rounded-lg items-center border border-black text-black bg-white px-4 py-2 text-sm font-bold cursor-pointer hover:bg-blue-200 hover:text-black transition-colors  duration-300 easin-out"
                >
                  CLAIM TOKENS &#x1FA99;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AirdropSections;
