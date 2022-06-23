import React from 'react'
import Pixel from '../Pixel/Pixel'
import axios from 'axios';
import "./Board.scss"
import { Link } from "react-router-dom";
import App from '../../App';


// export default function Board() {
 const arry = [ { Id: "1", color: "green", text: "Best Buy", charityId: "1"},{ Id: "2", color: "red", text: "Best Buy", charityId: "1"}, { Id: "3", color: "blue", text: "Best Buy", charityId: "1"}, { Id: "4", color: "pink", text: "Best Buy"}, { Id: "5", color: "yellow", text: "Gamestop"},{ Id: "6", color: "green"},{ Id: "7", color: "red" , text: "NBA"}, { Id: "8", color: "pink"}, { Id: "9", color: "purple", text: "Brainstation"}, { Id: "10", color: "yellow"}, { Id: "11", color: "yellow", text: "Shopify"}, { Id: "12", color: "yellow", text: "UFC"}, { Id: "13", color: "green"}, { Id: "14", color: "purple"} , { Id: "15", color: "orange"}, { Id: "16", color: "red"}, { Id: "17", color: "green"}, { Id: "18", color: "purple"}, { Id: "19", color: "blue"}, { Id: "20", color: "grey" , text: "For Sale"}, { Id: "21", color: "grey" , text: "For Sale"}, { Id: "22", color: "grey" , text: "For Sale"}, { Id: "23", color: "grey" , text: "For Sale"} , { Id: "24", color: "grey", text: "For Sale"} , { Id: "25", color: "grey", text: "For Sale"} ];
 const companyDetails = [{
     name: "Best Buy", 
     url: "https://www.bestbuy.ca/en-ca",
     fundingGoal: "$1000",
     charityId: "1",
     raisedMoney: "$500"
 },{
    name: "Gamestop", 
    url: "https://www.bestbuy.ca/en-ca",
    fundingGoal: "$1000",
    charityId: "2",
    raisedMoney: "$500"
},{
    name: "Brainstation", 
    url: "https://www.bestbuy.ca/en-ca",
    fundingGoal: "$1000",
    charityId: "1",
    raisedMoney: "$500"
}
]

class Board extends React.Component {
    state = {
      results: [],
    //   activeVideo: null,
    //   hasFetchingError: false,
    };
  
     componentDidMount() {
      // Gets data held on created API server 
      document.title = "Pixel Board"
      axios
      .get('http://localhost:8020/pixel')
      .then((response) => 
       
      this.setState({
        results: response.data,
       
        }));
       
    }

render() {
    console.log(this.state.results)
    return (
<>
    <div className="board">
            {this.state.results.map((pixel) => {  
                return (
                    <Pixel arry={pixel} companyDetails={companyDetails}  key={pixel.Id}/>
                )
            })}
    </div>
    </>
  )
}
}
 
export default Board;
