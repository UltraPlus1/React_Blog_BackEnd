import React from "react";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import hljs from 'highlight.js';
import 'highlight.js/styles/zenburn.css';
import './Demo.css';
import "font-awesome/css/font-awesome.min.css";


class Demo extends React.Component {
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
        <SimpleMDEReact
          label="Markdown Editor"
          value={this.state.textValue}
          onChange={this.handleChange}
          options={{
            autoDownloadFontAwesome:false,
            scrollbarStyle: "null",
            autofocus: true,
            minHeight: "60vh",
            hideIcons: [],
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

export default Demo;
