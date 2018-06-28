import React from 'react';
import './pie-chart.css'

// 引入 ECharts 主模块
import echarts from 'echarts/dist/echarts.common';
// 引入环形图
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class PieChart extends React.Component {
  componentDidMount() {
    var pieEchart = echarts.init(document.getElementsByClassName('pie')[0]);

    var option = {
      title: {
        text: '环形图',
        subtext: '当月饮食情况',
        left: 'center'
      },
      tooltip: {},
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['盖浇饭', '黄焖鸡', '面食', '汉堡', '其他']
      },
      series: [{
        name: '饮食种类',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 12, name: '盖浇饭' },
          { value: 2, name: '黄焖鸡' },
          { value: 8, name: '面食' },
          { value: 5, name: '汉堡' },
          { value: 3, name: '其他' }
        ]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    pieEchart.setOption(option);
  }

  render() {
    return (
      <div className="pie-chart">
        <div className="pie"></div>
      </div>
    );
  }
}

export default PieChart;