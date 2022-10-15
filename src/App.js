import './App.css';
import React from 'react';
import { Content } from './components/content';
import { Read } from './components/read';
import { Create } from './components/create';
import { Bootstrap } from './components/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          {/* Calling the Bootstrap import */}
          <Bootstrap></Bootstrap>
          {/* Routes tag used to declare different routes and their contents */}
          <Routes>
            <Route path='/home' element={<Content></Content>}> </Route>
            <Route path='/Read' element={<Read></Read>}> </Route>
            <Route path='/Create' element={<Create></Create>}> </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}


export default App;
