
import './Chart.css'
import {  LineChart } from '@mui/x-charts'
import React from 'react'

const ChartMui = () => {
const date=new Date()
const month:number=date.getMonth()

const months=[
    'Janeiro',
    'Fevereiro',
    'Marco',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]
console.log(months[month]);
const nowMonth=months[month]
console.log(nowMonth);

const dataClientes=[1,2,4,5,8,2,8,11]
const dataProjects=[2,4,6,9,4,7,9,10]
  return (
    <div className='chart'>
      <LineChart 
      series={[
        { data: [...dataClientes], stack: 'A', label: 'Clientes' },
        { data: [...dataProjects], stack: 'B', label: 'Servicos concluidos' },
      ]}
      xAxis={[{scaleType:'band',data:months}]}
      width={472}
      height={400}
    />   
    </div>
  )
}

export default ChartMui
