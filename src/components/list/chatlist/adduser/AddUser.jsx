import React, { useState } from "react";
import "./adduser.css";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

const AddUser = () => {
	const [user, setUser] = useState(null);
	const handlesearch = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const username = formData.get("username");

		try {
			// Create a reference to the cities collection
			console.log("nigga");
			const userRef = collection(db, "users");

			// Create a query against the collection.
			const q = query(userRef, where("username", "==", username));

			const querySnapShot = await getDocs(q);
			if (!querySnapShot.empty) {
				console.log("nigger");
				setUser(querySnapShot.docs[0].data());
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="addUser">
			<form onSubmit={handlesearch}>
				<input type="text" placeholder="Username" name="Username" />
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
					<button>Add User</button>
				</div>
			)}
		</div>
	);
};

export default AddUser;
