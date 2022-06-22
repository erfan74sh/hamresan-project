import React from "react";
import "./style.scss";

const Item = ({ collapsed, title, icon, url }) => {
	return (
		<li className="item" title={title}>
			<a href={url}>
				<span className="item__icon">{icon}</span>
				{/* 
				//! It's possible to use collapsed param to hide
				//! title in Item when sidebar is collapsed 
				//! to do that uncomment bellow section 
			*/}
				{/* {!collapsed && <span className="item__title">{title}</span>} */}
				<span className="item__title">{title}</span>
			</a>
		</li>
	);
};

export default Item;
