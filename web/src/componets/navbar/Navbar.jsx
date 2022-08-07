import React from "react";
import { RiMenu3Line, rIcloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
	return (
		<div className='gpt3__navbar'>
			<div className='gtp3__navbar-links'>
				<div className='gtp3__navbar-links_logo'>
					<img src={logo} alt='logo' />
				</div>
				<div className='gtp3__navbar-links_container'>
					<p>
						<a href='#home'>Homme</a>
					</p>
					<p>
						<a href='#wgpt3'>Que es un Faucet?</a>
					</p>
					<p>
						<a href='#possibility'>Open AI</a>
					</p>
					<p>
						<a href='#feature'>casos </a>
					</p>
					<p>
						<a href='#blog'>library</a>
					</p>
				</div>
			</div>
			<div className='gtp3__navbar-sign'>
				<p>Sign in</p>
				<button type='button'> Sign up</button>
			</div>
		</div>
	);
};

export default Navbar;
