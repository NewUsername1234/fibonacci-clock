import './App.css';


function App() {
	return (
		<div id="fibonacciClock">
      <h1>Fibonacci Clock</h1>
			<div className="inputs">
				<div>
					<label htmlFor="hours">Hours</label>
					<input type="number" name="hours" id="hours" />
				</div>
				<div>
					<label htmlFor="minutes">Minutes</label>
					<input type="number" name="minutes" id="minutes" />
				</div>
				<button>Get Current Time</button>
			</div>
			<div className="clock">
				<div className="five">5</div>
				<div className="three">3</div>
				<div className="two">2</div>
				<div className="one-1">1</div>
				<div className="one-2">1</div>
			</div>
		</div>
	);
}

export default App;
