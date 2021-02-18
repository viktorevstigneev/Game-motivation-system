import React from 'react';
import './style.css';

const ModalForm = () => (
	<div className="authorization-window">
		<h3 className="authorization__title">Sign IN</h3>
		<button className="authorization__close-button">x</button>
		<form className="authorization-form" action="">
			<label htmlFor="login">Login</label>
			<input className="authorization-form__input" id="login" placeholder="Login" />
			<label htmlFor="password">Password</label>
			<input className="authorization-form__input" id="password" placeholder="Password" />
			<label htmlFor="team-login">Team login</label>
			<input className="authorization-form__input" id="team-login" placeholder="Team login" />
			<label htmlFor="team-password">Team Password</label>
			<input className="authorization-form__input" id="team-password" placeholder="Team password" />
			<button>Submit</button>
		</form>
	</div>
);
// Modal => Form({ fields: [{ label, type, placeholder, name }], title, submitText })
export default ModalForm;
