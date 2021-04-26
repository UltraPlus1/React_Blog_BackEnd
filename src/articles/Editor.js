import React from "react";
import SimpleMDEReact from "react-simplemde-editor";
import { Typography } from "antd";
import hljs from 'highlight.js';
import "easymde/dist/easymde.min.css";
import 'highlight.js/styles/zenburn.css';
import './Editor.css';
import "font-awesome/css/font-awesome.min.css";
const { Title } = Typography;
class Editor extends React.Component {
  state = {
    textValue: "Start writing!!",
  };

  handleChange = (value) => {
    this.setState({
      textValue: value,
    });
  };

  render() {
    return (
      <div className="container container-narrow">
        <Title>编辑文章</Title>
        <SimpleMDEReact
          value={this.state.textValue}
          onChange={this.handleChange}
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
}

export default Editor;
