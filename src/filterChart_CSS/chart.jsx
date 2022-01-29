import ChartBar from './chartbar'
import './chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) =>
    dataPoint.value)
    let total = Math.max(...dataPointValues)

    return(
        <div className='chart' >
            {props.dataPoints.map((dataPoint) => (
                <ChartBar key={dataPoint.label}
                value={dataPoint.value}
                total={total}
                label={dataPoint.label} />
            ))}
        </div>
    )
}

export default Chart