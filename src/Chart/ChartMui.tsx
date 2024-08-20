
import './Chart.css'
import {  PieChart } from '@mui/x-charts'
import React from 'react'
import { useAuthContext } from '../Components/Context/MyContextProvider'

const ChartMui = () => {
const {views,allUsers}=useAuthContext()

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

  return (
    <div >
      
    <PieChart
      series={[
        {
          data: [
            { id: 0, value:views, label: 'Visitas' },
            { id: 1, value:allUsers, label: 'Usuarios'},
          ],
        },
      ]
    } 
      width={400}
      height={200}
    />   
    </div>
  )
}

export default ChartMui
