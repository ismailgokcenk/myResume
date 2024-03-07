import React from "react";
import "./social-menu.css";

const SocialMenu = () => {
	return (
		<nav className="social-menu">
			<ul>
				<li>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="no-opener no-referrer"
					>
						<i className="fa-brands fa-linkedin"></i>
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="no-opener no-referrer"
					>
						<i className="fa-brands fa-x-twitter"></i>
					</a>
				</li>
				<li>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="no-opener no-referrer"
					>
						<i className="fa-brands fa-facebook"></i>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default SocialMenu;