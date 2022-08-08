//MATERIAL-UI
import HelpIcon from '@mui/icons-material/Help';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';


function Description({
     heading,
     text,
     data,
     para1,
     para2,
}: {
     heading: string,
     text: string,
     data: object[]
     para1: string,
     para2: string,
}) {
     return (
          <div className="bg-[#2d3153] rounded-xl mt-14">
               <div className="pt-4 pb-3 pl-7 pr-7 bg-[#1b1e31] -mt-4 rounded-tl-xl rounded-tr-xl">
                    <p className="text-white text-3xl mt-1"> {heading} <SignalCellularAltIcon fontSize="large" style={{ fill: "#59a662", marginLeft: "-0.4rem", marginBottom: "0.335rem" }} /> </p>
                    <p className="text-[#a8a8a8] text-sm"> {text} <HelpIcon className="!w-[17px] !h-[17px] mb-1 ml-0.5" /> </p>
               </div>

               <div className="p-7 -mt-6">
                    <>
                         {
                              data.map((item: any, i: number) => (
                                   <div key={i} className="mt-6">
                                        <div className="flex items-center"> <img src={item.pic} alt={item.text} /> <span className="text-[#cecdcd] ml-2 mb-1"> {item.text} <HelpIcon className="!w-[17px] !h-[17px] mb-1 ml-0.5" /> </span> </div>
                                        <p className="text-[#a8a8a8] ml-6 -mt-1"> {item.para} </p>
                                   </div>
                              ))
                         }
                    </>
                    <p className="mt-8 text-[#cecdcd] text-[0.9rem] leading-6 tracking-wide"> {para1} </p>
                    <p className="mt-4 text-[#cecdcd] text-[0.9rem] leading-6 tracking-wide"> {para2} </p>
               </div>
          </div>
     )
}

export default Description;