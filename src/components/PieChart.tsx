//CHARTJS
import { Pie } from 'react-chartjs-2';
//MATERIAL-UI
import useMediaQuery from '@mui/material/useMediaQuery';


function PieChart({
    labels,
    datasets,
}: {
    labels: string[],
    datasets: object[]
}) {
    const screen400 = useMediaQuery('(min-width:400px)');


    return (
        <>
            {
                screen400 ? (
                    <Pie
                        data={{
                            labels,
                            datasets
                        }}
                        options={{
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                ) : (
                    <Pie
                        data={{
                            labels,
                            datasets
                        }}
                        height={220}
                        width={220}
                        options={{
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                )
            }
        </>
    )
}

export default PieChart;