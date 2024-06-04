import React, { useState } from "react";
import "./chatlist.css";

const Chatlist = () => {
	const [addMode, setaddMode] = useState(false);
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

			<div className="item">
				<img src="./avatar.png" alt="person's dp" />
				<div className="texts">
					<span>Daaeyum</span>
					<p>Hello</p>
				</div>
			</div>
			<div className="item">
				<img src="./avatar.png" alt="person's dp" />
				<div className="texts">
					<span>Daaeyum</span>
					<p>Hello</p>
				</div>
			</div>
			<div className="item">
				<img src="./avatar.png" alt="person's dp" />
				<div className="texts">
					<span>Daaeyum</span>
					<p>Hello</p>
				</div>
			</div>
			<div className="item">
				<img src="./avatar.png" alt="person's dp" />
				<div className="texts">
					<span>Daaeyum</span>
					<p>Hello</p>
				</div>
			</div>
		</div>
	);
};

export default Chatlist;
