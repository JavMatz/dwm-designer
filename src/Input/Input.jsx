import getLuminance from '../lib/getLuminance.js';
import isValidHexColor from '../lib/isValidHexColor.js';

export default function Input(props) {
	const inputStyle = {
		fontSize: "1em",
		width: "90%",
		backgroundColor: isValidHexColor(props.value) ? props.value : "black",
		border: "none",
		outline: "none",
		color: getLuminance(props.value) > 128 ? "black" : "white"
	}

	return (
		<input  {...props} style={inputStyle} maxLength="7" type="text" />
	)
}
