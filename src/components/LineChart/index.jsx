import React from 'react';
import './line-chart.css'

// 引入 ECharts 主模块
import echarts from 'echarts/dist/echarts.common';
// 引入折线图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class LineChart extends React.Component {
  componentDidMount() {
    var lineEchart = echarts.init(document.getElementsByClassName('line')[0]);

    var option = {
      title: {
        text: '折线图'
      },
      tooltip: {},
      legend: {
        data: ['李雷', '韩梅梅']
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        name: '步数'
      },
      series: [{
        name: "李雷",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      },{
        name: "韩梅梅",
        data: [720, 590, 930, 1009, 830, 1001, 1567],
        type: 'line'
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    lineEchart.setOption(option);
  }

  render() {
    return (
      <div className="line-chart">
        <div className="line"></div>
      </div>
    );
  }
}

export default LineChart;