import Bar from '../Bar';

const screenStyle = {
	display: "flex",
	width: "50%",
	backgroundColor: "#808080",
	aspectRatio: "16 / 9",
};

const dummyWindow = {
	//Check the height of windows
	height: '100%',
	borderStyle: 'solid',
	// opacity: '0.95',
	fontFamily: 'monospace',
	backgroundColor: 'black',
	color: 'grey',
}

export default function Screen({ colors, barProps }) {
	return (
		<div style={{ ...screenStyle, flexDirection: barProps.top ? "column" : "column-reverse" }}>
			{
				barProps.show ? <Bar colors={colors} workspaces={barProps.workspaces}/> : <></>
			}
			<div style={{ ...dummyWindow, border: `2px solid ${colors["colBorder"]}` }}> user@host:/home</div>
		</div>
	)
}
