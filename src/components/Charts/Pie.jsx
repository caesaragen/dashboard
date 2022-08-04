import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  PieSeries,
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationTooltip, AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';
import {
  pieChartData
} from '../../data/dummy';
import { useContextState } from '../../contexts/ContextProvider';

const PieChart = () => {
   const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useContextState();
  return (
    <div>
      <AccumulationChartComponent id='pie-chart' 
        title='Expenses by Category'
        legendSettings={{ visible: false }}
        enableSmartLabels={true}
        enableAnimation={false}
        center={{ x: '50%', y: '50%' }}
        tooltip={{ enable: true, format: '${point.x} : <b>${point.y}%</b>' }}
        background={currentMode === 'Dark' ? '#33373e' : '#ffffff'}
      >
        <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={pieChartData}  xName='x' yName='y'
            explode={true} explodeOffset='10%' explodeIndex={0}
            dataLabel={{
              visible: true,
              position: 'Inside', name: 'text',
              font: {
                fontWeight: '600'
              }
            }}
            radius='90%'
          >
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default PieChart