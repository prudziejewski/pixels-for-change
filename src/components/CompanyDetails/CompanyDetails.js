import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";



class CompanyDetails extends React.Component {
    state = {
      selectedcompany: {},
    //   activeVideo: null,
    //   hasFetchingError: false,
    };
  
     componentDidMount() {
      // Gets data held on created API server 
     
      axios
      .get(`http://localhost:8020/company/${this.props.match.params.id}`)
      
      .then((response) => 
    
      this.setState({
        selectedcompany: response.data,
        })
         );
    }

    componentDidUpdate(_PrevProps, prevState) {
      const prevList = prevState.selectedcompany
      const currentList = this.state.selectedcompany
        if ( prevList !== currentList ) {
            axios
        .get(`http://localhost:8020/company/${this.props.match.params.id}`)
        
        .then((response) => 
      
        this.setState({
          selectedcompany: response.data,
          }));
        }
        
    }

render() {
    
    return (
    <>
        <div className="company__title">
                <h1 className="company__title">{this.state.selectedcompany.name}</h1>
                <h2 className="company__url">{this.state.selectedcompany.url}</h2>
                <h2 className="company__goal">{this.state.selectedcompany.fundingGoal}</h2>
                <h2 className="company__raised">{this.state.selectedcompany.raisedMoney}</h2>
        </div>
    </>
  )
}
}
 
export default CompanyDetails;





