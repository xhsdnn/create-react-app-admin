import React from 'react';
import { Link } from 'react-router-dom';
import './base-info.css';

import { Menu, Dropdown, Icon } from 'antd';

class BaseInfo extends React.Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <Link to="/404"><Icon type="user" /> 基本信息</Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to="/404"><Icon type="setting" /> 设置</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3"><Link to="/"><Icon type="logout" /> 退出登录</Link></Menu.Item>
            </Menu>
        );
        return (
            <div className="base-info">
                <Dropdown overlay={menu}>
                    <div className="ant-dropdown-link" href="#">
                    <Icon type="github" /> xhsdnn
                    </div>
                </Dropdown>
            </div>
        );
    }
}

export default BaseInfo;