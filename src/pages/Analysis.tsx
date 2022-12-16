import PageTransition from '../components/PageTransition'
import Chart from 'react-apexcharts'
import { useState } from 'react'
import { ApexOptions } from 'apexcharts'
import { useTheme } from '@mui/material'

export default function Analysis() {
  const theme = useTheme()
  const [options] = useState<ApexOptions>({
    colors: [theme.palette.primary.main],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      marker: {
        show: false,
      },
    },
  })

  const [series, setSeries] = useState([
    {
      name: 's',
      data: [23, 23.3, 234, 67, 110, 110],
    },
  ])

  return (
    <PageTransition>
      <div>
        {/* <Chart
          options={options}
          series={series}
          type="line"
          height={140}
        />
         <Chart
          options={options}
          series={series}
          type="line"
          height={140}
        />
         <Chart
          options={options}
          series={series}
          type="line"
          height={140}
        /> */}
      </div>
    </PageTransition>
  )
}
