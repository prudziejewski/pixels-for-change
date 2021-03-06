import React, { Component } from "react";
import "./EditPixel.scss";
import axios from "axios";
import location from "../../Assets/images/pixel-location.jpg";
import { Link, Redirect } from "react-router-dom";

class EditPixel extends Component {
  state = {
    id: "",
    color: "",
    text: "",
    charityid: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state.charityid);
    const newPixel = {
      id: this.state.id,
      color: this.state.color,
      text: this.state.text,
      charityid: this.state.charityid,
    };

    axios
      // update information to backend
      .put(`http://localhost:8020/pixel/edit`, newPixel)
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
  };

  render() {
    return (
      <div className="card">
        <form className="card__container" onSubmit={this.submitForm}>
          <div className="card__title">
            <h1 className="card__title-text">Pick a Pixel</h1>
          </div>
          <div className="card__forms">
            <div className="buy">
              <label className="buy__input-label label">
                Company Name
                <input
                  className="buy__input"
                  type="text"
                  placeholder="Company Name"
                  name="text"
                  onChange={this.handleChange}
                />
              </label>
              <label className="buy__input-label label">
                Color of Pixel
                <input
                  className="buy__input"
                  type="text"
                  placeholder="Color of Pixel"
                  name="color"
                  onChange={this.handleChange}
                />
              </label>
              <label className="buy__input-label label">
                Charity id
                <input
                  className="buy__input"
                  type="text"
                  placeholder="Match Charity id from register page"
                  name="charityid"
                  onChange={this.handleChange}
                />
              </label>
              <label className="buy__input-label label buy__input--center">
                Pixel Position
                <input
                  className="buy__input"
                  type="text"
                  placeholder="Select a number from 1-25"
                  name="id"
                  onChange={this.handleChange}
                />
                <img
                  className="buy__image"
                  src={location}
                  alt="A board of sqaures labeled one to twenty-five"
                />
              </label>
              <div className="buy__buttons">
                <button
                  type="button"
                  className="buy__button buy__buttons--cancel"
                >
                  Cancel
                </button>
                <button className="buy__button buy__buttons--add">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPixel;
