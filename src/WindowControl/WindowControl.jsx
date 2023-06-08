export default function WindowControl({ propHandler, windowProps }) {
	return (
		<div className="windowControlGrid">
			<div className="windowControlItem">
				Border size <input key="borderSize" name="borderSize" value={windowProps.borderSize} onChange={propHandler} type="text" />
			</div>
			<div className="windowControlItem">
				Gaps <input name="gaps" checked={windowProps.gaps} onChange={propHandler} type="checkbox" />
			</div>
		</div>
	)
}
