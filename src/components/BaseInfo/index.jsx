import React from 'react';
import { Link } from 'react-router-dom';
import './base-info.css';

import { DB } from "../../utils/session.js"

import { Menu, Dropdown, Icon, Modal, Avatar } from 'antd';

// 基本信息列表内容
function Detail(props) {
    return <li>
        <span className="title">{props.data.title}</span>
        <span className="detail">
            {props.data.detail === "Avatar" ? <Avatar icon="user" /> : props.data.detail}
        </span>
    </li>
}

class BaseInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            currentUser: "",
            detailData: []
        };
        this.showInfoDialog = this.showInfoDialog.bind(this);
        this.hideInfoDialog = this.hideInfoDialog.bind(this);
        this.confirmInfoDialog = this.confirmInfoDialog.bind(this);
    }

    componentDidMount() {
        this.setState({
            currentUser: DB.show('currentUser'),
            detailData: [
                {
                    title: "头像：",
                    detail: "Avatar"
                },
                {
                    title: "用户名：",
                    detail: DB.show('currentUser')
                },
                {
                    title: "手机号：",
                    detail: DB.show(DB.show('currentUser')).phone
                },
                {
                    title: "E-mail：",
                    detail: DB.show(DB.show('currentUser')).email
                },
                {
                    title: "级别：",
                    detail: "管理员"
                }
            ]
        });
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
                        <Icon type="github" /> {this.state.currentUser}
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
                        {this.state.detailData.map((item, index) => <Detail key={index} data={item} />)}
                    </ul>
                </Modal>
            </div>
        );
    }
}

export default BaseInfo;