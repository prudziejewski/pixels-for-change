import React from 'react'
import Pixel from '../Pixel/Pixel'
import axios from 'axios';
import "./Board.scss"
import { Link } from "react-router-dom";
import App from '../../App';



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
    return (
<>
    <div className="board">
            {this.state.results.map((pixel) => {  
                return (
                    <Pixel arry={pixel} key={pixel.id}/>
                )
            })}
    </div>
    </>
  )
}
}
 
export default Board;
