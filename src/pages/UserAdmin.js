import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./UserAdmin.css";

function UserAdmin() {
  const [APIData, setAPIData] = useState([]);
  const [userName, setUserName] = useState("");
  const [address, setUserAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email_ID, setEmail] = useState("");
  const [contactNo, setContact] = useState("");
  const [userCenter, setCenter] = useState("");
  const [password, setPassword] = useState("");
  const [remarks, setRemarks] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const HandlePostData = () => {
    axios
      .post("http://nias.codelovertechnology.com/UserMaster", {
        userID: 0,
        userType: "NA",
        userName,
        address,
        city,
        state,
        email_ID,
        contactNo,
        userCenter,
        userRole: "NA",
        password,
        remarks,
        createdBy: "NA",
        createdDate: "2022-11-26T12:54:40.646Z",
        modifiedBy: "NA",
        modifiedDate: "2022-11-26T12:54:40.646Z",
        checkbox,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get data from API Start Here Get Method
  axios
    .get("http://nias.codelovertechnology.com/UserMaster", {
      userID: 0,
      userType: "NA",
      userName,
      address,
      city,
      state,
      email_ID,
      contactNo,
      userCenter,
      userRole: "NA",
      password,
      remarks,
      createdBy: "NA",
      createdDate: "2022-11-26T12:54:40.646Z",
      modifiedBy: "NA",
      modifiedDate: "2022-11-26T12:54:40.646Z",
      checkbox,
    })
    .catch((err) => {
      console.log(err);
    });

  useEffect(() => {
    axios
      .get(`http://nias.codelovertechnology.com/UserMaster`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  // Get data from API End  Here

  // Delete Start from here
  const onDelete = (id) => {
    axios
      .delete(`http://nias.codelovertechnology.com/UserMaster/${id}`)
      .then(() => {
        getData();
        alert("Your data has beeen deleted");
      });
  };
  const getData = () => {
    axios
      .get(`http://nias.codelovertechnology.com/UserMaster`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  // Delete end here
  return (
    <>
      <Sidebar />
      <div className="UserAdmin">
        <div className="container-xl" style={{ marginTop: "7rem" }}>
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>User Registration</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons">&#xE147;</i>{" "}
                      <span>Add New User</span>
                    </a>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>User Contact </th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>UserCenter</th>
                    <th>Password</th>
                    {/* <th>Confirm Password</th> */}
                    <th>Remarks</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {APIData.map((data) => {
                    return (
                      <tr key={data.userID}>
                        <td>{data.userID}</td>
                        <td>{data.userName}</td>
                        <td>{data.email_ID}</td>
                        <td>{data.contactNo}</td>
                        <td>{data.address}</td>
                        <td>{data.city}</td>
                        <td>{data.state}</td>
                        <td>{data.userCenter}</td>
                        <td>{data.password}</td>
                        <td>{data.remarks}</td>
                        <td>
                          <a
                            href="#editEmployeeModal"
                            className="edit"
                            data-toggle="modal"
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              &#xE254;
                            </i>
                          </a>
                          <a
                            href="#deleteEmployeeModal"
                            className="delete"
                            data-toggle="modal"
                          >
                            <i
                              onClick={() => onDelete(data.userID)}
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                            >
                              &#xE872;
                            </i>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
              <div className="modal-header">
                  <h4 className="modal-title col-md-6">Add User</h4>
                  <div className="float-right">
                  <button
                    type="button"
                    className="close col-md-6"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                  </div>
                
                </div>
                {/* <div className="modal-body">
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      onChange={(e) => setUserName(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>User Email</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>User Contact</label>
                    <input
                      onChange={(e) => setContact(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      onChange={(e) => setUserAddress(e.target.value)}
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input
                      onChange={(e) => setState(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>User Center</label>
                    <input
                      onChange={(e) => setCenter(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Remarks</label>
                    <input
                      onChange={(e) => setRemarks(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    value="Cancel"
                  />
                  <input
                    onClick={HandlePostData}
                    type="submit"
                    className="btn btn-success"
                    value="Add"
                  />
                </div> */}
                 <div className="container">
              <div className=" form-group">
                <label htmlFor="name-f">Name :</label>
                <input
                onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  className="form-control"
                  name="fname"
                  id="name-f"
                  placeholder="Enter your first name."
                  required
                />
              </div>
              <div className=" form-group">
                <label htmlFor="email">Email :</label>
                <input
                onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter your email."
                  required
                />
              </div>
              <div className=" form-group">
                <label htmlFor="tel">Phone :</label>
                <input
                onChange={(e) => setContact(e.target.value)}
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="tel"
                  placeholder="Enter Your Contact Number."
                  required
                />
              </div>

              <div className=" form-group">
                <label htmlFor="address-1">Address :</label>
                <input
                onChange={(e) => setUserAddress(e.target.value)}
                  type="address"
                  className="form-control"
                  name="Locality"
                  id="address-1"
                  placeholder="Locality/House/Street no."
                  required
                />
              </div>
              <div className=" form-group">
                <label htmlFor="address-2">City :</label>
                <input
                onChange={(e) => setCity(e.target.value)}
                  type="address"
                  className="form-control"
                  name="address"
                  id="address-2"
                  placeholder="City Name."
                  required
                />
              </div>
              <div className=" form-group">
                <label htmlFor="State">State :</label>
                <input
                onChange={(e) => setState(e.target.value)}
                  type="address"
                  className="form-control"
                  name="State"
                  id="State"
                  placeholder="Enter your state name."
                  required
                />
              </div>
              <div className=" form-group">
                <label htmlFor="zip">Postal-Code :</label>
                <input
                onChange={(e) => setCenter(e.target.value)}
                  type="zip"
                  className="form-control"
                  name="Zip"
                  id="zip"
                  placeholder="Postal-Code."
                  required
                />
              </div>
  
              <div className=" form-group">
                <label htmlFor="sex">Gender :</label>
                <select
                // onChange={(e) => setUserName(e.target.value)}
                  id="sex"
                  className="form-control browser-default custom-select"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="unspesified">Unspecified</option>
                </select>
              </div>

        
              <div className=" form-group">
                <label htmlFor="address-1">Remarks :</label>
                <input
                onChange={(e) => setRemarks(e.target.value)}
                  type="address"
                  className="form-control"
                  name="Locality"
                  id="address-1"
                  placeholder="Remarks"
                  required
                />
              </div>
              <div className=" form-group">
                <label htmlFor="pass">Password :</label>
                <input
                onChange={(e) => setPassword(e.target.value)}
                  type="Password"
                  name="password"
                  className="form-control"
                  id="pass"
                  placeholder="Enter your password."
                  required
                />
              </div>
              <div className=" form-group">
                <label htmlFor="pass2">Confirm Password :</label>
                <input
                  type="Password"
                  name="cnf-password"
                  className="form-control"
                  id="pass2"
                  placeholder="Re-enter your password."
                  required
                />
              </div>
              <div className="">
                <input
                  onChange={(e) => setCheckbox(!checkbox)}
                  type="checkbox"
                  className="form-check d-inline"
                  id="chb"
                  required
                />
                <label
                  htmlFor="chb"
                  className="form-check-label"
                  style={{ marginTop: "-10px" }}
                >
                  &nbsp; Check me out.
                </label>
              </div>

              <div className=" form-group mb-0">
                <button
                  className="btn btn-primary float-right "
                  onClick={HandlePostData}
                >
                  Submit
                </button>
              </div>
            </div>
              </form>
            </div>
          </div>
        </div>

        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Edit Product</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>User Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>User Contact</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea className="form-control" required></textarea>
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>User Center</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Remarks</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    value="Cancel"
                  />
                  <input type="submit" className="btn btn-info" value="Save" />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <div id="deleteEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Delete Product</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <p className="text-warning">
                    <small>Are you sure you want to delete this product?</small>
                  </p>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    value="Cancel"
                  />
                  <input
                  
                     onClick={() => onDelete(data.userID)}
                    type="submit"
                    className="btn btn-danger"
                    value="Delete"
                  />
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default UserAdmin;
