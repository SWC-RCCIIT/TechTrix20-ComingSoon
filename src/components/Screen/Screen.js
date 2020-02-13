import React, { useState, useEffect } from "react";
import "./Screen.css";
import Button from "../Buttons/Button";
import Footer from "../Footer/Footer";

const Screen = function() {
	const timeLeft = () => {
		const difference = +new Date("2020-03-05") - +new Date();
		let remainingTime = {};

		if (difference > 0) {
			remainingTime = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
    }
    console.log("🐽");
		return remainingTime;
	};

	let [result, setResult] = useState(timeLeft());

	useEffect(() => {
		setInterval(() => {
			setResult(timeLeft());
		}, 1000);
	}, []);

	return (
		<div>
			<div className="container mt-5">
				<div className="row">
					<div className="col-12">
						<center>
							<img
								src="./img/logo-2.png"
								alt="img"
								className="mr-3"
								width="250px"
								height="250px"
							/>
						</center>
					</div>
				</div>
			</div>
			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-md-2 col-lg-1 col-4 mb-2 mb-md-0 timer-box pt-4 pb-4 mr-2">
						<div className="row">
							<div className="col-12">
								<div className="timer-box-num" name="days">
									{result.days}
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="timer-box-text">
									<h5>Days</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-2 col-lg-1 col-4 mb-2 mb-md-0 timer-box pt-4 pb-4 mr-2">
						<div className="row">
							<div className="col-12">
								<div className="timer-box-num" name="hours">
									{result.hours}
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="timer-box-text">
									<h5>Hours</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-2 col-lg-1 col-4 timer-box pt-4 pb-4 mr-2">
						<div className="row">
							<div className="col-12">
								<div className="timer-box-num" name="minutes">
									{result.minutes}
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="timer-box-text">
									<h5>Minutes</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-2 col-lg-1 col-4 timer-box pt-4 pb-4 mr-2">
						<div className="row">
							<div className="col-12">
								<div className="timer-box-num" name="seconds">
									{result.seconds}
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="timer-box-text">
									<h5>Seconds</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<div className="container mt-5">
				<Button />
			</div>
			<br />
			<br />
			<br />
			<br />
			<Footer />
		</div>
	);
};

export default Screen;
