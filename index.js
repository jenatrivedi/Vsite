import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Profile extends Component {
  state = {
    firstname: '',
    lastname:'',
    email:'',
    number:''
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  render() {
    
    return (
      <form>
      <section class="content-wapper">
            <div class="breadcrumb">
              <ul>
                <li>Profile</li>
              </ul>
            </div>
            <div class="common-panel">
              <div class="panel-head">
                <div class="title">Admin Profile</div>
              </div>
              
              <div class="panel-body admin-profile">
                <div class="vrow">
                  <div class="vcol-4">
                    <div class="form-group">
                      <label>First Name *</label>
                      <input
                        class="form-control"
                        type="text"
                        name="firstname"
                        value={this.firstname}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div class="vcol-4">
                    <div class="form-group">
                      <label>Last Name *</label>
                      <input
                        class="form-control"
                        type="text"
                        name="lastname"
                        value={this.lastname}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div class="vcol-4">
                    <div class="form-group">
                      <label>Email ID *</label>
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        value={this.email}
                        onChange={this.handleChange} 
                      />
                    </div>
                  </div>
                </div>
                <div class="vrow">
                  <div class="vcol-4">
                    <div class="form-group">
                      <label>Contact Number *</label>
                      <input
                        class="form-control"
                        type="text"
                        name="number"
                        value={this.number}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div class="vcol-12">
                    <div class="password-btn" >  
                      <Link to ="./change-password1">      
                      <button class="blue-btn">
                        <i class="icon-change-password"></i>Change Password
                      </button>
                      </Link>
                    </div>
                  </div>                  
                </div>
              </div>
              <div class="panel-footer">
                <button class="blue-btn">Update</button>
              </div>
            </div>
          </section>
          </form>
    );
      }
  
    }

export default Profile;
