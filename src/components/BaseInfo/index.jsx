import React from 'react';
import { Link } from 'react-router-dom';
import './base-info.css';

import { Menu, Dropdown, Icon, Modal, Avatar } from 'antd';

// 基本信息数据
const detailData = [
    {
        title: "头像：",
        detail: "Avatar"
    },
    {
        title: "用户名：",
        detail: "xhsdnn"
    },
    {
        title: "手机号：",
        detail: "16619779X4X"
    },
    {
        title: "github：",
        detail: "https://github.com/xhsdnn"
    },
    {
        title: "E-mail：",
        detail: "daiqiangsummy@gmail.com"
    },
    {
        title: "级别：",
        detail: "管理员"
    }
];
// 基本信息列表内容
function Detail(props) {
    return <li>
        <span className="title">{props.data.title}</span>
        <span className="detail">
            {props.data.detail === "Avatar" ? <Avatar icon="user" /> : props.data.detail}
        </span>
    </li>
}
const details = detailData.map((item, index) => <Detail key={index} data={item} />)

class BaseInfo extends React.Component {
    constructor() {
        super();
        this.state = { visible: false };
        this.showInfoDialog = this.showInfoDialog.bind(this);
        this.hideInfoDialog = this.hideInfoDialog.bind(this);
        this.confirmInfoDialog = this.confirmInfoDialog.bind(this);
    }

    showInfoDialog() {
        this.setState({
            visible: true,
        });
    }

    hideInfoDialog() {
        this.setState({
            visible: false,
        });
    }

    confirmInfoDialog() {
        this.setState({
            visible: false,
        });
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <span onClick={this.showInfoDialog}><Icon type="user" /> 基本信息</span>
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
                {/* dialog对话框 */}
                <Modal
                    title="基本信息"
                    visible={this.state.visible}
                    onOk={this.confirmInfoDialog}
                    onCancel={this.hideInfoDialog}
                >
                    <ul className="info-detail">
                        {details}
                        {/* <li>
                            <span className="title">头像：</span>
                            <span className="detail"><Avatar icon="user" /></span>
                        </li>
                        <li>
                            <span className="title">用户名：</span>
                            <span className="detail">xhsdnn</span>
                        </li> */}
                    </ul>
                </Modal>
            </div>
        );
    }
}

export default BaseInfo;