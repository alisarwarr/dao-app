//IMAGES
import { daiusdt, dai, usdt } from '../images';
//MATERIAL-UI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    tab: {
        fontSize: "1.25rem !important"
    },
    selectedTab: {
        color: "#eee !important",
    }
});


function Payment({
    tabValue_column,
    setTabValue_column,
    amount,
    setAmount
}: {
    tabValue_column: number,
    setTabValue_column: Function,
    amount: string,
    setAmount: Function
}) {
    const classes = useStyles();


    return (
        <div className="flex items-center flex-col bg-[#2d3153] rounded-xl pb-7">
            <div className="bg-[#1b1e31] flex justify-center w-full pt-3 pb-3 pl-7 pr-7 rounded-tl-xl rounded-tr-xl">
                <Tabs TabIndicatorProps={{ style: { background: '#eee' } }} value={tabValue_column} onChange={(event: React.SyntheticEvent, value: number) => setTabValue_column(value)}>
                    <Tab label="Deposit" className={classes.tab} classes={{ selected: classes.selectedTab }} sx={{ color: "#a8a8a8", textTransform: "capitalize", letterSpacing: "0.065rem", fontWeight: "bold" }} />
                    <Tab label="Withdraw" className={classes.tab} classes={{ selected: classes.selectedTab }} sx={{ color: "#a8a8a8", textTransform: "capitalize", letterSpacing: "0.065rem", fontWeight: "bold" }} />
                </Tabs>
            </div>

            <div className="text-white mt-6 w-full">
                {
                    tabValue_column === 0 && (
                        <div className="flex items-center flex-col ml-4 SCREEN510:ml-0 SCREEN510:w-full SCREEN510:flex SCREEN510:items-center SCREEN510:justify-center SCREEN510:flex-row SCREEN1130:block SCREEN1130:ml-1">
                            <div className="flex-[0.8] pl-3.5">
                                <p className="text-[0.95rem]"> Deposit your LP or ZAP⚡ in DAI or USDT </p>
                                <span className="text-[#a8a8a8] text-xs"> WALLET: </span>
                                <RadioGroup defaultValue="0 DAI-USDT BiLP">
                                    <FormControlLabel value="0 DAI-USDT BiLP" control={<Radio sx={{ '&, &.Mui-checked': { color: '#FFFFFF' } }} />} label={<span className="flex items-center"> <img src={daiusdt} alt="daiusdt" className="w-[53px] h-[47px] -ml-1" /> <span className="text-[0.945rem] font-semibold ml-1">0 DAI-USDT BiLP</span> </span>} />
                                    <FormControlLabel value="0 DAI" control={<Radio sx={{ '&, &.Mui-checked': { color: '#FFFFFF' } }} />} label={<span className="flex items-center"> <img src={dai} alt="dai" className="w-[28px] h-[28px]" /> <span className="text-[0.945rem] font-semibold ml-6">0 DAI</span> </span>} />
                                    <FormControlLabel value="0 USDT" control={<Radio sx={{ '&, &.Mui-checked': { color: '#FFFFFF' } }} />} label={<span className="flex items-center"> <img src={usdt} alt="usdt" className="w-[28px] h-[28px]" /> <span className="text-[0.945rem] font-semibold ml-6">0 USDT</span> </span>} />
                                </RadioGroup>
                                <div className="flex items-center mt-2 mb-3.5">
                                    <button className="bg-[#4C5480] text-sm font-thin mr-2 px-2.5 py-0.5 rounded text-white" onClick={() => alert("Clicked")}> <span> Buy Token </span> <LaunchIcon className="!w-[18px] !h-[18px] pb-0.5" /> </button>
                                    <button className="bg-[#4C5480] text-sm font-thin mr-2 px-2.5 py-0.5 rounded text-white" onClick={() => alert("Clicked")}> <span> Add Liquidity </span> <LaunchIcon className="!w-[18px] !h-[18px] pb-0.5" /> </button>
                                </div>
                            </div>

                            <div>
                                <div className="!flex SCREEN1130:!hidden inputBtn mt-2.5">
                                    <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" min="0" max="0" type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    <Button className="!bg-[#363B63] !text-[#F5F5FF] !border-transparent" variant="contained" onClick={() => setAmount("0")}> Max </Button>
                                </div>

                                <div className="!block SCREEN1130:!hidden bg-[#313759] w-[94.8%] rounded-2xl mt-6 mb-6">
                                    <div style={{ margin: "0 auto" }} className="w-[90%] pt-3 pb-3">
                                        <p className="text-[#a8a8a8] text-base mb-3"> BEEFY FEES </p>
                                        <div className="flex items-center">
                                            <div className="flex-[0.8325]"> <p className="text-[#a8a8a8] text-xs"> DEPOSIT FEE </p> <p className="text-white text-[0.95rem]"> 0% </p> </div>
                                            <div> <p className="text-[#a8a8a8] text-xs"> WITHDRAWAL FEE </p> <p className="text-white text-[0.95rem]"> 0.1% </p> </div>
                                        </div>
                                        <div className="mt-1">
                                            <div> <p className="text-[#a8a8a8] text-xs"> PERFORMANCE FEE </p> <p className="text-white text-[0.95rem]"> 4.5% </p> </div>
                                        </div>
                                        <p className="text-[#a8a8a8] text-xs mt-3"> Performance fees are already subtracted from the displayed APY. </p>
                                    </div>
                                </div>

                                <Button className="!block SCREEN1130:!hidden !bg-[#59a662] !text-[#F5F5FF] !border-transparent w-[94.8%]" variant="contained" onClick={() => alert("Clicked")}> Connect Wallet </Button>
                            </div>
                        </div>
                    )
                }
                {
                    tabValue_column === 1 && (
                        <div className="flex items-center flex-col ml-4 SCREEN510:ml-0 SCREEN510:w-full SCREEN510:flex SCREEN510:items-center SCREEN510:justify-center SCREEN510:flex-row SCREEN1130:block SCREEN1130:ml-1">
                            <div className="flex-[0.8] pl-3.5">
                                <p className="text-[0.95rem]"> Withdraw your LP or ZAP⚡ out to DAI or USDT </p>
                                <span className="text-[#a8a8a8] text-xs"> DEPOSITED: </span>
                                <RadioGroup defaultValue="0 DAI-USDT BiLP">
                                    <FormControlLabel value="0 DAI-USDT BiLP" control={<Radio sx={{ '&, &.Mui-checked': { color: '#FFFFFF' } }} />} label={<span className="flex items-center"> <img src={daiusdt} alt="daiusdt" className="w-[53px] h-[47px] -ml-1" /> <span className="text-[0.945rem] font-semibold ml-1">0 DAI-USDT BiLP</span> </span>} />
                                    <FormControlLabel value="DAI + USDT" control={<Radio sx={{ '&, &.Mui-checked': { color: '#FFFFFF' } }} />} label={<span className="flex items-center"> <img src={daiusdt} alt="daiusdt" className="w-[53px] h-[47px] -ml-1" /> <span className="text-[0.945rem] font-semibold ml-1">DAI + USDT</span> </span>} />
                                    <FormControlLabel value="DAI" control={<Radio sx={{ '&, &.Mui-checked': { color: '#FFFFFF' } }} />} label={<span className="flex items-center"> <img src={dai} alt="dai" className="w-[28px] h-[28px]" /> <span className="text-[0.945rem] font-semibold ml-6">DAI</span> </span>} />
                                    <FormControlLabel value="USDT" control={<Radio sx={{ '&, &.Mui-checked': { color: '#FFFFFF' } }} />} label={<span className="flex items-center"> <img src={usdt} alt="usdt" className="w-[28px] h-[28px]" /> <span className="text-[0.945rem] font-semibold ml-6">USDT</span> </span>} />
                                </RadioGroup>
                            </div>

                            <div>
                                <div className="!flex SCREEN1130:!hidden inputBtn mt-2.5">
                                    <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" min="0" max="0" type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    <Button className="!bg-[#363B63] !text-[#F5F5FF] !border-transparent" variant="contained" onClick={() => setAmount("0")}> Max </Button>
                                </div>

                                <div className="!block SCREEN1130:!hidden bg-[#313759] w-[94.8%] rounded-2xl mt-6 mb-6">
                                    <div style={{ margin: "0 auto" }} className="w-[90%] pt-3 pb-3">
                                        <p className="text-[#a8a8a8] text-base mb-3"> BEEFY FEES </p>
                                        <div className="flex items-center">
                                            <div className="flex-[0.8325]"> <p className="text-[#a8a8a8] text-xs"> DEPOSIT FEE </p> <p className="text-white text-[0.95rem]"> 0% </p> </div>
                                            <div> <p className="text-[#a8a8a8] text-xs"> WITHDRAWAL FEE </p> <p className="text-white text-[0.95rem]"> 0.1% </p> </div>
                                        </div>
                                        <div className="mt-1">
                                            <div> <p className="text-[#a8a8a8] text-xs"> PERFORMANCE FEE </p> <p className="text-white text-[0.95rem]"> 4.5% </p> </div>
                                        </div>
                                        <p className="text-[#a8a8a8] text-xs mt-3"> Performance fees are already subtracted from the displayed APY. </p>
                                    </div>
                                </div>

                                <Button className="!block SCREEN1130:!hidden !bg-[#59a662] !text-[#F5F5FF] !border-transparent w-[94.8%]" variant="contained" onClick={() => alert("Clicked")}> Connect Wallet </Button>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="!hidden SCREEN1130:!flex inputBtn mt-2.5">
                <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" min="0" max="0" type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                <Button className="!bg-[#363B63] !text-[#F5F5FF] !border-transparent" variant="contained" onClick={() => setAmount("0")}> Max </Button>
            </div>

            <div className="!hidden SCREEN1130:!block bg-[#313759] w-[94.8%] rounded-2xl mt-6 mb-6">
                <div style={{ margin: "0 auto" }} className="w-[90%] pt-3 pb-3">
                    <p className="text-[#a8a8a8] text-base mb-3"> BEEFY FEES </p>
                    <div className="flex items-center">
                        <div className="flex-[0.8325]"> <p className="text-[#a8a8a8] text-xs"> DEPOSIT FEE </p> <p className="text-white text-[0.95rem]"> 0% </p> </div>
                        <div> <p className="text-[#a8a8a8] text-xs"> WITHDRAWAL FEE </p> <p className="text-white text-[0.95rem]"> 0.1% </p> </div>
                    </div>
                    <div className="mt-1">
                        <div> <p className="text-[#a8a8a8] text-xs"> PERFORMANCE FEE </p> <p className="text-white text-[0.95rem]"> 4.5% </p> </div>
                    </div>
                    <p className="text-[#a8a8a8] text-xs mt-3"> Performance fees are already subtracted from the displayed APY. </p>
                </div>
            </div>

            <Button className="!hidden SCREEN1130:!block !bg-[#59a662] !text-[#F5F5FF] !border-transparent w-[94.8%]" variant="contained" onClick={() => alert("Clicked")}> Connect Wallet </Button>
        </div>
    )
}

export default Payment