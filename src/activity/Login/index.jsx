import React from 'react';
import { Link } from 'react-router-dom';

import './login.css'

import { DB } from "../../utils/session.js"

import { Form, Icon, Input, Button, Checkbox, message, Tooltip } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                let userInfo = DB.show(values.userName);
                if(!userInfo) {
                    message.error("用户不存在！");
                    return;
                }

                if (values.password === userInfo.password) {
                    // 设置当前用户
                    DB.create("currentUser", values.userName);
                    
                    this.props.history.push('/home');
                } else {
                    message.error("用户名或密码错误！");
                }
            } else {
                message.error(err);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-header"></div>
                <div className="login-content">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                            <Tooltip title={
                                <div>
                                    <div>默认用户名：xhsdnn，密码：123456</div>
                                    <div>可以使用注册成功的用户名和密码！</div>
                                </div>
                            }>
                                <Icon className="info-tip" type="info-circle-o" />
                            </Tooltip>
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                            <Link to="/404" className="login-form-forgot">Forgot password</Link>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <Link to="/register">register now!</Link>
                        </FormItem>
                    </Form>
                </div>
                <div className="login-footer">
                    <p>Copyright © 1995-2018 XXXX有限公司</p>
                </div>
            </div>
        );
    }
}

export default Form.create()(Login);