export default function ControlWindow({ children, light = false, style = {} }) {
	const controlWindowStyle = {
		padding: "1.5em",
		backgroundColor: light ? "#fafafa" : "#242424",
	}

	return (
		<div style={{...controlWindowStyle, ...style}}>
			{children}
		</div>
	)
}
