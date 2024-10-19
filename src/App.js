import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'light',
    }
  }

  toggleMode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === 'light' ? 'dark' : 'light',
    }), () => {
      document.body.style.backgroundColor = this.state.mode === 'dark' ? '#212530' : 'white';
    });
  }

  apiKey = process.env.REACT_APP_API_KEY;

  state={
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress});
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar mode={this.state.mode} toggleMode={this.toggleMode} />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={2} country="in" category="general" mode={this.state.mode} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={2} country="us" category="business" mode={this.state.mode} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={2} country="us" category="entertainment" mode={this.state.mode} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={2} country="us" category="health" mode={this.state.mode} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={2} country="us" category="science" mode={this.state.mode} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={2} country="us" category="sports" mode={this.state.mode} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={2} country="us" category="technology" mode={this.state.mode} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
