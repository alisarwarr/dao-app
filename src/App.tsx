//REACTJS
import { useState } from 'react';
//IMAGES
import { daiusdt, nexus, insurace, up } from './images';
//MATERIAL-UI
import HelpIcon from '@mui/icons-material/Help';
import useMediaQuery from '@mui/material/useMediaQuery';
//COMPONENTS
import Header from './components/Header';
import Column from './components/Column';
import PieChartComponent from './components/PieChartComponent';
import LineChartComponent from './components/LineChartComponent';
import Plan from './components/Plan';
import Description from './components/Description';
import Details from './components/Details';
import Payment from './components/Payment';
import Category from './components/Category';


function App() {
    const [tabValue_chart, setTabValue_chart] = useState<string>("TVL");
    const [tabValue_lp, setTabValue_lp] = useState<string>("1LP");



    const [tabValue_column, setTabValue_column] = useState<number>(0);
    const [amount, setAmount] = useState<string>("");


    const screen1130 = useMediaQuery('(min-width:1130px)');
    const screen315 = useMediaQuery('(min-width:315px)');


    return (
        <div className="app">

            <div style={{ margin: "0 auto" }} className="w-[90%] pt-16 pb-12">
                <Header
                    heading="DAI-USDT LP vault"
                    pic={daiusdt}
                    badge1Text="STABLE"
                    badge2Text="LOW RISK"
                    chain="BNB CHAIN"
                    platform="BISWAP"
                />


                {
                    screen315 ? (
                        <div className="flex items-center mt-6 SCREEN500:mt-8 SCREEN625:mt-9 SCREEN725:mt-10 SCREEN1000:mt-11 SCREEN1130:mt-12">
                            <div className="flex-[0.6] SCREEN500:flex-[0.8] SCREEN725:flex-[0.55]">
                                <Column
                                    data={[
                                        { text: "TVL", icon: "", detail: "$3.85" },
                                        { text: "APY", icon: <HelpIcon className="!w-[1.115rem] !h-[1.115rem] mb-1 ml-0.5" />, detail: "2.30%" },
                                        { text: "DAILY", icon: <HelpIcon className="!w-[1.115rem] !h-[1.115rem] mb-1 ml-0.5" />, detail: "0.0062%" }
                                    ]}
                                />
                            </div>

                            <div className="flex-[0.035] SCREEN500:flex-[0.1]" />

                            <div className="flex-[0.365] SCREEN500:flex-[0.1] SCREEN725:flex-[0.35]">
                                <Column
                                    data={[
                                        { text: "YOUR DEPOSIT", icon: "", detail: "0" },
                                        { text: "LAST HARVEST", icon: "", detail: "4h ago" }
                                    ]}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="mt-9">
                            <Column
                                data={[
                                    { text: "TVL", icon: "", detail: "$3.85" },
                                    { text: "APY", icon: <HelpIcon className="!w-[1.115rem] !h-[1.115rem] mb-1 ml-0.5" />, detail: "2.30%" },
                                    { text: "DAILY", icon: <HelpIcon className="!w-[1.115rem] !h-[1.115rem] mb-1 ml-0.5" />, detail: "0.0062%" },
                                    { text: "YOUR DEPOSIT", icon: "", detail: "0" },
                                    { text: "LAST HARVEST", icon: "", detail: "4h ago" }
                                ]}
                            />
                        </div>
                    )
                }


                {
                    screen1130 ? (
                        <div className="flex items-center mt-12">
                            <div style={{ flex: 0.55 }}>
                                <LineChartComponent
                                    heading="Historical rates"
                                    tabValue_chart={tabValue_chart}
                                    setTabValue_chart={setTabValue_chart}
                                />


                                <PieChartComponent
                                    heading="LP Breakdown"
                                    tabValue_lp={tabValue_lp}
                                    setTabValue_lp={setTabValue_lp}
                                />


                                <Plan
                                    heading="Strategy"
                                    btn1Text="Strategy address"
                                    btn2Text="Vault address"
                                    detail="The vault deposits the user's DAI-USDT BiLP in a BiSwap farm, earning the platform's governance token. Earned token is swapped for and in order to acquire more of the same LP token. To complete the compounding cycle, the new DAI-USDT BiLP is added to the farm, ready to go for the next earning event. The transaction cost required to do all this is socialized among the vault's users."
                                    topic="APY breakdown"
                                    data={[
                                        { heading: "TOTAL APY", detail: "2.29%" },
                                        { heading: "VAULT APR", detail: "2.14%" },
                                        { heading: "TRADING APR", detail: "0.13%" }
                                    ]}
                                    sheild1Text="Audited"
                                    sheild2Text="Community Audit"
                                />


                                <Description
                                    heading="10.0"
                                    text="SAFETY SCORE"
                                    data={[
                                        { pic: up, para: "Low-complexity strategy", text: "Beefy" },
                                        { pic: up, para: "Strategy is battle tested", text: "Beefy" },
                                        { pic: up, para: "Very low or zero expected IL", text: "Asset" },
                                        { pic: up, para: "High market-capitalization, lower volatility asset", text: "Asset" },
                                        { pic: up, para: "Platform audited by trusted reviewer", text: "Platform" },
                                        { pic: up, para: "Project contracts are verified", text: "Platform" },
                                    ]}
                                    para1="The higher the Beefy Safety Score, the safer your investment."
                                    para2="Your funds stay secure on Beefy.Finance. The team puts a lot of effort into checking vaults added. Each vault also has a panic facility to pause activity to protect user funds at short notice if the need arises, or even suspicious activity identified."
                                />


                                <Details
                                    heading="ASSET DETAILS"
                                    coin="DAI"
                                    btn1Text="Website"
                                    btn2Text="Token Contract"
                                    para="DAI is an Ethereum-based stablecoin (stable-price cryptocurrency) whose issuance and development is managed by the Maker Protocol and the MakerDAO decentralized autonomous organization."
                                />


                                <Details
                                    heading="ASSET DETAILS"
                                    coin="USDT"
                                    btn1Text="Website"
                                    btn2Text="Token Contract"
                                    para="Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold.Tether is the first stablecoin to be created and it is the most popular stablecoin used in the ecosystem."
                                />
                            </div>

                            <div style={{ flex: 0.1 }} />

                            <div style={{ flex: 0.35 }} className="-mt-[82.25rem]">
                                <Payment
                                    tabValue_column={tabValue_column}
                                    setTabValue_column={setTabValue_column}
                                    amount={amount}
                                    setAmount={setAmount}
                                />


                                <Category
                                    pic={insurace}
                                    heading="INSURACE.IO"
                                    text="Insure your deposit"
                                    para="InsurAce.io is a decentralized, multi-chain insurance protocol that protects users against smart contracts risk. Guarantee your deposits in return for a fee."
                                    btnText="Insure Vaults"
                                />


                                <Category
                                    pic={nexus}
                                    heading="NEXUS MUTUAL"
                                    text="Cover your deposit"
                                    para="Nexus Mutual is a blockchain-based alternative to traditional insurance. Become a mutual member to purchase comprehensive coverage for your Beefy positions."
                                    btnText="Cover Vaults"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <LineChartComponent
                                heading="Historical rate"
                                tabValue_chart={tabValue_chart}
                                setTabValue_chart={setTabValue_chart}
                            />


                            <PieChartComponent
                                heading="LP Breakdown"
                                tabValue_lp={tabValue_lp}
                                setTabValue_lp={setTabValue_lp}
                            />


                            <Plan
                                heading="Strategy"
                                btn1Text="Strategy address"
                                btn2Text="Vault address"
                                detail="The vault deposits the user's DAI-USDT BiLP in a BiSwap farm, earning the platform's governance token. Earned token is swapped for and in order to acquire more of the same LP token. To complete the compounding cycle, the new DAI-USDT BiLP is added to the farm, ready to go for the next earning event. The transaction cost required to do all this is socialized among the vault's users."
                                topic="APY breakdown"
                                data={[
                                    { heading: "TOTAL APY", detail: "2.29%" },
                                    { heading: "VAULT APR", detail: "2.14%" },
                                    { heading: "TRADING APR", detail: "0.13%" }
                                ]}
                                sheild1Text="Audited"
                                sheild2Text="Community Audit"
                            />


                            <Description
                                heading="10.0"
                                text="SAFETY SCORE"
                                data={[
                                    { pic: up, para: "Low-complexity strategy", text: "Beefy" },
                                    { pic: up, para: "Strategy is battle tested", text: "Beefy" },
                                    { pic: up, para: "Very low or zero expected IL", text: "Asset" },
                                    { pic: up, para: "High market-capitalization, lower volatility asset", text: "Asset" },
                                    { pic: up, para: "Platform audited by trusted reviewer", text: "Platform" },
                                    { pic: up, para: "Project contracts are verified", text: "Platform" },
                                ]}
                                para1="The higher the Beefy Safety Score, the safer your investment."
                                para2="Your funds stay secure on Beefy.Finance. The team puts a lot of effort into checking vaults added. Each vault also has a panic facility to pause activity to protect user funds at short notice if the need arises, or even suspicious activity identified."
                            />


                            <Details
                                heading="ASSET DETAILS"
                                coin="DAI"
                                btn1Text="Website"
                                btn2Text="Token Contract"
                                para="DAI is an Ethereum-based stablecoin (stable-price cryptocurrency) whose issuance and development is managed by the Maker Protocol and the MakerDAO decentralized autonomous organization."
                            />


                            <Details
                                heading="ASSET DETAILS"
                                coin="USDT"
                                btn1Text="Website"
                                btn2Text="Token Contract"
                                para="Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold.Tether is the first stablecoin to be created and it is the most popular stablecoin used in the ecosystem."
                            />


                            <div className="mt-10">
                                <Payment
                                    tabValue_column={tabValue_column}
                                    setTabValue_column={setTabValue_column}
                                    amount={amount}
                                    setAmount={setAmount}
                                />


                                <Category
                                    pic={insurace}
                                    heading="INSURACE.IO"
                                    text="Insure your deposit"
                                    para="InsurAce.io is a decentralized, multi-chain insurance protocol that protects users against smart contracts risk. Guarantee your deposits in return for a fee."
                                    btnText="Insure Vaults"
                                />


                                <Category
                                    pic={nexus}
                                    heading="NEXUS MUTUAL"
                                    text="Cover your deposit"
                                    para="Nexus Mutual is a blockchain-based alternative to traditional insurance. Become a mutual member to purchase comprehensive coverage for your Beefy positions."
                                    btnText="Cover Vaults"
                                />
                            </div>
                        </>
                    )
                }
            </div>

        </div>
    )
}

export default App;