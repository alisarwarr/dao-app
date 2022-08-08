//IMAGES
import { daiusdt, dai, usdt } from '../images';
//COMPONENTS
import PieChart from './PieChart';
import Table from './Table';


function PieChartComponent({
    heading,
    tabValue_lp,
    setTabValue_lp
}: {
    heading: string,
    tabValue_lp: string,
    setTabValue_lp: Function
}) {
    return (
        <div className="bg-[#2d3153] rounded-xl mt-14">
            <div className="flex items-center pt-4 pb-3 pl-7 pr-7 bg-[#1b1e31] -mt-4 rounded-tl-xl rounded-tr-xl flex-col SCREEN350:flex-row">
                <p className="flex-1 text-white text-2xl"> {heading} </p>

                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 mt-2 SCREEN350:mt-0">
                    <li className="mr-2" onClick={() => setTabValue_lp("1LP")}>
                        <p className={`inline-block py-3 px-4 rounded-lg cursor-pointer ${tabValue_lp === "1LP" ? `bg-[#59A662] text-white` : `hover:text-gray-900 hover:bg-gray-100`}`}> 1LP </p>
                    </li>
                    <li className="mr-2" onClick={() => setTabValue_lp("Total Pool")}>
                        <p className={`inline-block py-3 px-4 rounded-lg cursor-pointer ${tabValue_lp === "Total Pool" ? `bg-[#59A662] text-white` : `hover:text-gray-900 hover:bg-gray-100`}`}> Total Pool </p>
                    </li>
                </ul>
            </div>

            <div className="flex items-center flex-col SCREEN625:flex-row">
                <div className="ml-14 -mt-12 SCREEN400:mt-9 SCREEN400:mb-[2.405rem] SCREEN625:flex-[0.3] SCREEN625:ml-0">
                    <PieChart
                        labels={["DAI", "USDT"]}
                        datasets={[
                            {
                                data: [50, 50],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                ],
                                hoverBackgroundColor: [
                                    'rgba(255, 0, 55, 0.2)',
                                    'rgba(0, 153, 255, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                ],
                                borderWidth: 2
                            }
                        ]}
                    />
                </div>

                <div className="w-[99%] -mt-11 border-l-[1px] border-r-[1px] border-t-[1px] SCREEN400:mt-0 SCREEN625:w-full SCREEN625:border-r-0 SCREEN625:border-t-0">
                    {
                        tabValue_lp === "1LP" && (
                            <Table
                                data={[
                                    { pic: dai, name: 'DAI', tokenAmount: "1", value: "$1.00" },
                                    { pic: usdt, name: 'USDT', tokenAmount: "1", value: "$1.01" },
                                    { pic: daiusdt, name: 'LP', tokenAmount: "1", value: "$2.01" },
                                ]}
                            />
                        )
                    }
                    {
                        tabValue_lp === "Total Pool" && (
                            <Table
                                data={[
                                    { pic: dai, name: 'DAI', tokenAmount: "1,522,847.77", value: "$1.52M" },
                                    { pic: usdt, name: 'USDT', tokenAmount: "1,525,433.3", value: "$1.53M" },
                                    { pic: daiusdt, name: 'LP', tokenAmount: "1,516,246.732", value: "$3.05M" },
                                ]}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default PieChartComponent;