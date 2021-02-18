import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

import './style.css';

const Profile = () => (
	<React.Fragment>
		<Header />
		<div className="profile">
			<div className="profile__header">
				<img className="profile__image" src="" />
				<div className="profile__text">
					<h2 className="profile__full-name">Name Surname</h2>
					<h3 className="profile__nickname">Nickname</h3>
					<p className="profile__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi labore quidem rerum tempore suscipit
						odio repudiandae ad dolore! Temporibus tempore fugiat ex similique amet accusamus ducimus nam, veritatis
						totam.
					</p>
				</div>
			</div>
			<div className="profile-progress__wrapper">
				<div className="profile-achievements">
					<h3 className="profile-achievements__title">Achievements</h3>
					<ul className="profile-achievements__list">
						<li className="profile-achievements__item">
							<img src="" alt="" />
							Achievements
						</li>
						<li className="profile-achievements__item">
							<img src="" alt="" />
							Achievements
						</li>
						<li className="profile-achievements__item">
							<img src="" alt="" />
							Achievements
						</li>
					</ul>
				</div>
				<div className="profile-rewards">
					<h3 className="profile-rewards__title">
						<img src="" alt="" />
						Rewards
					</h3>
					<ul className="profile-rewards__list">
						<li className="profile-rewards__item">
							<img src="" alt="" />
							Rewards
						</li>
						<li className="profile-rewards__item">
							<img src="" alt="" />
							Rewards
						</li>
						<li className="profile-rewards__item">
							<img src="" alt="" />
							Rewards
						</li>
					</ul>
				</div>
			</div>
			<button className="profile__edit-button">Edit</button>
		</div>
		<Footer />
	</React.Fragment>
);

export default Profile;
