import { Form, Input, Button, Checkbox,Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React,{useState} from "react";
const {Title} = Typography

const LoginForm = () => {
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
      <div className="login_wrapper">
        <Title level={3}>Login</Title>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
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
                onChange={e=>setUsername(e.target.value)}/>
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

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
  );
};

export default LoginForm;