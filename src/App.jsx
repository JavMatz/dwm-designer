import { useState } from 'react';
import ColorControl from './ColorControl';
import BarControl from './BarControl';
import BackgroundControl from './BackgroundControl';
import WindowControl from './WindowControl';
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

	const [barProperties, setBarProperties] = useState({
		show: true,
		top: true,
		workspaces: ["1", "2", "3", "4", "5", "6", "7", "8", "9",]
	});

	const [windowProperties, setWindowProperties] = useState({
		borderSize: 1,
		gaps: false,
		layout: "Tiled"
	});

	const [backgroundProperties, setBackgroundProperties] = useState({
		useColor: true,
		color: '#808080',
		imagePath: null,
	})

	// Color control
	function onChangedColor(event) {
		if (useExtraBorderColor) {
			setColors(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
		} else {
			if (event.target.name === "colCyan") {
				setColors(prevState => ({ ...prevState, [event.target.name]: event.target.value, colBorder: event.target.value }));
			} else {
				setColors(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
			}
		}
	}

	// Extra border color control
	function handleExtraBorderColorToggle() {
		setUseExtraBorderColor(prevState => !prevState);
	}

	function handleBarPropertyChange(event) {
		if (event.target.name === "show") {
			setBarProperties(prevState => ({ ...prevState, show: !prevState.show }));
		} else {
			setBarProperties(prevState => ({ ...prevState, top: !prevState.top }));
		}
	}

	function handleWindowPropertyChange(event) {
		if (event.target.name === "gaps") {
			setWindowProperties(prevState => ({ ...prevState, gaps: !prevState.gaps }));
		} else if (event.target.name === "windowLayout") {
			setWindowProperties(prevState => ({ ...prevState, layout: event.target.value }))
		} else {
			setWindowProperties(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
		}
	}

	function handleBackgroundPropertyChange(event) {
		if (event.target.name === "useColor") {
			setBackgroundProperties(prevState => ({ ...prevState, useColor: !prevState.useColor }));
		} else if (event.target.name === "color") {
			setBackgroundProperties(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
		} else {
			setBackgroundProperties(prevState => ({ ...prevState, imagePath: event.target.files[0] }))
		}
	}

	return (
		<div className="main">
			<div className="controlPanel">
				<BackgroundControl propHandler={handleBackgroundPropertyChange} backgroundProps={backgroundProperties} />
				<div className="colorControlGrid">
					<ColorControl extraBorderToggle={handleExtraBorderColorToggle} extraBorder={useExtraBorderColor} colorChangeHandler={onChangedColor} colors={colors} />
				</div>
				<BarControl propHandler={handleBarPropertyChange} barProperties={barProperties} />
				<WindowControl propHandler={handleWindowPropertyChange} windowProps={windowProperties} />
			</div>
			<Screen colors={colors} barProps={barProperties} windowProps={windowProperties} backgroundProps={backgroundProperties} />
		</div>
	)
}
