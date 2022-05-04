import React from 'react';
import Chart from 'react-apexcharts'



function PieChartCerti(props) {
  const no = props.total - props.certi;

  const series = [no, props.certi];
  const labels = ['No certificados', 'Certificados'];
  const colors = ['#FE0000','#00FE08'];

 
 
  const options = {labels,colors};

  return (
    <div className='pie'>
      <Chart options={options} series={series}  type="pie" width="380" />

      <h1></h1>
    </div>
  )
}

export default PieChartCerti;