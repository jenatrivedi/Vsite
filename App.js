import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetail } from "./actions/authAction";
import Routes from "./routes";
import "./App.css";
import "./styles/index.scss";
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.post("https://api.v-site.xyz/api/v1/swagger-ui.html#/User%20Restrainer/changePasswordUsingPOST")
      .then(
        () => {
          console.log();
        },
        (error) => {
          console.log();
        }
      )
  }
  render() {
    const childProps = {};
    return (
      <div className="App">
        <Routes childProps={childProps} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  details: auth.data,
});

const mapDispatchToProps = (dispatch) => ({
  // getDetail: () => dispatch(getDetail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
