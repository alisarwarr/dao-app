//IMAGES
import { shield } from '../images';
//MATERIAL-UI
import LaunchIcon from '@mui/icons-material/Launch';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CodeIcon from '@mui/icons-material/Code';


function Plan({
    heading,
    btn1Text,
    btn2Text,
    topic,
    detail,
    data,
    sheild1Text,
    sheild2Text
}: {
    heading: string,
    btn1Text: string,
    btn2Text: string,
    topic: string,
    detail: string,
    data: any[],
    sheild1Text: string,
    sheild2Text: string
}) {
    return (
        <div className="bg-[#2d3153] rounded-xl mt-14">
            <div className="pt-4 pb-3 pl-7 pr-7 bg-[#1b1e31] -mt-4 rounded-tl-xl rounded-tr-xl">
                <p className="text-white text-3xl mt-1"> {heading} </p>
                <div className="flex items-center mt-3 mb-3.5">
                    <button className="bg-[#4C5480] text-base font-thin mr-2 px-2.5 py-0.5 rounded text-white" onClick={() => alert("Clicked")}> <InsertLinkIcon className="!w-[18px] !h-[18px] pb-0.5" /> <span> {btn1Text} </span> <LaunchIcon className="!w-[18px] !h-[18px] pb-0.5" /> </button>
                    <button className="bg-[#4C5480] text-base font-thin mr-2 px-2.5 py-0.5 rounded text-white" onClick={() => alert("Clicked")}> <CodeIcon className="!w-[18px] !h-[18px] pb-0.5" /> <span> {btn2Text} </span> <LaunchIcon className="!w-[18px] !h-[18px] pb-0.5" /> </button>
                </div>
            </div>

            <div className="p-7">
                <p className="text-[#cecdcd] text-[0.9rem] leading-6 tracking-wide"> {detail} </p>
                <p className="text-[#cecdcd] text-2xl mt-6"> {topic} </p>
                <div className="flex items-center justify-between w-[60%] mt-2">
                    {
                        data.map((item: any, i: number) => (
                            <div key={i}> <p className="text-[#a8a8a8] text-[0.85rem]"> {item.heading} </p> <p className="text-[#cecdcd] text-base"> {item.detail} </p> </div>
                        ))
                    }
                </div>
                <div className="flex items-center justify-between w-[70%] mt-8">
                    <div className="flex items-center"> <img src={shield} alt="shield" /> <span className="text-[#cecdcd] font-semibold tracking-wide ml-3"> {sheild1Text} </span> </div>
                    <div className="flex items-center"> <img src={shield} alt="shield" /> <span className="text-[#cecdcd] font-semibold tracking-wide ml-3"> {sheild2Text} </span> </div>
                </div>
            </div>
        </div>
    )
}

export default Plan;