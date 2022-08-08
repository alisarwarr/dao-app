//MATERIAL-UI
import LaunchIcon from '@mui/icons-material/Launch';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CodeIcon from '@mui/icons-material/Code';


function Details({
    heading,
    coin,
    btn1Text,
    btn2Text,
    para
}: {
    heading: string,
    coin: string,
    btn1Text: string,
    btn2Text: string,
    para: string
}) {
    return (
        <div className="bg-[#2d3153] rounded-xl mt-14">
            <div className="pt-4 pb-3 pl-7 pr-7 bg-[#1b1e31] -mt-4 rounded-tl-xl rounded-tr-xl">
                <p className="text-[#a8a8a8]"> {heading} </p>
                <p className="text-white text-3xl mt-0.5"> {coin} </p>
                <div className="flex items-center mt-3 mb-3.5">
                    <button className="bg-[#4C5480] text-base font-thin mr-2 px-2.5 py-0.5 rounded text-white" onClick={() => alert("Clicked")}> <InsertLinkIcon className="!w-[18px] !h-[18px] pb-0.5" /> <span> {btn1Text} </span> <LaunchIcon className="!w-[18px] !h-[18px] pb-0.5" /> </button>
                    <button className="bg-[#4C5480] text-base font-thin mr-2 px-2.5 py-0.5 rounded text-white" onClick={() => alert("Clicked")}> <CodeIcon className="!w-[18px] !h-[18px] pb-0.5" /> <span> {btn2Text} </span> <LaunchIcon className="!w-[18px] !h-[18px] pb-0.5" /> </button>
                </div>
            </div>

            <p className="p-7 text-[#cecdcd] text-[0.9rem] leading-6 tracking-wide"> {para} </p>
        </div>
    )
}

export default Details;