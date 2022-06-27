import React, { Component } from "react";
import "./EditPixel.scss";
import axios from "axios";

class EditPixel extends Component {
  state = {
    id: "",
    color: "",
    text: "", 
    charityid: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
      const newPixel = {
        id: this.state.id,
        color: this.state.color,
        text: this.state.text,
        charityid: this.state.charityid,
      };
      console.log(newPixel);

      axios
        // update information to backend
        .put(
          `http://localhost:8020/pixel/edit`,
          newPixel
        )
        .then((response) =>
          //reset state
          this.setState({
            id: this.state.id,
            color: this.state.color,
            text: this.state.text,
            charityid: this.state.charityid,
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
              <h1 className="card__title-text">Edit Pixel</h1>
            </div>
            <div className="card__forms">
              <div className="pixel">
                <h2 className="pixel__title">Company Details</h2>
                <label className="pixel__input-label label">
                    Company Name
                  <input
                    type="text"
                    placeholder="Company Name"
                    name="text"
                    onChange={this.handleChange}
                    
                  /> 
                </label>
                <label className="pixel__input-label label">
                  Color of Pixel
                  <input
                    type="text"
                    placeholder="Color of Pixel"
                    name="color"
                    onChange={this.handleChange}
                    
                  />
                </label>
                <label className="pixel__input-label label">
                  Charity Id 
                  <input
                    type="text"
                    placeholder="Charity Id"
                    name="charityid"
                    onChange={this.handleChange}
                    
                  />
                </label>
                <label className="pixel__input-label label">
                  Id
                  <input
                    type="text"
                    placeholder="id"
                    name="id"
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

  export default EditPixel;



    


