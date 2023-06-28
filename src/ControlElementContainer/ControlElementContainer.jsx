export default function ControlElementContainer({ children, light = false, style = {} }) {
	const controlComponentStyle = {
		margin: "1em",
		padding: "2em",
		borderRadius: "10px",
		boxShadow: `0px 0px 4px ${light ? "#dfdfdf" : "#202020" }`,
		backgroundColor: light ? "#ffffff" : "#363636",
		color: light ? "#000000" : "#ffffff",
	}

	return (
		<div style={{ ...controlComponentStyle, ...style }}>
			{children}
		</div>
	)
}
