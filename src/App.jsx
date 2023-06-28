import { useState } from 'react';
import Bar from './Bar';
import ControlWindow from './ControlWindow/'
import ControlElementContainer from './ControlElementContainer/'
import getLuminance from './lib/getLuminance.js';
import isValidHexColor from './lib/isValidHexColor.js';
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

	const background = backgroundProperties.useColor
		? { background: backgroundProperties.color }
		: {
			backgroundImage: backgroundProperties.imagePath
				? `url(${URL.createObjectURL(backgroundProperties.imagePath)})`
				: `url(../../public/wallpaper.png)`,
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover"
		};

	const border = {
		border: `${windowProperties.borderSize}px solid ${colors.colCyan}`
	};

	const inputStyle = {
		fontSize: "1em",
		width: "90%",
		backgroundColor: isValidHexColor(backgroundProperties.color) ? backgroundProperties.color : "black",
		border: "none",
		outline: "none",
		color: getLuminance(backgroundProperties.color) > 128 ? "black" : "white"
	}

	const draggableStyle = {
		background: "#f0f0f0",
		padding: "10px",
		borderRadius: "1em",
		width: "8em",
		height: "10em"
	}

	const controlWindowStyle = {
		...border,
		justifySelf: "center",
		alignSelf: "center",
	}

	return (
		<div className="main" style={
			{
				...background,
				flexDirection: barProperties.top ? "column" : "column-reverse"
			}
		}>
			{
				barProperties.show
					? <Bar colors={colors} workspaces={barProperties.workspaces} />
					: <></>
			}
			<div className="windowGrid">
				<ControlWindow light={false} style={controlWindowStyle}>
					<ControlElementContainer>
						Color controls
					</ControlElementContainer>
				</ControlWindow>
				<ControlWindow light={true} style={controlWindowStyle}>
					<ControlElementContainer light={true}>
						Show bar <input name="show" checked={barProperties.show} onChange={handleBarPropertyChange} type="checkbox" />
						Bar on top <input name="top" checked={barProperties.top} onChange={handleBarPropertyChange} type="checkbox" />
					</ControlElementContainer>
					<ControlElementContainer light={true}>
						Use color as background
						<input name="useColor" checked={backgroundProperties.useColor} onChange={handleBackgroundPropertyChange} type="checkbox" />
						{
							backgroundProperties.useColor
								? <div className="backgroundControlItem">
									<input name="color" value={backgroundProperties.color} onChange={handleBackgroundPropertyChange} style={inputStyle} maxLength="7" type="text" />
								</div>
								: <div className="backgroundControlItem">
									<input name="backgroundImage" id="backgroundImage" onChange={handleBackgroundPropertyChange} value="" accept="image/*" type="file" multiple={false} />
								</div>
						}
					</ControlElementContainer>
				</ControlWindow>
			</div>
		</div>
	)
}
