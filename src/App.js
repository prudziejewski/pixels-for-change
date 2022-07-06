import Home from './Pages/Home';
import './App.scss';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import Login from './components/Login/Login';
import EditCompany from './components/EditCompany/EditCompany';
import EditPixel from './components/EditPixel/EditPixel';
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout';



function App() {
   
  return (

    

    <div className="App">
     
     <BrowserRouter>
        <Header />
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/login" component={Login} />
         <Route path="/company/:id" component={CompanyDetails} />
         <Route path="/add" component={EditCompany} />
         <Route path="/BuyPixel" component={EditPixel} />
         <Route path="/checkout" component={Checkout} /> 
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
