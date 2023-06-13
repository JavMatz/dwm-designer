import getLuminance from '../lib/getLuminance.js';
import isValidHexColor from '../lib/isValidHexColor.js';

import './BackgroundControl.css';

export default function BackgroundControl({ propHandler, backgroundProps }) {
	const inputStyle = {
		fontSize: "1em",
		width: "90%",
		backgroundColor: isValidHexColor(backgroundProps.color) ? backgroundProps.color : "black",
		border: "none",
		outline: "none",
		color: getLuminance(backgroundProps.color) > 128 ? "black" : "white"
	}

	return (
		<div className="backgroundControlFlex">
			<div className="backgroundControlItem">
				Use color as background
				<input name="useColor" checked={backgroundProps.useColor} onChange={propHandler} type="checkbox" />
			</div>
			{
				backgroundProps.useColor
					? <div className="backgroundControlItem">
						<input name="color" value={backgroundProps.color} onChange={propHandler} style={inputStyle} maxLength="7" type="text" />
					</div>
					: <div className="backgroundControlItem">
						<input name="backgroundImage" id="backgroundImage" onChange={propHandler} value="" accept="image/*" type="file" multiple={false} />
					</div>
			}
		</div>
	)
}
