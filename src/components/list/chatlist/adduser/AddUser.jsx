import React from "react";
import "./adduser.css";

const AddUser = () => {
	return (
		<div className="addUser">
			<form>
				<input type="text" placeholder="Username" name="Username" />
				<button type="submit">Search User</button>
			</form>
			<div className="user">
				<div className="detail">
					<img src="./avatar.png" alt="user's profile pic" />
					<span>Likhil</span>
				</div>
				<button>Add User</button>
			</div>
		</div>
	);
};

export default AddUser;
