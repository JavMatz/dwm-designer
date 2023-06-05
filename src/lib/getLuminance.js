export default function getLuminance(hexColor) {
	const hexValue = hexColor.replace('#', '');
	const red = hexValue.substring(0, 2);
	const green = hexValue.substring(2, 4);
	const blue = hexValue.substring(4, 6);

	const luminance = 0.2126 * parseInt(red, 16) + 0.7152 * parseInt(green, 16) + 0.0722 * parseInt(blue, 16);
	return luminance;
}
