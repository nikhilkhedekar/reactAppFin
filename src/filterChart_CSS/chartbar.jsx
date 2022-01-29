import './chartbar.css'

const ChartBar = (props) => {
    let barProgress = '0';
    if(props.total > 0){
        barProgress = Math.round((props.value/props.total)*100) 
    }
    console.log(barProgress)
    return(
        <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barProgress }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
}

export default ChartBar