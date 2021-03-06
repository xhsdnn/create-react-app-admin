import React from 'react';
import './dashboard.css'

import { Row, Col, Calendar, Carousel } from 'antd';

// 引入图片
import suolong from "../../static/images/suolong.jpg"
import aisi from "../../static/images/aisi.jpeg"
import lufei from "../../static/images/lufei.jpeg"
import onepiece from "../../static/images/onepiece.jpeg"

// dashboard基本组件
const dashboardDatas = [
  {
    title: "访问量",
    msg: {
      amount: 67800
    }
  },
  {
    title: "下载量",
    msg: {
      amount: 34433
    }
  },
  {
    title: "安装量",
    msg: {
      amount: 34527
    }
  },
  {
    title: "留言",
    msg: {
      amount: 4797
    }
  }
];

function BashboardItem(props) {
  return <Col className="dashboard-item" xs={{span:10}} sm={{span:10}} lg={{span:4}}>
    <div>
      <span>{props.data.title}</span>
      <div className="dashboard-item__amount">{props.data.msg.amount}</div>
    </div>
  </Col>
}
const bashboardItems = dashboardDatas.map((item, index) => <BashboardItem key={index} data={item} />)

// 轮播图片
const imgs = [onepiece, suolong, aisi, lufei];

function CarouselImg(props) {
  return <img src={props.url} alt="" />
}
const CarouselImgs = imgs.map((img, index) => <CarouselImg key={index} url={img} />)

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Row>
          <Col span={1}></Col>
          <Col span={22}>
            <Row type="flex" justify="space-between">
              {bashboardItems}
            </Row>
          </Col>
          <Col span={1}></Col>
        </Row>

        <Row className="dashboard-row" type="flex" justify="space-around">
          <Col span={22}>
            <Carousel autoplay>
              {CarouselImgs}
            </Carousel>
          </Col>
        </Row>

        <Row className="dashboard-row" type="flex" justify="space-around">
          <Col style={{ border: '1px solid #d9d9d9', borderRadius: 4 }} span={22}>
            <Calendar fullscreen={false} />
          </Col>
        </Row>
        {/* <div style={{ width: 500, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          
        </div> */}
      </div>
    );
  }
}

export default Dashboard;