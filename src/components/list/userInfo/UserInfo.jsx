import React from "react";
import "./userinfo.css";
import { useUserStore } from "../../../lib/userStore";

const UserInfo = () => {
	const { currentUser } = useUserStore();

	return (
		<div className="Userinfo">
			<div className="user">
				<img src="./avatar.png" alt="avatar image" />
				<h2>{currentUser.username}</h2>
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
