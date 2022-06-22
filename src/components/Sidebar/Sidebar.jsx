import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import Category from "../Category/Category";
import Item from "../Item/Item";
import Profile from "../Profile/Profile";
// constants
import { sideBar, user } from "../../data/constants";
// icons
import { faAngleLeft, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faYahoo } from "@fortawesome/free-brands-svg-icons";
// style
import "./style.scss";

const DarkMode = () => {
	const [theme, setTheme] = useState("light");

	const handleDarkMode = () => {
		document.getElementById("app").classList.toggle("dark");
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button id="toggle-dark-mode" onClick={() => handleDarkMode()}>
			<span className="item__icon">
				<FontAwesomeIcon icon={faLightbulb} />
			</span>
			<span className="item__title">{`${
				theme === "light" ? "dark" : "light"
			} mode`}</span>
		</button>
	);
};

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<section id="sidebar" className={collapsed ? "collapsed" : null}>
			<header>
				<span className="sidebar__logo">
					<FontAwesomeIcon icon={faYahoo} size="2x" />
				</span>
				<button
					className="toggle"
					onClick={() => {
						setCollapsed(!collapsed);
					}}
				>
					<FontAwesomeIcon icon={faAngleLeft} rotation={collapsed ? 180 : 0} />
				</button>
			</header>
			{sideBar.map((category, idx) => {
				return (
					<Category title={category.title} key={idx}>
						{category.items.map((item, idx) => {
							return <Item collapsed={collapsed} {...item} key={idx} />;
						})}
					</Category>
				);
			})}
			<DarkMode />
			<Profile collapsed={collapsed} {...user} />
		</section>
	);
};

export default Sidebar;
