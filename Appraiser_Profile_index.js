import React from "react";
import img5 from "../../images/profile.png";
import "./style.css";
import { Formik } from "formik";
import * as Yup from "yup";

const AppraiserProfile = () => {
  return (
    <Formik
      initialValues={{
        fullname: "",
        email: "",
        number: "",
        maxCallDuration: "",
        fromTime: "",
        toTime: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("submit form", values);
      }}
      validationSchema={Yup.object().shape({
        fullname: Yup.string()
          .required("Full Name is required")
          .matches(/^[a-zA-Z ]{2,40}$/, "Please enter valid Full Name"),
        email: Yup.string()
          .email("Enter a valid Email ID")
          .required("Email ID is required"),
        number: Yup.string()
          .required("Contact Number is required")
          .matches(/^[0-9]+$/, "Please enter digits only")
          .matches(/^[0-9]{10}$/, "Please enter 10 digit contact number"),
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
          <section className="content-wapper">
            <div className="breadcrumb">
              <ul>
                <li>Profile</li>
              </ul>
            </div>
            <div className="common-panel">
              <div className="panel-head">
                <div className="title">Profile</div>
              </div>
              <div className="panel-body profile-appraiser">
                <div className="profile-pic">
                  <div className="image">
                    <img src={img5} />
                  </div>
                </div>
                <div className="vrow">
                  <div className="vcol-4">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        className="form-control"
                        type="text"
                        name="fullname"
                        value={values.fullname}
                        onChange={handleChange}
                        error={errors.fullname}
                        touched={touched.fullname}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="vcol-4">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email}
                        touched={touched.email}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="vcol-4">
                    <div className="form-group">
                      <label>Contact Number *</label>
                      <input
                        className="form-control"
                        type="text"
                        name="number"
                        value={values.number}
                        onChange={handleChange}
                        error={errors.number}
                        touched={touched.number}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </div>

                <div className="available-slots">
                  <h4 className="title">Available Slots</h4>
                  <div className="vrow">
                    <div className="vcol-4">
                      <div className="form-group">
                        <label>Select Day</label>
                        <div className="select-day-radio clearfix">
                          <ul>
                            <li>
                              <div className="day-radiobtn">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="selectdayradio"
                                  />
                                  <span>S</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="day-radiobtn">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="selectdayradio"
                                  />
                                  <span>M</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="day-radiobtn">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="selectdayradio"
                                  />
                                  <span>T</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="day-radiobtn">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="selectdayradio"
                                  />
                                  <span>W</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="day-radiobtn">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="selectdayradio"
                                  />
                                  <span>T</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="day-radiobtn">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="selectdayradio"
                                  />
                                  <span>F</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="day-radiobtn">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="selectdayradio"
                                  />
                                  <span>S</span>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="vcol-3">
                      <div className="form-group">
                        <label>
                          Max Call Duration <small>(HH:MM)</small>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="maxCallDuration"
                          value={values.maxCallDuration}
                          onChange={handleChange}
                          error={errors.maxCallDuration}
                          touched={touched.maxCallDuration}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="vcol-2">
                      <div className="form-group">
                        <label>From</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fromTime"
                          value={values.fromTime}
                          onChange={handleChange}
                          error={errors.fromTime}
                          touched={touched.fromTime}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="vcol-2">
                      <div className="form-group">
                        <label>To</label>
                        <input
                          type="text"
                          className="form-control"
                          name="toTime"
                          value={values.toTime}
                          onChange={handleChange}
                          error={errors.toTime}
                          touched={touched.toTime}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    <div className="vcol-1">
                      <div className="add-btn">
                        <button
                          className="blue-btn"
                          onClick={(e) => console.log("Clicked")}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="time-table">
                    <table>
                      <tbody>
                        <tr>
                          <td>Monday</td>
                          <td>
                            <ul className="time-tag">
                              <li>
                                <div>
                                  <span>08:00 am To 11:00 am</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <span>04:00 pm To 6:00 pm</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Tuesday</td>
                          <td>
                            <ul className="time-tag">
                              <li>
                                <div>
                                  <span>08:00 am To 11:00 am</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Wednesday</td>
                          <td>
                            <ul className="time-tag">
                              <li>
                                <div>
                                  <span>08:00 am To 11:00 am</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Thursday</td>
                          <td>
                            <ul className="time-tag">
                              <li>
                                <div>
                                  <span>08:00 am To 11:00 am</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <span>01:00 pm To 03:00 pm</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <span>06:00 pm To 08:00 pm</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Friday</td>
                          <td>
                            <ul className="time-tag">
                              <li>
                                <div>
                                  <span>08:00 am To 11:00 am</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Saturday</td>
                          <td>
                            <ul className="time-tag">
                              <li>
                                <div>
                                  <span>08:00 am To 11:00 am</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="off-days">
                  <h4 className="title">Off Days</h4>
                  <div className="vrow">
                    <div className="vcol-4">
                      <div className="form-group">
                        <label>Leave Date</label>
                        <div className="date-formate">
                          <span className="icon-date-picker"></span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="dd/mm/yyyy"
                            id="patient-dateofbirth"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="vcol-4">
                      <div className="add-btn">
                        <button
                          className="blue-btn"
                          onClick={(e) => console.log("Clicked")}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="time-table">
                    <table>
                      <tbody>
                        <tr>
                          <td>03/02/2021</td>
                          <td>Wednesday</td>
                          <td>
                            <ul className="time-tag">
                              <li>
                                <div>
                                  <span>Leave</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>04/02/2021</td>
                          <td>Thursday</td>
                          <td>
                            <ul className="time-tag">
                              <li>
                                <div>
                                  <span>Leave</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>05/02/2021</td>
                          <td>Friday</td>
                          <td>
                            <ul className="time-tag">
                              <li>
                                <div>
                                  <span>Leave</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>08/02/2021</td>
                          <td>Monday</td>
                          <td>
                            <ul className="time-tag">
                              <li>
                                <div>
                                  <span>Leave</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>09/02/2021</td>
                          <td>Tuesday</td>
                          <td>
                            <ul className="time-tag">
                              <li>
                                <div>
                                  <span>Leave</span>
                                  <button>
                                    <i className="icon-cancel2"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="panel-footer right-side">
                <button
                  className="gray-btn"
                  onClick={(e) => console.log("Clicked")}
                >
                  Cancel
                </button>
                <button
                  className="blue-btn"
                  onClick={(e) => console.log("Clicked")}
                >
                  Save
                </button>
              </div>
            </div>
          </section>
        );
      }}
    </Formik>
  );
};
export default AppraiserProfile;
