import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css";

const Chat = () => {
	const [showEmoji, setShowEmoji] = useState(false);
	const [defaultValue, setDefaultValue] = useState("");

	const endref = useRef(null);
	useEffect(() => {
		endref.current?.scrollIntoView({ behavior: "smooth" });
	});
	const handelEmoji = (e) => {
		console.log(e.emoji);
		setDefaultValue((prev) => prev + e.emoji);
	};
	return (
		<div className="chatu">
			<div className="top">
				<div className="user">
					<img src="./avatar.png" alt="user dp" />
					<div className="texts">
						<span>Full Name</span>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div className="icon">
					<img src="./phone.png" alt="phone icon" />
					<img src="./video.png" alt="video icon" />
					<img src="./info.png" alt="info icon" />
				</div>
			</div>
			<div className="center">
				<div className="message">
					<img src="./avatar.png" alt="user dp" />
					<div className="texts">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Minima possimus, iste explicabo eligendi
							ratione illo officiis reprehenderit velit officia
							voluptatem.
						</p>
						<span>1min ago</span>
					</div>
				</div>

				<div className="message own">
					<div className="texts">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Minima possimus, iste explicabo eligendi
							ratione illo officiis reprehenderit velit officia
							voluptatem.
						</p>
						<span>1min ago</span>
					</div>
				</div>

				<div className="message">
					<img src="./avatar.png" alt="user dp" />
					<div className="texts">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Minima possimus, iste explicabo eligendi
							ratione illo officiis reprehenderit velit officia
							voluptatem.
						</p>
						<img
							src="https://thumbs.dreamstime.com/b/motivational-words-llc-keyboard-background-business-concept-llc-short-logical-link-control-motivational-words-llc-209643606.jpg?w=1400"
							alt="image sent by the person you are texting with."
						/>
						<span>1min ago</span>
					</div>
				</div>

				<div className="message own">
					<div className="texts">
						<img
							src="https://thumbs.dreamstime.com/b/motivational-words-llc-keyboard-background-business-concept-llc-short-logical-link-control-motivational-words-llc-209643606.jpg?w=1400"
							alt="Imge the user sent you"
						/>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Minima possimus, iste explicabo eligendi
							ratione illo officiis reprehenderit velit officia
							voluptatem.
						</p>
						<span>1min ago</span>
					</div>
				</div>
				<div ref={endref}></div>
			</div>
			<div className="bottom">
				<div className="icons">
					<img src="./img.png" alt="image icon" />
					<img src="./camera.png" alt="cam icon" />
					<img src="./mic.png" alt="mic icon" />
				</div>

				<input
					type="text"
					placeholder="Enter Your Message..."
					value={defaultValue}
					onChange={(e) => setDefaultValue(e.target.value)}
				/>

				<div className="emoji">
					<img
						src="./emoji.png"
						alt="emoji icon"
						onClick={() => setShowEmoji((prev) => !prev)}
					/>
					<div className="picker">
						{showEmoji ? (
							<EmojiPicker onEmojiClick={handelEmoji} />
						) : null}
					</div>
				</div>

				<button className="sendButton" type="submit">
					Send
				</button>
			</div>
		</div>
	);
};

export default Chat;
