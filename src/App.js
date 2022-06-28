import Home from './Pages/Home';
import './App.scss';
import Board from './components/Board/Board';
import Pixel from './components/Pixel/Pixel';
import { Switch, BrowserRouter, Route, Redirect} from "react-router-dom";
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import Login from './components/Login/Login';
import React, { useState } from 'react';


function App() {
  const [token, setToken] = useState();
  
  if(!token) {
      return <Login setToken={setToken} />
    }
    
  return (

    

    <div className="App">
     
     <BrowserRouter>
        
       <Switch>
         <Route exact path="/login" component={Login} />
         <Route exact path="/" component={Home}/>
         <Route exact path="/company/:id" component={CompanyDetails} />
         {/* <Redirect exact path="/company" component={Home} /> */}
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
