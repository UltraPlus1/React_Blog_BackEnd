import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import "./App.css";
import Articles from "../articles/Articles";
import Editor from "../articles/Editor";
import Login from "../login/Login";
// 自定义hooks
import useToken from "./useToken";
const { Header, Sider, Content } = Layout;

export default function App(){
  // 展开或收起的hooks
  const [collapsed,setCollapsed] = useState(false)
  // token 的 hooks
  const {token,setToken} = useToken()
  if(!token){
    return (
        <Login setToken={setToken}/>
    )
  }

    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<OrderedListOutlined />}>
                <Link to="/">文章列表</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/edit">编辑文章</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/edit">编辑文章</Link>
              </Menu.Item>
            </Menu>
            </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: ()=>{setCollapsed(!collapsed)},
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path="/">
                  <Articles />
                </Route>
                <Route path="/edit">
                  <Editor />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
