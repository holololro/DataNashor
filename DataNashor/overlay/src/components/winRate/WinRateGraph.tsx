import React, { useRef, useState, useEffect } from 'react';
import type { ChartData, ChartArea, ChartType } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import {
  BarWrapper,
  RateWrapper,
  WinningRate,
  GraphTitle,
  Graph,
} from './styles/winRateGraph.s';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  indexAxis: 'y' as const,
  maintainAspectRatio: false,
  events: [],
  scales: {
    x: {
      max: 100,
      display: false,
      stacked: true,
      grid: {
        offset: true,
      },
    },
    y: {
      max: 100,
      display: false,
      stacked: true,
    },
  },
  elements: {
    bar: {
      borderWidth: 1,
      borderRadius: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'right' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = [''];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [80.4],
      borderColor: '#e84057',
      backgroundColor: '#e84057',
      borderWidth: 0,
    },
    {
      label: 'Dataset 2',
      data: [100],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#5383e8',
      borderWidth: 0,
    },
  ],
};
const WinRateGraph = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }
    const chartData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
      })),
    };

    setChartData(chartData);
  }, []);
  return (
    <Graph>
      <BarWrapper>
        <Chart type="bar" data={data} options={options} height="5px" />
      </BarWrapper>
      <RateWrapper>
        <WinningRate>80.4</WinningRate>
        <GraphTitle>AI 승률</GraphTitle>
        <WinningRate>19.6</WinningRate>
      </RateWrapper>
    </Graph>
  );
};

export default WinRateGraph;
