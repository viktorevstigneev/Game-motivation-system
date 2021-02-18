import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

import './style.css';

const Members = () => (
	<React.Fragment>
		<Header />
		<div className="members">
			<h2 className="members__title">Members</h2>
			<ul className="members__list">
				<li className="members__item">
					<img className="members__photo" src="" alt="" />
					<div className="members__desription">
						<h3 className="members__name">Name Surname</h3>
						<p className="members__role">Role</p>
					</div>
				</li>
				<li className="members__item">
					<img className="members__photo" src="" alt="" />
					<div className="members__desription">
						<h3 className="members__name">Name Surname</h3>
						<p className="members__role">Role</p>
					</div>
				</li>
				<li className="members__item">
					<img className="members__photo" src="" alt="" />
					<div className="members__desription">
						<h3 className="members__name">Name Surname</h3>
						<p className="members__role">Role</p>
					</div>
				</li>
			</ul>
		</div>
		<Footer />
	</React.Fragment>
);

export default Members;
