import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let marked = require('marked');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
  }

  handleChange(event) {
    this.setState({markdown: event.target.value});
  }

  render() {
    return (
      <div className="wrapper">
          <section className="markdownsection">
            <h2>Markdown</h2>
            <textarea value={this.state.markdown} onChange={(event) => this.handleChange(event)} className="markdownarea"></textarea>
          </section>
          <section className="preview">
            <h2>Preview</h2>
            <div className="previewarea" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
          </section>
       </div>
    );
  }
}

export default App;
