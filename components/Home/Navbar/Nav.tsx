const Nav = () => {
    return (
        <div className="fixed w-full transition-all duration-200 min-h-12 md:min-h-16 z-[1000] bg-neutral-800 border-b border-white">
            <div className="flex items-center justify-center h-full w-[95%] mx-auto">
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-center font-bold text-white px-2 md:px-4 leading-snug">
                    Phase 1 Airdrop begins 31st December 2024
                    <span className="text-yellow-500 mx-3 text-lg sm:text-xl md:text-2xl">
                        ||
                    </span>
                    Claims 29th January (Chinese New Year)
                </p>
            </div>
        </div>
    );
};

export default Nav;
