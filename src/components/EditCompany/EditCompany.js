import React, { Component } from "react";
import "./EditCompany.scss";
import axios from "axios";

class EditCompany extends Component {
  state = {
    name: "",
    url: "",
    fundingGoal: "", 
    charityid: "",
    raisedMoney: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state.charityid);
      const newCompany = {
        name: this.state.name,
        url: this.state.url,
        fundingGoal: this.state.fundingGoal, 
        charityid: this.state.charityid,
        raisedMoney: this.state.raisedMoney,
      };

      axios
        // update information to backend
        .put(
          `http://localhost:8020/company/edit`,
          newCompany
        )
        .then((response) =>
          //reset state
          this.setState({
            name: this.state.name,
            url: this.state.url,
            fundingGoal: this.state.fundingGoal, 
            charityid: this.state.charityid,
            raisedMoney: this.state.raisedMoney,
          })
        )
        .then((response) => {
          alert("Edited Successfully");
        });
    }

    render() {
        return (
            <form className="card" onSubmit={this.submitForm}>
            <div className="card__title">
              <h1 className="card__title-text">Edit Company</h1>
            </div>
            <div className="card__forms">
              <div className="pixel">
                <h2 className="pixel__title">Company Details</h2>
                <label className="pixel__input-label label">
                    Company Name
                  <input
                    type="text"
                    placeholder="Company Name"
                    name="name"
                    onChange={this.handleChange}
                    
                  /> 
                </label>
                <label className="pixel__input-label label">
                  Link to Website
                  <input
                    type="text"
                    placeholder="Url"
                    name="url"
                    onChange={this.handleChange}
                    
                  />
                </label>
                <label className="pixel__input-label label">
                  Funding Goal 
                  <input
                    type="text"
                    placeholder="Funding Goals"
                    name="fundingGoal"
                    onChange={this.handleChange}
                    
                  />
                </label>
                <label className="pixel__input-label label">
                  Charity Id
                  <input
                    type="text"
                    placeholder="charityid"
                    name="charityid"
                    onChange={this.handleChange}
                
                  />
                </label>
                <label className="pixel__input-label label">
                  Raised Money
                  <input
                    type="text"
                    placeholder="Raised Money"
                    name="raisedMoney"
                    onChange={this.handleChange}
                
                  />
                </label>
              </div>
            </div>
            <div className="card__buttons">
              <button type="button" className="button card__buttons--cancel">
                Cancel
              </button>
              <button className="button card__buttons--add">+ Save</button>
            </div>
          </form>
        )
    }

  };

  export default EditCompany;