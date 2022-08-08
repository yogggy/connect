import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
	const [value , setValues] = useState({
		email:"",
		phone:"",
		fullname:"",
		username:"",
		password:""
	})
	const changeHandler = (event) => {
		if(event.target.name === "mobile")
		{
			setValues((prev)=>{
				return {...prev , phone:event.target.value}
			})
		}else if(event.target.name === "email"){
			setValues((prev)=>{
				return {...prev , email:event.target.value}
			})
		}else if(event.target.name === "fullname"){
			setValues((prev)=>{
				return {...prev , fullname:event.target.value}
			})
		}else if(event.target.name === "username"){
			setValues((prev)=>{
				return {...prev , username:event.target.value}
			})
		}else if(event.target.name === "password"){
			setValues((prev)=>{
				return {...prev , password:event.target.value}
			})
		}
	}
	const onSubmitHandler = (e)=>{
		e.preventDefault()
		console.log(value)
	}

  return (
    <div className="login_box-signup">
			<div className="login_main">
				<div className="row login_body min-h2">
					<div className="col-md-6 part-1">
						<img className="insta_Phones" src="phones.png" alt="" />
                        <div className='d-flex justify-content-center store-div'>
                            <img className="store-download" src="app-store.jpg" alt="" />
                            <img className="store-download" src="google-play.jpg" alt="" />
                        </div>
					</div>
					<div className="col-md-6 part-2-signup">
						<div className="signup_body-container">
							<img
								className="app_headerImage_signup"
								src="./insta-logo.png"
								alt=""
							/>
                            <span className='signup-suggestion'>Sign up to see photos and videos <br /> from your friends.</span>
                            <span className='signup-btn input-child' type='submit'>Log in with Facebook</span>
                            <div className='or-line'>
                                <hr className='line' />
                                <span>or</span>
                                <hr className='line'/>
                            </div>
							<form onSubmit={onSubmitHandler}>
							<div className="form-floating mb-3">
								<input
									type="email"
									className="form-control input-child"
									id="floatingInput"
									placeholder="name@example.com"
									onChange={changeHandler}
									name="email"
									required
								/>
								<label htmlFor="floatingInput">Email ID</label>
							</div>
							<div className="form-floating mb-3">
								<input
									type="text"
									className="form-control input-child"
									id="floatingmobile"
									placeholder="name@example.com"
									onChange={changeHandler}
									name="mobile"
									required
								/>
								<label htmlFor="floatingmobile">Mobile</label>
							</div>
                            <div className="form-floating mb-3">
								<input
									type="text"
									className="form-control input-child"
									id="floatingname"
									placeholder="name@example.com"
									onChange={changeHandler}
									name="fullname"
									required
								/>
								<label htmlFor="floatingname">Full Name</label>
							</div>
                            <div className="form-floating mb-3">
								<input
									type="text"
									className="form-control input-child"
									id="floatingusername"
									placeholder="name@example.com"
									onChange={changeHandler}
									name="username"
									required
								/>
								<label htmlFor="floatingusername">Username</label>
							</div>
							<div className="form-floating input-child">
								<input
									type="password"
									className="form-control"
									id="floatingPassword"
									placeholder="Password"
									onChange={changeHandler}
									name="password"
									required
								/>
								<label htmlFor="floatingPassword">Password</label>
							</div>
                            <button className='login-btn input-child' type='submit'>Sign Up</button>
							</form>
                            <div className='mt-4 '>
                                <h6 className='py-1 mb-3'> Already Have Account ?</h6>
                              	<Link to='/' ><span className='login-btn p-2'>Log In</span>  </Link>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Signup;
