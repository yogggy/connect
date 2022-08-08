
import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
	return (
		<div className="login_box">
			<div className="login_main">
				<div className="row login_body min-h">
					<div className="col-md-6 part-1">
						<img className="insta_Phones" src="phones.png" alt="" />
                        <div className='d-flex justify-content-center store-div'>
                            <img className="store-download" src="app-store.jpg" alt="" />
                            <img className="store-download" src="google-play.jpg" alt="" />
                        </div>
                        
					</div>
					<div className="col-md-6 part-2">
						<div className="login_body-container">
							<img
								className="app_headerImage_login"
								src="./insta-logo.png"
								alt=""
							/>
							<div class="form-floating mb-3">
								<input
									type="email"
									class="form-control input-child"
									id="floatingInput"
									placeholder="name@example.com"
								/>
								<label for="floatingInput">Email ID</label>
							</div>
							<div class="form-floating input-child">
								<input
									type="password"
									class="form-control"
									id="floatingPassword"
									placeholder="Password"
								/>
								<label for="floatingPassword">Password</label>
							</div>
                            <button className='login-btn input-child' type='submit'>Log In</button>
                            <div className='or-line'>
                                <hr className='line' />
                                <span>or</span>
                                <hr className='line'/>
                            </div>
                            <h5 className='text-capitalize color-primary'> <img className='facebook-login' src="facebook-logo.png" alt="" /> Login with facebook</h5>
                            <p className='forgot-pass'>Forgot Password?</p>
                            <div>
                                <h6 className='pt-5 pb-1'>Don't Have Account ?</h6>
                                <Link to='/signup'><span className='login-btn p-2'> Sign Up </span></Link>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
