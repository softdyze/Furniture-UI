import React, { useState } from 'react';

// function UploadImage() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const imageFile = event.target.files[0];
//     if (imageFile) {
//       setSelectedImage(URL.createObjectURL(imageFile));
//     }
//   };

const Profile = () => {
  return (
    <div>
      <section
        className="main-header"
        style={{
          backgroundImage:
            "url(http://www.elathemes.com/themes/mobel/assets/images/gallery-2.jpg)",
        }}
      >
        <header>
          <div className="container text-center">
            <h2 className="h2 title">Profile page</h2>
            <ol className="breadcrumb breadcrumb-inverted">
              <li>
                <a href="index.html">
                  <span className="icon icon-home" />
                </a>
              </li>
            </ol>
          </div>
        </header>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="br-sm pr-lg-4 mt-xl-n6">
                <div className="py-3 py-lg-4">
                  <div className="row align-items-center justify-content-center no-gutters text-lg-center">
                    <div className="col-9 col-lg-12">
                      <div className="d-flex flex-lg-column align-items-center">
                        <div className="pr-3 pr-lg-0">
                          <img
                            src="assets/images/user-5.jpg"
                            alt=""
                            className="rounded-circle mb-lg-2 img-fluid"
                            style={{ width: "50px" }}
                          />
                        </div>
                        <div>
                          <div className="h5 m-0">John Doe</div>
                          <div className="text-muted">john.doe@email.com</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 d-lg-none text-right">
                      <button
                        className="btn btn-icon btn-primary btn-sm toggle-show"
                        data-show="open-profile-sidebar"
                      >
                        <i className="icon icon-text-align-center" />
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="sidebar sidebar-mobile"
                  id="open-profile-sidebar"
                >
                  <div className="sidebar-content">
                    <div className="sidebar-header clearfix d-lg-none">
                      <button
                        type="button"
                        className="close toggle-show p-3"
                        data-show="open-profile-sidebar"
                        aria-label="Close"
                      >
                        <i className="icon icon-cross font-size-lg" />
                      </button>
                    </div>
                    <div className="mb-4 px-4 p-lg-0">
                      <ul className="list-group list-group-clean">
                        <li className="list-group-item text-muted d-flex justify-content-between align-items-center">
                          <label className="pre-label">Account</label>
                        </li>
                        <li className="list-group-item active">
                          <a href="profile.html">
                            <div className="d-flex justify-content-between align-items-center">
                              <span>
                                <i className="icon icon-user mr-2" />
                                <span>Profile account</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="profile-payment.html">
                            <div className="d-flex justify-content-between align-items-center">
                              <span>
                                <i className="icon icon-cart mr-2" />
                                <span>Payment methods</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="profile-notifications.html">
                            <div className="d-flex justify-content-between align-items-center">
                              <span>
                                <i className="icon icon-alarm mr-2" />
                                <span>Notifications</span>
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-4 px-4 p-lg-0">
                      <ul className="list-group list-group-clean">
                        <li className="list-group-item text-muted d-flex justify-content-between align-items-center">
                          <label className="pre-label">Dashboard</label>
                        </li>
                        <li className="list-group-item">
                          <a href="profile-orders.html">
                            <div className="d-flex justify-content-between align-items-center">
                              <span>
                                <i className="icon icon-cart mr-2" />
                                <span>Orders</span>{" "}
                              </span>
                              <span className="badge badge-pill">125</span>
                            </div>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="profile-whishlist.html">
                            <div className="d-flex justify-content-between align-items-center">
                              <span>
                                <i className="icon icon-heart mr-2" />
                                <span>Whishlist</span>{" "}
                              </span>
                              <span className="badge badge-pill">9</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-4 px-4 p-lg-0">
                      <ul className="list-group list-group-clean">
                        <li className="list-group-item text-muted d-flex justify-content-between align-items-center">
                          <label className="pre-label">Access</label>
                        </li>
                        <li className="list-group-item">
                          <a href="profile-reset-password.html">
                            <div className="d-flex justify-content-between align-items-center">
                              <span>
                                <i className="icon icon-lock mr-2" />
                                <span>Reset password</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="#">
                            <div className="d-flex justify-content-between align-items-center">
                              <span>
                                <i className="icon icon-enter-down mr-2" />
                                <span>Sign out</span>
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pt-lg-4">
              <h2 className="pre-label font-size-base">Avatar settings</h2>
              <div className="bg-white p-4 p-lg-5 br-sm shadow-sm mb-3 mb-lg-5">
                <div>
                  <div className="media d-block d-sm-flex align-items-center">
                    <img
                      src="assets/images/user-5.jpg"
                      className="d-block rounded-circle mx-auto mb-3 mb-sm-0"
                      width={110}
                      alt="John Doe"
                    />

                    
                    <div className="media-body pl-sm-3 text-center text-sm-left">
                 
                      <button
                        className="btn btn-rounded btn-outline-primary btn-sm px-3 mb-2"
                        type="button"
                      >
                        
                        <input type="file" id="myFile" name="filename"/>
                      </button>

                      {/* {<div>
                      <h1>Image Upload and Display</h1>
                      <input type="file" onChange={handleImageUpload} accept="image/*" />
                      {selectedImage && <img src={selectedImage} alt="Uploaded" />}
                    </div>} */}

                      <div>
                        <small className="text-muted">
                          Upload JPG, GIF or PNG image. 100 x 100 required.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="pre-label font-size-base">Profile settings</h2>
              <div className="bg-white p-4 p-lg-5 br-sm shadow-sm mb-3 mb-lg-5">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label
                        className="pre-label pre-label-sm"
                        htmlFor="account-fn"
                      >
                        First Name
                      </label>
                      <input
                        className="form-control form-control-simple"
                        type="text" placeholder="Enter Your Firstname"
                        id="account-fn"
                       
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label
                        className="pre-label pre-label-sm"
                        htmlFor="account-ln"
                      >
                        Last Name
                      </label>
                      <input
                        className="form-control form-control-simple"
                        type="text" placeholder="Enter Your Lastname"
                        id="account-ln"
                       
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label
                        className="pre-label pre-label-sm"
                        htmlFor="account-email"
                      >
                        Email address
                      </label>
                      <input
                        className="form-control form-control-simple"
                        type="text" placeholder="Enter Your Email address"
                        id="account-email"
                       
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label
                        className="pre-label pre-label-sm"
                        htmlFor="account-username"
                      >
                        Username
                      </label>
                      <div className="input-group">
                        <input
                          className="form-control form-control-simple"
                          type="text" placeholder="Enter Your Username"
                          id="account-username"
                         
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label
                        className="pre-label pre-label-sm"
                        htmlFor="account-country"
                      >
                        Country
                      </label>
                      <select
                        className="custom-select form-control-simple"
                        id="account-country"
                      >
                        <option value selected>Select country</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Belgium">Belgium</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Spain">Spain</option>
                        <option value="UK">United Kingdom</option>
                        <option value="USA">USA</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label
                        className="pre-label pre-label-sm"
                        htmlFor="account-city"
                      >
                        City
                      </label>
                      <input
                        className="form-control form-control-simple"
                        type="text" placeholder="Enter Your City"
                        id="account-city"
                       
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label
                        className="pre-label pre-label-sm"
                        htmlFor="account-address"
                      >
                        Address Line
                      </label>
                      <input
                        className="form-control form-control-simple"
                        type="text" placeholder="Enter Your Address"
                        id="account-address"
                       
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label
                        className="pre-label pre-label-sm"
                        htmlFor="account-zip"
                      >
                        ZIP Code
                      </label>
                      <input
                        className="form-control form-control-simple"
                        type="text" placeholder="Enter Your ZIP Code"
                        id="account-zip"
                       
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="custom-control custom-checkbox d-block">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="show-email"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="show-email"
                        >
                          Show my email to registered users
                        </label>
                      </div>
                      <button
                        className="btn btn-rounded btn-outline-primary btn-sm px-3 mt-3 mt-sm-0"
                        type="button"
                      >
                        <i className="fa fa-save mr-2" />
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
      };

export default Profile;
