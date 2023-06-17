import { useRef, useState, useEffect } from 'react';

export default function Draggable({ children, initialX = 0, initialY = 0, }) {
	const boxRef = useRef(0);

	const [dragInfo, setDragInfo] = useState({
		position: {
			x: initialX,
			y: initialY
		},
		draggin: false,
		rel: null
	});

	useEffect(() => {
		if (dragInfo.draggin) {
			document.addEventListener('mousemove', onMouseMove)
			document.addEventListener('mouseup', onMouseUp)
		}
		return () => {
			document.removeEventListener('mousemove', onMouseMove)
			document.removeEventListener('mouseup', onMouseUp)
		}
	}, [dragInfo.draggin]);

	function getPosition() {
		const x = boxRef.current.offsetLeft;
		const y = boxRef.current.offsetTop;

		return { xcoord: x, ycoord: y }
	}

	function onMouseDown(event) {
		if (event.button !== 0) return
		let pos = getPosition();
		setDragInfo(prevState => ({
			...prevState,
			draggin: true,
			rel: {
				x: event.pageX - pos.xcoord,
				y: event.pageY - pos.ycoord
			}
		}));
		event.stopPropagation()
		event.preventDefault()
	}

	function onMouseUp(event) {
		setDragInfo(prevState => ({ ...prevState, draggin: false }));
		event.stopPropagation()
		event.preventDefault()
	}

	function onMouseMove(event) {
		if (!dragInfo.draggin) return
		setDragInfo(prevState => ({
			...prevState,
			position: {
				x: event.pageX - prevState.rel.x,
				y: event.pageY - prevState.rel.y
			}
		}));
		event.stopPropagation()
		event.preventDefault()
	}

	const draggable = {
		position: "absolute",
		left: `${dragInfo.position.x}px`,
		top: `${dragInfo.position.y}px`,
	}

	return (
		<div ref={boxRef} style={draggable} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
			{children}
		</div>
	)
}
