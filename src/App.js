import './App.css';
import { useState, useEffect } from 'react';

function App() {
	/* states */
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [fieldColors, setFieldColors] = useState([
		'var(--blank)',
		'var(--blank)',
		'var(--blank',
		'var(--blank)',
		'var(--blank)',
	]);

	/* setting clock on hours and minutes change */
	useEffect(() => setFibClock(), [hours, minutes]);

	/* get current time button */
	const getCurrentTime = () => {
		setHours(new Date().getHours() % 12 || 12);
		setMinutes(new Date().getMinutes());
	};

	/* main fib clock function */
	const setFibClock = () => {
		/* represent time in fib */
		const fibArr = [5, 3, 2, 1, 1];
		let hoursTemp = hours;
		let minutesTemp = minutes;

		const hoursInFib = [];
		const minutesInFib = [];

		for (let i = 0; i < 5; i++) {
			if (hoursTemp / fibArr[i] >= 1) {
				hoursInFib.push(fibArr[i]);
				hoursTemp -= fibArr[i];
			}
			if (minutesTemp / (fibArr[i] * 5) >= 1) {
				minutesInFib.push(fibArr[i]);
				minutesTemp -= fibArr[i] * 5;
			}
		}
		/*
		console.log('hoursInFib:', hoursInFib);
		console.log('minutesInFib:', minutesInFib);
		*/

		/* set colors */
		/* rewrite to use states + useEffect */
		const colors = [];
		for (let i = 0; i < 5; i++) {
			/* setting the blue fields */
			if (hoursInFib.includes(fibArr[i]) && minutesInFib.includes(fibArr[i])) {
				colors[i] = 'var(--both)';
				hoursInFib.splice(hoursInFib.indexOf(fibArr[i]), 1);
				minutesInFib.splice(minutesInFib.indexOf(fibArr[i]), 1);
				continue;
			}

			/* setting the red fields */
			if (hoursInFib.includes(fibArr[i])) {
				colors[i] = 'var(--hours)';
				hoursInFib.splice(hoursInFib.indexOf(fibArr[i]), 1);
				continue;
			}

			/* setting the green fields */
			if (minutesInFib.includes(fibArr[i])) {
				colors[i] = 'var(--minutes)';
				minutesInFib.splice(minutesInFib.indexOf(fibArr[i]), 1);
				continue;
			}

			/* setting the white fields */
			colors[i] = 'var(--blank)';
		}
		/* console.log('colors', colors); */
		setFieldColors(colors);
	};

	return (
		<div id="fibonacciClock">
			<h1>Fibonacci Clock</h1>
			<div className="inputs">
				<div>
					<label htmlFor="hours">Hours</label>
					<input
						type="number"
						name="hours"
						id="hours"
						value={hours}
						min="1"
						max="12"
						onChange={(e) => {
							setHours(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor="minutes">Minutes</label>
					<input
						type="number"
						name="minutes"
						id="minutes"
						value={minutes}
						min="0"
						max="59"
						onChange={(e) => {
							setMinutes(e.target.value);
						}}
					/>
				</div>
				<button
					onClick={() => {
						getCurrentTime();
					}}
				>
					Get Current Time
				</button>
			</div>
			<div className="clock">
				<div className="five" style={{ backgroundColor: fieldColors[0] }}>
					5
				</div>
				<div className="three" style={{ backgroundColor: fieldColors[1] }}>
					3
				</div>
				<div className="two" style={{ backgroundColor: fieldColors[2] }}>
					2
				</div>
				<div className="oneFirst" style={{ backgroundColor: fieldColors[3] }}>
					1
				</div>
				<div className="oneSecond" style={{ backgroundColor: fieldColors[4] }}>
					1
				</div>
			</div>
		</div>
	);
}

export default App;
