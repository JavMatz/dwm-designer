import Bar from '../Bar';
import './Screen.css';

const dummyWindow = {
	//Check the height of windows
	height: '100%',
	margin: '10px',
	borderStyle: 'solid',
	opacity: '0.95',
	fontFamily: 'monospace',
	fontSize: '1em',
	backgroundColor: 'black',
	color: 'grey',
}

export default function Screen({ colors, barProps, windowProps, backgroundProps }) {
	const screenStyleColor = {
		display: "flex",
		flexDirection: barProps.top ? "column" : "column-reverse",
		justifyContent: "space-between",
		width: "50%",
		backgroundColor: backgroundProps.color,
		aspectRatio: "16 / 9",
	};

	const screenStyleImage = {
		display: "flex",
		flexDirection: barProps.top ? "column" : "column-reverse",
		justifyContent: "space-between",
		width: "50%",
		backgroundImage: backgroundProps.imagePath ? `url(${URL.createObjectURL(backgroundProps.imagePath)})` : `url(https://th.bing.com/th/id/OIP.Tq7bk1q1RlzEL1k-oo1a2wHaE0?w=250&h=180&c=7&r=0&o=5&pid=1.7)`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		aspectRatio: "16 / 9",
	};

	function Tiled() {
		return (
			<>
				<div className="masterArea">
					<div style={{ ...dummyWindow, margin: windowProps.gaps ? '1em' : '0em', border: `${windowProps.borderSize}px solid ${colors["colBorder"]}` }}> user@host:/home</div>
				</div>
				<div className="stackArea">
					<div style={{ ...dummyWindow, margin: windowProps.gaps ? '1em' : '0em', border: `${windowProps.borderSize}px solid ${colors["colGray2"]}` }}> user@host:/home</div>
					<div style={{ ...dummyWindow, margin: windowProps.gaps ? '1em' : '0em', border: `${windowProps.borderSize}px solid ${colors["colGray2"]}` }}> user@host:/home</div>
				</div>
			</>
		)
	}

	function SingleFloating() {
		return (
			<>
				<div style={{ ...dummyWindow, height: "60%", margin: '2em', border: `${windowProps.borderSize}px solid ${colors["colBorder"]}` }}> user@host:/home</div>
			</>
		)
	}

	function renderSwitch(layout) {
		switch (layout) {
			case 'Tiled':
				return <Tiled />
			case 'Floating':
				return <SingleFloating />
			case 'Empty':
				return <></>
			default:
				return <></>
		}
	}

	return (
		<div style={backgroundProps.useColor ? screenStyleColor : screenStyleImage}>
			{
				barProps.show ? <Bar colors={colors} workspaces={barProps.workspaces} /> : <></>
			}
			<div className="windowGrid">
				{
					renderSwitch(windowProps.layout)
				}
			</div>
		</div>
	)
}
