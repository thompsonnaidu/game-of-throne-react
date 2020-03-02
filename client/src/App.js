import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import BattleState from './component/context/battle/BattleState';
import './App.css';
import Home from './component/pages/Home';
import Navbar from './component/layout/Navbar'
function App() {
  return (
    <BattleState>
      <Router>
        <Fragment>
          <Navbar/>
          <div className="container pt-5">
            <Switch>
              <Route exact path="/*" component={Home}/>
            </Switch>
          </div>
        </Fragment>
        
      </Router>
    </BattleState>
    //<div><p>This is wori</p></div>
  );
}

export default App;
