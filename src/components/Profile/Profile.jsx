import React from "react";
import "./style.scss";

const Profile = ({ name, lastName, profilePic, accountType, collapsed }) => {
	return (
		<div className="profile">
			<div className="profile__pic">
				<img src={profilePic} alt={`${name}-${lastName}`} />
			</div>
			{/* 
			//! It's possible to use collapsed param to hide
			//! info in profile when sidebar is collapsed 
			//! to do that uncomment bellow section 
			*/}
			{/* {!collapsed && (
				<div className="profile__info">
					<span>{`${name} ${lastName}`}</span>
					<span>{`${accountType} user`}</span>
				</div>
			)} */}
			<div className="profile__info">
				<span>{`${name} ${lastName}`}</span>
				<span>{`${accountType} user`}</span>
			</div>
		</div>
	);
};

export default Profile;
