import React from "react";
import "./detail.css";
import { auth } from "../../lib/firebase";

const Detail = () => {
	return (
		<div className="detail">
			<div className="user">
				<img src="./avatar.png" alt="user dp" />
				<h2>Full Name</h2>
				<p>Lorem ipsum dolor sit.</p>
			</div>
			<div className="info">
				<div className="option">
					<div className="title">
						<span>Chat Setting</span>
						<img src="./arrowUp.png" alt="arrow icon" />
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Privacy & help</span>
						<img src="./arrowUp.png" alt="arrow icon" />
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Photos shared</span>
						<img src="./arrowDown.png" alt="arrow icon" />
					</div>
					<div className="photos">
						<div className="photoItems">
							<div className="photoDetails">
								<img
									src="https://thumbs.dreamstime.com/b/motivational-words-llc-keyboard-background-business-concept-llc-short-logical-link-control-motivational-words-llc-209643606.jpg?w=1400"
									alt="image shared by the user"
								/>
								<span>photo1.png</span>
							</div>
							<img
								className="downloadimg"
								src="./download.png"
								alt="download button"
							/>
						</div>
						<div className="photoItems">
							<div className="photoDetails">
								<img
									src="https://thumbs.dreamstime.com/b/motivational-words-llc-keyboard-background-business-concept-llc-short-logical-link-control-motivational-words-llc-209643606.jpg?w=1400"
									alt="image shared by the user"
								/>
								<span>photo1.png</span>
							</div>
							<img
								className="downloadimg"
								src="./download.png"
								alt="download button"
							/>
						</div>
						<div className="photoItems">
							<div className="photoDetails">
								<img
									src="https://thumbs.dreamstime.com/b/motivational-words-llc-keyboard-background-business-concept-llc-short-logical-link-control-motivational-words-llc-209643606.jpg?w=1400"
									alt="image shared by the user"
								/>
								<span>photo1.png</span>
							</div>
							<img
								className="downloadimg"
								src="./download.png"
								alt="download button"
							/>
						</div>
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Shared Files</span>
						<img src="./arrowUp.png" alt="arrow icon" />
					</div>
				</div>
				<button>Block User</button>
				<button className="logout" onClick={() => auth.signOut()}>
					Log Out
				</button>
			</div>
		</div>
	);
};

export default Detail;
