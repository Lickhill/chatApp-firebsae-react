import React, { useEffect, useState } from "react";
import "./chatlist.css";
import AddUser from "./adduser/AddUser";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useStore } from "zustand";
import { useUserStore } from "../../../lib/userStore";

const Chatlist = () => {
	const [addMode, setaddMode] = useState(false);
	const [chats, setChats] = useState([]);
	const { currentUser } = useUserStore();

	useEffect(() => {
		const unsub = onSnapshot(
			doc(db, "userchats", currentUser.id),
			async (res) => {
				const items = res.data().chats;
				const promises = items.map(async (item) => {
					const userDocRef = doc(db, "users", item.receiverId);
					const userDocSnap = await getDoc(userDocRef);

					const user = userDocSnap.data();

					return { ...item, user };
				});
				const chatData = await Promise.all(promises);

				setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
			}
		);

		return () => {
			unsub();
		};
	}, [currentUser]);

	return (
		<div className="chatList">
			<div className="search">
				<div className="searchbar">
					<img src="./search.png" />
					<input type="text" placeholder="Search" />
				</div>
				<img
					className="add"
					alt="add icon"
					src={!addMode ? "./plus.png" : "./minus.png"}
					onClick={() => setaddMode((prev) => !prev)}
				/>
			</div>

			{chats.map((chat) => (
				<div className="item" key={chat.chatId}>
					<img src="./avatar.png" alt="person's dp" />
					<div className="texts">
						<span>Daaeyum</span>
						<p>{chat.lastMessage}</p>
					</div>
				</div>
			))}

			{addMode ? <AddUser /> : null}
		</div>
	);
};

export default Chatlist;
