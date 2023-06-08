import Input from '../Input';
import getLuminance from '../lib/getLuminance.js';
import isValidHexColor from '../lib/isValidHexColor.js';

import './ColorControl.css';

const colorItem = {
	width: "100%",
	height: "5em",
	placeSelf: "center",
	justifyContent: "space-between",
	display: "flex",
	flexFlow: "column",
	backgroundColor: "black"
	// gridTemplateColumns: "4rem 4rem",
	// gridTemplateRows: "3rem",
	// padding: "2rem"
}

const colorName = {
	fontSize: "1.5em",
	// border: "1px solid black",
	// justifySelf: "start",
	alignSelf: "flex-start"
}

const colorValue = {
	// border: "1px solid black",
	// justifySelf: "end",
	alignSelf: "flex-end"
}

export default function ColorControl({ extraBorderToggle, extraBorder, colorChangeHandler, colors }) {
	const extraBorderColor = colors.colBorder;

	return (
		<div className="colorControlPanel">
			<div className="toggles">
				<span>Extra border color <input checked={extraBorder} onChange={extraBorderToggle} type="checkbox" /> </span>
			</div>
			<div className="colorGrid">
				{
					Object.keys(colors).map((color) => {
						if (color != "colBorder") {
							return (
								<div key={color} style={{ ...colorItem, backgroundColor: isValidHexColor(colors[color]) ? colors[color] : "black" }} >
									<div style={{ ...colorName, color: getLuminance(colors[color]) > 128 ? "black" : "white" }}>{isValidHexColor(colors[color]) ? color : "Mal color"}</div>
									<div style={{ ...colorValue }}>
										<Input key={color} name={color} value={colors[color]} onChange={colorChangeHandler} />
									</div>
								</div>
							)
						}
					})
				}
				{
					extraBorder
						? <div key="colBorder" style={{ ...colorItem, backgroundColor: isValidHexColor(extraBorderColor) ? extraBorderColor : "black" }} >
							<div style={{ ...colorName, color: getLuminance(extraBorderColor) > 128 ? "black" : "white" }}>colBorder</div>
							<div style={{ ...colorValue }}>
								<Input key="colBorder" name="colBorder" value={extraBorderColor} onChange={colorChangeHandler} />
							</div>
						</div>
						: null
				}
			</div>
		</div>
	)
}
