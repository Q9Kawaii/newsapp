import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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

  render() {
    return (
      <div>
        <Router>
          <NavBar mode={this.state.mode} toggleMode={this.toggleMode} />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={5} country="in" category="general" mode={this.state.mode} />} />
            <Route exact path="/business" element={<News key="business" pageSize={5} country="us" category="business" mode={this.state.mode} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="us" category="entertainment" mode={this.state.mode} />} />
            <Route exact path="/health" element={<News key="health" pageSize={5} country="us" category="health" mode={this.state.mode} />} />
            <Route exact path="/science" element={<News key="science" pageSize={5} country="us" category="science" mode={this.state.mode} />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={5} country="us" category="sports" mode={this.state.mode} />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={5} country="us" category="technology" mode={this.state.mode} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
