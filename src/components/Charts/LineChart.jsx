import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries
} from '@syncfusion/ej2-react-charts';
import {
  lineCustomSeries,
  LinePrimaryYAxis,
  LinePrimaryXAxis
} from '../../data/dummy';
import { useContextState } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useContextState();
  return (
    <div>
      <ChartComponent
        id='line-chart'
        height='420px'
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373e' : '#ffffff'}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
        </ChartComponent>
    </div>
  )
}

export default LineChart