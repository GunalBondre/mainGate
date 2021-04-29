import React from "react";
import "../stylesheet/header.scss";
import { useDispatch, useSelector } from "react-redux";

import { Nav, Navbar, Link, Button } from "react-bootstrap";
const Header = () => {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<div className="container">
					<Navbar.Brand href="#home">mailGate</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
						</Nav>
						<Nav className="mr-right">
							<Nav.Link href="#link">Login</Nav.Link>
							<Nav.Link href="#link">Signup</Nav.Link>
						</Nav>
					</Navbar.Collapse>{" "}
				</div>
			</Navbar>
		</div>
	);
};

export default Header;
