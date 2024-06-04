import React from "react";
import "./userinfo.css";

const UserInfo = () => {
	return (
		<div className="Userinfo">
			<div className="user">
				<img src="./avatar.png" alt="avatar image" />
				<h2>Likhil N Maiya</h2>
			</div>
			<div className="icon">
				<img src="./more.png" />
				<img src="./video.png" />
				<img src="./edit.png" />
			</div>
		</div>
	);
};

export default UserInfo;
