import Home from './Pages/Home';
import './App.scss';
import Board from './components/Board/Board';
import Pixel from './components/Pixel/Pixel';
import { Switch, BrowserRouter, Route, Redirect} from "react-router-dom";
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import Login from './components/Login/Login';
import EditCompany from './components/EditCompany/EditCompany';
import EditPixel from './components/EditPixel/EditPixel';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <Header />
       <Switch>
         <Route path="/login" component={Login} />
         <Route exact path="/" component={Home}/>
         <Route  path="/company/:id" component={CompanyDetails} />
         <Route path="/add" component={EditCompany} />
         <Route path="/BuyPixel" component={EditPixel} />
        
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
