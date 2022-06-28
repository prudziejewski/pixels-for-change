import Board from "../components/Board/Board";
import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditPixel from "../components/EditPixel/EditPixel";
import CompanyDetails from "../components/CompanyDetails/CompanyDetails";
import EditCompany from "../components/EditCompany/EditCompany";
import "./Home.scss"



const Home = () => {
 
        return (
        <>
       
            <Board />
            <div className="flex">
            <EditPixel />
            <EditCompany />
           </div>

           
           
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


  