//COMPONENTS
import LineChart from './LineChart';


function LineChartComponent({
    heading,
    tabValue_chart,
    setTabValue_chart
}: {
    heading: string,
    tabValue_chart: string,
    setTabValue_chart: Function
}) {
    return (
        <div className="bg-[#2d3153] rounded-xl mt-14">
            <div className="flex items-center pt-4 pb-3 pl-7 pr-7 bg-[#1b1e31] -mt-4 rounded-tl-xl rounded-tr-xl flex-col SCREEN350:flex-row">
                <p className="flex-1 text-white text-2xl"> {heading} </p>

                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 mt-2 SCREEN350:mt-0">
                    <li className="mr-2" onClick={() => setTabValue_chart("TVL")}>
                        <p className={`inline-block py-3 px-4 rounded-lg cursor-pointer ${tabValue_chart === "TVL" ? `bg-[#59A662] text-white` : `hover:text-gray-900 hover:bg-gray-100`}`}> TVL </p>
                    </li>
                    <li className="mr-2" onClick={() => setTabValue_chart("Price")}>
                        <p className={`inline-block py-3 px-4 rounded-lg cursor-pointer ${tabValue_chart === "Price" ? `bg-[#59A662] text-white` : `hover:text-gray-900 hover:bg-gray-100`}`}> Price </p>
                    </li>
                    <li className="mr-2" onClick={() => setTabValue_chart("APY")}>
                        <p className={`inline-block py-3 px-4 rounded-lg cursor-pointer ${tabValue_chart === "APY" ? `bg-[#59A662] text-white` : `hover:text-gray-900 hover:bg-gray-100`}`}> APY </p>
                    </li>
                </ul>
            </div>

            {
                tabValue_chart === "TVL" && (
                    <LineChart
                        labels={["AVERAGE", "MOVING AVERAGE"]}
                        datasets={[
                            {
                                label: "AVERAGE",
                                data: [350, 700, 1050],
                                fill: true,
                                backgroundColor: "rgba(75,192,192,0.2)",
                                borderColor: "rgba(75,192,192,1)"
                            },
                            {
                                label: "MOVING AVERAGE",
                                data: [200, 550, 1300],
                                fill: false,
                                borderColor: "#742774"
                            }
                        ]}
                    />
                )
            }
            {
                tabValue_chart === "Price" && (
                    <LineChart
                        labels={["AVERAGE", "MOVING AVERAGE"]}
                        datasets={[
                            {
                                label: "AVERAGE",
                                data: [0.70, 1.40, 2.10],
                                fill: true,
                                backgroundColor: "rgba(75,192,192,0.2)",
                                borderColor: "rgba(75,192,192,1)"
                            },
                            {
                                label: "MOVING AVERAGE",
                                data: [0.90, 1.80, 2.10],
                                fill: false,
                                borderColor: "#742774"
                            }
                        ]}
                    />
                )
            }
            {
                tabValue_chart === "APY" && (
                    <LineChart
                        labels={["AVERAGE", "MOVING AVERAGE"]}
                        datasets={[
                            {
                                label: "AVERAGE",
                                data: [0.6, 1.9, 2.4],
                                fill: true,
                                backgroundColor: "rgba(75,192,192,0.2)",
                                borderColor: "rgba(75,192,192,1)"
                            },
                            {
                                label: "MOVING AVERAGE",
                                data: [0.3, 2.2, 2.4],
                                fill: false,
                                borderColor: "#742774"
                            }
                        ]}
                    />
                )
            }
        </div>
    )
}

export default LineChartComponent;