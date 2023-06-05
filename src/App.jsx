import { useState } from 'react';
import ColorControl from './ColorControl';
import BarControl from './BarControl';
import Screen from './Screen';
import './App.css';

export default function App() {
	const [colors, setColors] = useState({
		colGray1: "#222222",
		colGray2: "#444444",
		colGray3: "#bbbbbb",
		colGray4: "#eeeeee",
		colCyan: "#005577",
		colBorder: "#005577"
	});

	const [useExtraBorderColor, setUseExtraBorderColor] = useState(false);

	// Color control
	function onChangedColor(event) {
		if (useExtraBorderColor) {
			setColors(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
		} else {
			if (event.target.name === "colCyan") {
				setColors(prevState => ({ ...prevState, [event.target.name]: event.target.value, extraColBorder: event.target.value }));
			} else {
				setColors(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
			}
		}
	}

	// Extra border color control
	function handleExtraBorderColorToggle() {
		setUseExtraBorderColor(prevState => !prevState);
	}

	const [barProperties, setBarProperties] = useState({
		show: true,
		top: true
	});

	return (
		<div className="main">
			<div className="controlPanel">
				<div className="colorControlGrid">
					<ColorControl extraBorderToggle={handleExtraBorderColorToggle} extraBorder={useExtraBorderColor} colorChangeHandler={onChangedColor} colors={colors} />
				</div>
			</div>
			<Screen colors={colors} barProps={barProperties} />
		</div>
	)
}
