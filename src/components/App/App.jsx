import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import StartMemu from '../Pages/StartMenu';
import ModalForm from '../Common/ModalForm';
import Profile from '../Pages/Profile';
import Members from '../Pages/Members';

import './App.css';

const App = () => (
	<Switch>
		<Route path="/menu" component={StartMemu} />
		<Route path="/modalForm" component={ModalForm} />
		<Route path="/profile" component={Profile} />
		<Route path="/members" component={Members} />
		<Redirect from="/" to="/menu" />
	</Switch>
);

export default App;
