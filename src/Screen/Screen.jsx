import Bar from '../Bar';
import './Screen.css';

const screenStyle = {
	display: "flex",
	justifyContent: "space-between",
	width: "50%",
	backgroundColor: "#808080",
	aspectRatio: "16 / 9",
};

const dummyWindow = {
	//Check the height of windows
	height: '100%',
	margin: '10px',
	borderStyle: 'solid',
	// opacity: '0.95',
	fontFamily: 'monospace',
	fontSize: '1em',
	backgroundColor: 'black',
	color: 'grey',
}

export default function Screen({ colors, barProps, windowProps }) {
	return (
		<div style={{ ...screenStyle, flexDirection: barProps.top ? "column" : "column-reverse" }}>
			{
				barProps.show ? <Bar colors={colors} workspaces={barProps.workspaces} /> : <></>
			}
			<div className="windowGrid">
				<div className="masterArea">
					<div style={{ ...dummyWindow, margin: windowProps.gaps ? '1em' : '0em',  border: `${windowProps.borderSize}px solid ${colors["colBorder"]}` }}> user@host:/home</div>
				</div>
				<div className="stackArea">
					<div style={{ ...dummyWindow, margin: windowProps.gaps ? '1em' : '0em',border: `${windowProps.borderSize}px solid ${colors["colBorder"]}` }}> user@host:/home</div>
					<div style={{ ...dummyWindow, margin: windowProps.gaps ? '1em' : '0em',border: `${windowProps.borderSize}px solid ${colors["colBorder"]}` }}> user@host:/home</div>
				</div>
			</div>
		</div>
	)
}
