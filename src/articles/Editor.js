import React from "react";
import { Typography } from "antd";
import Demo from "./Demo";
const { Title } = Typography;
class Editor extends React.Component {
  render() {
    return (
      <div>
        <Title>编辑页面</Title>
        <Demo />
      </div>
    );
  }
}

export default Editor;
