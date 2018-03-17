import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './components/main/Main';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
