import React from 'react';
import HomeContent from './components/home-content/home-content'
import { Switch,Route,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeContent}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
