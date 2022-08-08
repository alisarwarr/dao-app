function Header({
    heading,
    pic,
    badge1Text,
    badge2Text,
    chain,
    platform
}: {
    heading: string,
    pic: string,
    badge1Text: string,
    badge2Text: string,
    chain: string,
    platform: string
}) {
    return (
        <div className="flex items-center">
            <div className="flex-1 flex items-center">
                <img src={pic} alt="dai" className="w-[38px] h-[35px] SCREEN350:w-[41px] SCREEN350:h-[38px] SCREEN500:w-[46px] SCREEN500:h-[41px] SCREEN1000:w-[4.1rem] SCREEN1000:h-[3.7rem]" />
                <p className="text-[#d0d0da] text-xl ml-0.5 SCREEN350:text-2xl SCREEN350:ml-1 SCREEN500:text-[1.7rem] SCREEN500:ml-1.5 SCREEN500:mt-0.5 SCREEN1000:mt-0"> {heading} </p>
            </div>

            <div className="w-[23%] SCREEN350:w-[31%] flex flex-col items-end">
                <div className="flex items-center">
                    <div className="flex items-end flex-col SCREEN350:items-center SCREEN350:flex-row">
                        <span className="bg-[#4C5480] text-xs SCREEN500:text-sm font-semibold px-2.5 py-0.5 SCREEN350:pt-1.5 SCREEN500:pt-1 SCREEN1000:pt-0.5 rounded text-white SCREEN350:mr-2"> {badge1Text} </span>
                        <span className="bg-[#4C5480] text-xs SCREEN500:text-sm font-semibold px-2.5 py-0.5 SCREEN350:pt-1.5 SCREEN500:pt-1 SCREEN1000:pt-0.5 rounded text-white mt-1.5 SCREEN350:mt-0"> {badge2Text} </span>
                    </div>
                </div>

                <div className="flex items-center flex-col SCREEN1000:flex-row mt-2.5 SCREEN1000:mt-2">
                    <p className="flex-[0.95] text-[#a8a8a8] text-xs whitespace-nowrap SCREEN350:ml-1.5 SCREEN500:text-sm SCREEN1000:pr-3.5"> CHAIN: <span className="text-white"> {chain} </span> </p>
                    <p className="text-[#a8a8a8] text-xs whitespace-nowrap SCREEN500:text-sm"> PLATFORM: <span className="text-white"> {platform} </span> </p>
                </div>
            </div>
        </div>
    )
}

export default Header;