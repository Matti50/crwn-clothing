import React from 'react';
import HomePage from "./pages/homepage/homepage.component"
import './App.css';
import {Switch,Route} from "react-router-dom";

function App(props) {
  console.log(props);
  const HatPage = (props) => {
    console.log(props);  
    return(<h1>Hats</h1>)  
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatPage}/>
      </Switch>
    </div>
  );
}

export default App;
