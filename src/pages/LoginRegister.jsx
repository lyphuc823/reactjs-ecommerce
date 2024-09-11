import React from "react";
import { Link } from "react-router-dom";

function LoginRegister() {
  return (
    <div>
      <div className="body-wrapper">
        <div className="breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-content">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Login Register</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="page-section mb-60">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                {/* <div className="row mt-2">
                                <div th:if="${param.success}">
                                    Registration Successful,
                                    please check your email to complete your registration.
                                </div>
                                <div th:if="${param.error}">
                                    <p className="alert alert-danger">Invalid username or password</p>
                                </div>
                                <div th:if="${param.verified}" className="col-sm-8">
                                    <p className="alert alert-info">This account has already been verified, please log in here</p>
                                </div>
                                <div th:if="${param.valid}" className="col-sm-8">
                                    <p className="alert alert-info">Email verified successfully, please log in here</p>
                                </div>
                                <div th:if="${param.logout}" className="col-sm-8">
                                    <p className="alert alert-warning">You have been logged out.</p>
                                </div>
                            </div> */}

                {/* <form th:action="@{/login}" method="post" >
                                <div className="login-form">
                                    <h4 className="login-title">Login</h4>
                                    <div className="row">
                                        <div className="col-md-12 col-12 mb-20">
                                            <label>Email Address*</label>
                                            <input className="mb-0" type="email" placeholder="Email Address"/>
                                        </div>
                                        <div className="col-12 mb-20">
                                            <label>Password</label>
                                            <input className="mb-0" type="password" placeholder="Password"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                                <input type="checkbox" id="remember_me"/>
                                                <label for="remember_me">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-10 mb-20 text-left text-md-right">
                                            <Link to="#"> Forgotten pasward?</Link>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="register-button mt-0" th:href="@{/authenticate/login-form}">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form> */}
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                {/* <form th:action="@{/register}" method="post" th:object="${user}">
                               <div className="login-form">
                                   <h4 className="login-title">Register</h4>
                                   <div className="row">
                                       <div className="col-md-6 col-12 mb-20">
                                           <label>First Name</label>
                                           <input className="mb-0" type="text" placeholder="First Name" autoFocus="autofocus" required th:field="*{firstName}"/>
                                       </div>
                                       <div className="col-md-6 col-12 mb-20">
                                           <label>Last Name</label>
                                           <input className="mb-0" type="text" placeholder="Last Name" autoFocus="autofocus" required th:field="*{lastName}"/>
                                       </div>
                                       <div className="col-md-12 mb-20">
                                           <label>Email Address*</label>
                                           <input className="mb-0" type="email" placeholder="Email Address" autoFocus="autofocus" required th:field="*{email}"/>
                                       </div>
                                       <div className="col-md-6 mb-20">
                                           <label>Password</label>
                                           <input id="password" className="mb-0" type="password" placeholder="Password" autoFocus="autofocus" required th:field="*{password}"/>
                                       </div>
                                       <div className="col-md-6 mb-20">
                                           <label>Confirm Password</label>
                                           <input id="confirm_password" className="mb-0" type="password" placeholder="Confirm Password" autoFocus="autofocus"/>
                                       </div>
                                       <div className="col-12">
                                           <button className="register-button mt-0">Register</button>
                                       </div>
                                   </div>
                               </div>
                           </form> */}
              </div>
            </div>
          </div>
        </div>
        Login Content Area End Here
      </div>
    </div>
  );
}

export default LoginRegister;
