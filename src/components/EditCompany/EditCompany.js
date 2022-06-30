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
              <h1 className="card__title-text">Register Your Company</h1>
            </div>
            <div className="card__forms">
              <div className="edit">
                <h2 className="edit__title">Company Details</h2>
                <label className="edit__input-label label">
                    Your Company Name
                  <input
                    className="edit__input"
                    type="text"
                    placeholder="Company Name"
                    name="name"
                    onChange={this.handleChange}
                    
                  /> 
                </label>
                <label className="edit__input-label label">
                  Link to Your Website
                  <input
                    className="edit__input"
                    type="text"
                    placeholder="Url"
                    name="url"
                    onChange={this.handleChange}
                    
                  />
                </label>
                <label className="edit__input-label label">
                 What is your Funding Goal 
                  <input
                    className="edit__input"
                    type="text"
                    placeholder="Funding Goals"
                    name="fundingGoal"
                    onChange={this.handleChange}
                    
                  />
                </label>
                <label className="edit__input-label label">
                  Charity Id
                  <input
                    className="edit__input"
                    type="text"
                    placeholder="charityid"
                    name="charityid"
                    onChange={this.handleChange}
                
                  />
                </label>
                <label className="dit__input-label label">
                  How much money have you Raised Money
                  <input
                    className="edit__input"
                    type="text"
                    placeholder="Raised Money"
                    name="raisedMoney"
                    onChange={this.handleChange}
                
                  />
                </label>
              <div className="edit__buttons">
              <button type="button" className="button edit__buttons--cancel">
                Cancel
              </button>
              <button className="button edit__buttons--add">+ Save</button>
            </div>
              
              </div>
            </div>
            
          </form>
        )
    }

  };

  export default EditCompany;