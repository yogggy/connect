import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './header2.css';

const Header2 = () => {
	return (
		<>
			<div className="header-2-box">
				<div className="header-2-form">
					<Form className="d-flex ">
						<Form.Control
							type="search"
							name="search"
							id="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>

						<Button variant="outline-success">
							<i className="pt-2">
								<span class="material-symbols-outlined">search</span>
							</i>
						</Button>
					</Form>
				</div>
				<div className="header-add-post">
                <span className="header-logout">
                    <i className="add-post-more">
					<span class="material-symbols-outlined">logout</span>
						</i>
                        <span>Logout</span>
					</span>
				</div>
				<div className="header-add-post">
                <span className="header-add-post-card">
                    <i className="add-post-more">
							<span class="material-symbols-outlined">add_circle</span>
						</i>
                        <span>Add Post</span>
					</span>
				</div>
				
				
			</div>
		</>
	);
};

export default Header2;
