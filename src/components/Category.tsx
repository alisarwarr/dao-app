//MATERIAL-UI
import Button from '@mui/material/Button';


function Category({
    pic,
    heading,
    text,
    para,
    btnText,
}: {
    pic: any
    heading: string,
    text: string,
    para: string,
    btnText: string
}) {
    return (
        <div className="flex items-center justify-center flex-col bg-[#2d3153] rounded-xl p-4 pb-7 mt-9">
            <div className="flex items-center bg-[#1b1e31] w-[108.5%] SCREEN350:w-[108%] SCREEN500:w-[105%] SCREEN725:w-[104%] SCREEN1130:w-[110%] h-[6.5rem] -mt-4 rounded-tl-xl rounded-tr-xl">
                <div className="mt-1 ml-8">
                    <img src={pic} alt="insurace" className="w-[3.25rem] h-[3.0625rem] -ml-1" />
                </div>

                <div className="mt-1 ml-4">
                    <p className="text-[#a8a8a8] text-sm"> {heading} </p>
                    <p className="text-white text-2xl"> {text} </p>
                </div>
            </div>

            <p className="text-[#cecdcd] text-[0.9rem] w-[94.8%] mt-5 mb-5"> {para} </p>

            <Button className="!bg-[#1b1e31] !text-[#F5F5FF] !border-transparent w-[94.8%]" variant="contained" onClick={() => alert("Clicked")}> {btnText} </Button>
        </div>

    )
}

export default Category;