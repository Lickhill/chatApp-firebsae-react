import React, { useState } from "react";
import "./adduser.css";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { toast } from "react-toastify";

const AddUser = () => {
	const [user, setUser] = useState(null);
	const handleSearch = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const username = formData.get("username");

		try {
			const userRef = collection(db, "users");

			const q = query(userRef, where("username", "==", username));

			const querySnapShot = await getDocs(q);

			if (!querySnapShot.empty) {
				setUser(querySnapShot.docs[0].data());
			} else {
				toast.info("No user found by this name...");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleAdd = async (e) => {
		try {
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="addUser">
			<form onSubmit={handleSearch}>
				<input type="text" placeholder="Username" name="username" />
				<button type="submit">Search User</button>
			</form>
			{user && (
				<div className="user">
					<div className="detail">
						<img
							src={user.avatar || "./avatar.png"}
							alt="user's profile pic"
						/>
						<span>{user.username}</span>
					</div>
					<button onClick={handleAdd}>Add User</button>
				</div>
			)}
		</div>
	);
};

export default AddUser;
