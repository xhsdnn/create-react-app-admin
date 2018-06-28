import React from 'react';

import './home.css';
import HomeContent from '../../components/HomeContent';
import HomeHeader from '../../components/HomeHeader';
import TimeClock from '../../components/TimeClock';

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleRouter = this.toggleRouter.bind(this);
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  toggleRouter(options) {
    this.props.history.push('/home/' + options.key);
  }

  render() {
    return (
      <div className="home">
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
          >
            <div className="logo">
              admin
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={this.toggleRouter}>
              <Menu.Item key="dashboard">
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </Menu.Item>
              <Menu.Item key="tables">
                <Icon type="table" />
                <span>Tables</span>
              </Menu.Item>
              <SubMenu key="charts" title={<span><Icon type="pie-chart" /><span>Charts</span></span>}>
                <Menu.Item key="pie-chart">pie-chart</Menu.Item>
                <Menu.Item key="area-chart">area-chart</Menu.Item>
                <Menu.Item key="bar-chart">bar-chart</Menu.Item>
                <Menu.Item key="line-chart">line-chart</Menu.Item>
              </SubMenu>
            </Menu>
            {/* 显示当前时间 */}
            <TimeClock format="YYYY-MM-DD hh:mm:ss"/>
          </Sider>
          <Layout className={this.state.collapsed ? 'collapsed' : 'uncollapsed'}>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <HomeHeader />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                <HomeContent />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Home;