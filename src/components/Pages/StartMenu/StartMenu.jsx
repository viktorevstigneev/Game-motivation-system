import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const StartMenu = () => (
	<div className="start-window">
		<button className="start-window__button"> Create a Team </button>
		<Link className="start-window__button" to="/modalForm">
			Sign In
		</Link>
		<button className="start-window__button"> Sign Up </button>
	</div>
);

export default StartMenu;
