import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Profile = () => {
    return (
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

          <Formik
            initialValues={{ email: '',firstname: '', lastname: '' , number: ''}}
            onSubmit={(values, { setSubmitting }) => {
              console.log('submit form', values);
            }}
            validationSchema={Yup.object().shape({
              firstname: Yup.string().required('First Name is required'),
              lastname: Yup.string().required('Last Name is required'),
              number: Yup.string().required('Number is required'),
              email: Yup.string().email().required('Email is required'),
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div class="panel-body admin-profile">
                    <div class="vrow">
                      <div class="vcol-4">
                        <div class="form-group">
                          <label>First Name *</label>
                          <input
                            class="form-control"
                            type="text"
                            name="firstname"
                            value={values.firstname}
                            onChange={handleChange} error={errors.firstname}
                            touched={touched.firstname} onBlur={handleBlur}
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
                            value={values.lastname}
                            onChange={handleChange} error={errors.lastname}
                            touched={touched.lastname} onBlur={handleBlur}
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
                            value={values.email}
                            onChange={handleChange} error={errors.email}
                            touched={touched.email} onBlur={handleBlur}
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
                            value={values.number}
                            onChange={handleChange} error={errors.number}
                            touched={touched.number} onBlur={handleBlur}
                          />
                        </div>
                      </div>
                      <div class="vcol-12">
                        <div class="password-btn">
                          <Link to="./change-password1">
                            <button class="blue-btn">
                              <i class="icon-change-password"></i>Change
                              Password
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="panel-footer">
                    <button type="submit" class="blue-btn">Update</button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </section>
    );
}
export default Profile;
