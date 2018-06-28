import React from 'react';
import './bar-chart.css'

// 引入 ECharts
import echarts from 'echarts/dist/echarts.common';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class BarChart extends React.Component {
  componentDidMount() {
    var barEchart = echarts.init(document.getElementsByClassName('bar')[0]);

    var option = {
      title: {
        text: '柱状图'
      },
      tooltip: {},
      legend: {
        data: ['身高', "体重"]
      },
      xAxis: {
        data: ["小明", "小王", "小李", "小丽", "小刚", "小白"]
      },
      yAxis: {
        name: "数据"
      },
      series: [{
        name: '身高',
        type: 'bar',
        data: [175, 180, 178, 195, 170, 172]
      },
      {
        name: '体重',
        type: 'bar',
        data: [65, 70, 80, 90, 82, 79]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    barEchart.setOption(option);
  }

  render() {
    return (
      <div className="bar-chart">
        <div className="bar"></div>
      </div>
    );
  }
}

export default BarChart;