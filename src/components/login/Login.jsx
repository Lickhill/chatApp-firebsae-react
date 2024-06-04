import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify"; // Import toast from react-toastify

const Login = () => {
	const [avatar, setavatar] = useState({
		file: null,
		url: "",
	});

	const handleAvatar = (e) => {
		console.log("hi");
		if (e.target.files[0]) {
			setavatar({
				file: e.target.files[0],
				url: URL.createObjectURL(e.target.files[0]),
			});
		}
	};

	const handelnotification = (e) => {
		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;

		if (email === "" || password === "") {
			toast.error("Invalid SignIn");
		} else {
			toast.success("Hello");
		}
	};
	return (
		<div className="login">
			<div className="item">
				<h2>Welcome back</h2>
				<form onSubmit={handelnotification}>
					<input type="text" name="email" placeholder="E-mail" />
					<input
						type="password"
						name="password"
						placeholder="Password"
					/>
					<button className="button">Sign in</button>
				</form>
			</div>
			<div className="seperator"></div>
			<div className="item">
				<h2>Create An Account</h2>
				<form onSubmit={handelnotification}>
					<label htmlFor="file" style={{ cursor: "pointer" }}>
						<img src={avatar.url || "./avatar.png"} alt="user dp" />
					</label>
					<input
						type="file"
						id="file"
						style={{ display: "none" }}
						onChange={handleAvatar}
					/>
					<input type="text" name="username" placeholder="Username" />
					<input type="text" name="email" placeholder="E-mail" />
					<input
						type="password"
						name="password"
						placeholder="Password"
					/>
					<button className="button">Sign up</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
