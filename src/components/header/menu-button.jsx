import React from "react";
import "./menu-button.css";

const MenuButton = () => {
	return (
		<>
			<label htmlFor="chkMenu" className="lbl-menu">
				<i className="fa-solid fa-bars fa-2x"></i>
			</label>
			<input type="checkbox" id="chkMenu" className="chk-menu" />
		</>
	);
};

export default MenuButton;