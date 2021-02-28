import { Form, Input, Button, Checkbox, Typography,Tooltip } from "antd";
import { Row, Col } from 'antd';
import { QuestionCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./register.css";
import { postValidCode, postRegister } from "../services/login";
const { Title } = Typography;

export default function Register({ setToken }) {
	const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
	return (
		<div className="register">
			<div className="register_wrapper">
				<Title level={3}>Login</Title>
				<Form
					form={form}
					name="register"
					onFinish={onFinish}
					scrollToFirstError
				>
					<Form.Item
						name="email"
						label="E-mail"
						rules={[
							{
								type: "email",
								message: "The input is not valid E-mail!",
							},
							{
								required: true,
								message: "Please input your E-mail!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name="password"
						label="Password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
						hasFeedback
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="confirm"
						label="Confirm Password"
						dependencies={["password"]}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please confirm your password!",
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue("password") === value) {
										return Promise.resolve();
									}
									return Promise.reject(
										new Error(
											"The two passwords that you entered do not match!"
										)
									);
								},
							}),
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="nickname"
						label={
							<span>
								Nickname&nbsp;
								<Tooltip title="What do you want others to call you?">
									<QuestionCircleOutlined />
								</Tooltip>
							</span>
						}
						rules={[
							{
								required: true,
								message: "Please input your nickname!",
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item label="验证码" extra="请输入收到的验证码">
						<Row gutter={8}>
							<Col span={12}>
								<Form.Item
									name="validCode"
									noStyle
									rules={[{ required: true, message: "请输入收到的验证码" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Button>获得验证码</Button>
							</Col>
						</Row>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit">
							Register
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}
Register.propTypes = {
	setToken: PropTypes.func.isRequired,
};
