import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CompanyDetails.scss";

class CompanyDetails extends React.Component {
  state = {
    selectedcompany: {},
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

  // retreives company details which are displayed
  componentDidUpdate(_PrevProps, prevState) {
    const prevList = prevState.selectedcompany;
    const currentList = this.state.selectedcompany;
    if (prevList !== currentList) {
      axios
        .get(`http://localhost:8020/company/${this.props.match.params.id}`)

        .then((response) =>
          this.setState({
            selectedcompany: response.data,
          })
        );
    }
  }

  render() {
    return (
      <>
        <div className="company">
          <div className="company__images">
            <img
              className="company__image"
              src="https://images.unsplash.com/photo-1646061550931-74b78e83863c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt="pixelized man on a horse"
            />
            <img
              className="company__image"
              src="https://images.unsplash.com/photo-1646001943936-f1edc87d4ac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="pixelized portrait of a women"
            />
            <img
              className="company__image"
              src="https://images.unsplash.com/photo-1644007497105-8d0ae9ec9754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2384&q=80"
              alt="pixelized portrait of a man"
            />
          </div>
          <div className="company__info">
            <h1 className="company__title">
              {this.state.selectedcompany.name}
            </h1>
            <h2 className="company__description">
              {this.state.selectedcompany.description}
            </h2>
            <h2 className="company__message">
              {this.state.selectedcompany.message}
            </h2>
            <h2 className="company__url">
              <Link
                to={{ pathname: `${this.state.selectedcompany.url}` }}
                target="_blank"
              >
                Check out our website
              </Link>
            </h2>
          </div>
        </div>
      </>
    );
  }
}

export default CompanyDetails;
