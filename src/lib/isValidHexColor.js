export default function isValidHexColor(hexString) {
	const regexColor = new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$");
	return regexColor.test(hexString);
}
