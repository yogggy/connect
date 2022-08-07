import React from 'react'
import './header.css'
import { Button,Form } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="app">
    <div className="app_header">
      <img className="app_headerImage" src="./insta-logo.png" alt="" />
      <div className='d-flex header_form'>
      <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <button className='login-white-btn' >Log In</button>
          <button className='signin-white-btn' >sign Up</button>
          </div>
     
    </div>
</div>
  )
}

export default Header;