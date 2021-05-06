import React,{useState} from "react";
import SimpleMDEReact from "react-simplemde-editor";
import { Form, Input, Button, Typography,message,Modal,Tag} from 'antd';
import hljs from 'highlight.js';
import "easymde/dist/easymde.min.css";
import 'highlight.js/styles/zenburn.css';
import './Editor.css';
import "font-awesome/css/font-awesome.min.css";
import {postArticle} from "../services/article";
const { Title } = Typography;
const {TextArea} = Input;
const { CheckableTag } = Tag;

const Editor = () => {
  const [textValue,setTextValue] = useState('');
  const [titleValue,setTitleValue] = useState('');
  const [summary,setSummary]=useState('');
  const [isModalVisible,setModalVisible] = useState(false);
  const tagsData = ['算法','前端','杂谈','后端','客户端','专栏'];
  const [selectedTags,setSelectedTags] = useState([]);
  const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
  };
  const [form] = Form.useForm();
  const [submitForm] = Form.useForm();
  const openSbmit = ()=>{
      form.validateFields().then(result=>{
          if(textValue){
              setModalVisible(true);
          }else{
              message.error("文章内容未上传！！")
          }
      }).catch(err=>{
          message.error("请将文章名称填写完毕后再上传文章！！")
      })
  }
  const closeModal = ()=>{
      setModalVisible(false)
  }
  const okModal = ()=>{
      submitForm.validateFields().then(result=>{
          handleSubmit()
      }).catch((err)=>{
          console.log(err)
      })
  }
  const handleSubmit = async () => {

      try{
          const resp = await postArticle({
              'title':titleValue,
              'rawContent':textValue,
              'summary':summary,
              'label':selectedTags
          });
          if(resp.data.status===200){
              setModalVisible(false)
          }
      }catch (e) {
          console.log(e)
      }
  }
  const handleChange= (tag,checked) =>{
      const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
      setSelectedTags(nextSelectedTags)
  }
  return (
    <div className="container container-narrow">
      <Title level={2}>编辑文章</Title>
      <div className = "title-line">
        <Form
            {...layout}
        layout="vertical"
        form={form}
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
        <Button type="primary" className="btn-position" onClick={openSbmit}>发布文章</Button>
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
        <Modal title="Basic Modal" visible={isModalVisible} onOk={okModal} onCancel={closeModal}>
            <Form layout="horizontal"
                  form={submitForm}
                  {...layout}
            >
                <Form.Item
                    name="summary"
                    label="文章简介"
                    rules={[
                        {
                            required:true,
                            message:'请输入文章的小结'
                        }
                    ]}>
                    <TextArea value={summary} showCount maxLength={100} onChange={(e)=>{setSummary(e.target.value)}} autoSize={{ minRows: 3, maxRows: 5 }}
                    ></TextArea>
                </Form.Item>
                <Form.Item
                    label="文章标签"
                    name="selectedTags"
                    >
                    <div>
                        {tagsData.map(tag => (
                            <CheckableTag
                                key={tag}
                                checked={selectedTags.indexOf(tag) > -1}
                                onChange={checked => handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        ))}
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    </div>
  );
}

export default Editor;
