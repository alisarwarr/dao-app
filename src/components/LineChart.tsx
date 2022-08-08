//CHARTJS
import { Line } from 'react-chartjs-2';


function LineChart({
    labels,
    datasets,
}: {
    labels: string[],
    datasets: object[]
}) {
    return (
        <Line
            data={{
                labels,
                datasets
            }}
            options={{
                scales: {
                    xAxes: [{
                        ticks: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }}
        />
    )
}

export default LineChart;