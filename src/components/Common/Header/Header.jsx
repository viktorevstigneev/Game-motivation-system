import React from 'react';
import './style.css';

const Header = () => (
	<div className="header">
		<p className="header__logo">GMS</p>
		<nav className="header__havbar">
			<ul className="header__topmenu">
				<li>
					<a href="" className="active">
						Profile
					</a>
				</li>
				<li>
					<a href="" className="active">
						Team
					</a>
					<ul className="header__submenu">
						<li>
							<a href="">Info</a>
						</li>
						<li>
							<a href="">Members</a>
						</li>
						<li>
							<a href="">Fractions</a>
							<ul className="header__submenu">
								<li>
									<a href="">Info</a>
								</li>
								<li>
									<a href="">Roles</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					<a href="" className="active">
						Development
					</a>
					<ul className="header__submenu">
						<li>
							<a href="">Tasks</a>
						</li>
						<li>
							<a href="">Achievements</a>
						</li>
						<li>
							<a href="">Rewards</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
);

export default Header;
