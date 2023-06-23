import { useState, useEffect } from 'react';

export default function Draggable({ children, style = {}, initialX = 0, initialY = 0, width = "auto", heigth = "auto" }) {

	const [dragInfo, setDragInfo] = useState({
		position: {
			x: initialX,
			y: initialY
		},
		isDraggin: false,
		rel: null
	});

	useEffect(() => {
		if (dragInfo.isDraggin) {
			document.addEventListener('mousemove', onMouseMove)
			document.addEventListener('mouseup', onMouseUp)
		}
		return () => {
			document.removeEventListener('mousemove', onMouseMove)
			document.removeEventListener('mouseup', onMouseUp)
		}
	}, [dragInfo.isDraggin]);

	function onMouseDown(event) {
		if (event.button !== 0) return
		setDragInfo(prevState => ({
			...prevState,
			isDraggin: true,
		}));
		event.stopPropagation()
		event.preventDefault()
	}

	function onMouseUp(event) {
		setDragInfo(prevState => ({ ...prevState, isDraggin: false }));
		event.stopPropagation()
		event.preventDefault()
	}

	function onMouseMove(event) {
		if (!dragInfo.isDraggin) return
		setDragInfo(prevState => ({
			...prevState,
			position: {
				x: prevState.position.x + event.movementX,
				y: prevState.position.y + event.movementY
			}
		}));
		event.stopPropagation()
		event.preventDefault()
	}

	const dimensions = {
		position: "absolute",
		left: `${dragInfo.position.x}px`,
		top: `${dragInfo.position.y}px`,
		width: `${heigth}`,
		heigth: `${width}`,
	}

	return (
		<div id="draggable" style={{ ...dimensions, ...style }} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
			{children}
		</div>
	)
}
