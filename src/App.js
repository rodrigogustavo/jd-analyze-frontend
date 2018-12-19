import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import JdAnalyze from './containers/JdAnalyze/JdAnalyze';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <JdAnalyze />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
