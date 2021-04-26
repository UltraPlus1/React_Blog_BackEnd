import React,{useState} from "react";
import SimpleMDEReact from "react-simplemde-editor";
import { Form, Input, Button, Typography } from 'antd';
import hljs from 'highlight.js';
import "easymde/dist/easymde.min.css";
import 'highlight.js/styles/zenburn.css';
import './Editor.css';
import "font-awesome/css/font-awesome.min.css";
import FormItem from "antd/lib/form/FormItem";
const { Title } = Typography;
const Editor = () => {
  const [textValue,setTextValue] = useState('Start writing!!');
  const [titleValue,setTitleValue] = useState('');
  return (
    <div className="container container-narrow">
      <Title level={2}>编辑文章</Title>
      <div className = "title-line">
        <Form
        layout="vertical"
        >
          <Form.Item 
          name="title"
          rules={[
            {
              required:true,
              message:'请输入文章的标题'
            }
          ]}>
            <Input 
            value={titleValue}
            onChange={(e)=>{setTitleValue(e.target.value)}}
            placeholder="请输入文章标题"
            style={{width:450}}
            maxLength={50}
            size="large"/>
          </Form.Item>
        </Form>
        <Button type="primary" className="btn-position">发布文章</Button>
      </div>
      <SimpleMDEReact
        value={textValue}
        onChange={setTextValue}
        options={{
          autoDownloadFontAwesome:false,
          scrollbarStyle: "native",
          autofocus: true,
          minHeight: "60vh",
          hideIcons: [],
          spellChecker:false,
          renderingConfig: {
            codeSyntaxHighlighting: true,
            hljs:hljs,
            markedOptions: {
              gfm: true,
              pedantic: false,
              sanitize: false,
              tables: true,
              breaks: true,
              smartLists: true,
              smartypants: true,
              highlight: function (code) {
                      return hljs.highlightAuto(code).value;
              }
            }
          },
        }}
      />
    </div>
  );
}

export default Editor;
