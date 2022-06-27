import Board from "../components/Board/Board";
import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditPixel from "../components/EditPixel/EditPixel";


const Home = () => {
 
        return (
        <>
       
            <Board />
            <EditPixel />

           
           
        </>
      
      );
    }
    
      
    // <>
    // <BrowserRouter>
    // <Switch>
    //     <Board />

    //     <Route exact path="/pixel/edit" component={editPixel}</Route>
    // </Switch>
     
    // </BrowserRouter>
       
    // </>
  

  
  export default Home;


  