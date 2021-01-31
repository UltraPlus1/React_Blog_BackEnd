import React, { useState } from "react";
import { Modal, Button } from "antd";
import LoginForm from "./LoginForm";
import "./login.css";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="login-position">
      <Button type="primary" onClick={showModal}>
        登录
      </Button>
      <Modal
        title="登录"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <LoginForm />
      </Modal>
    </div>
  );
};

export default Login;
