import React from "react";
import { ToastContainer } from "react-toastify";
import "./notification.css";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
	return (
		<div className="">
			<ToastContainer position="bottom-right"></ToastContainer>
		</div>
	);
};

export default Notification;
