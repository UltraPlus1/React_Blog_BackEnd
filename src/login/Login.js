import { Form, Input, Button, Checkbox,Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React,{useState} from "react";
import PropTypes from "prop-types";
import './login.css'
import {postLogin} from "../services/login"
const {Title} = Typography

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        try{
            const resp = await postLogin({
                username,
                password
            });
            console.log(resp.data.status)
            setToken(resp.data.status);
            window.location.reload()
        }catch (e) {
            console.log(e)
        }

    }

    return (
        <div className="login">
            <div className="login_wrapper">
                <Title level={3}>Login</Title>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder="Username"
                            onChange={e=>setUserName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="#">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="#">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        </div>

    );
};
Login.propTypes = {
    setToken:PropTypes.func.isRequired
}
