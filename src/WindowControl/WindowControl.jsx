import './WindowControl.css';

const windowLayouts = ["Tiled", "Floating", "Single tiled", "Empty"];

export default function WindowControl({ propHandler, windowProps }) {
	return (
		<div className="windowControlFlex">
			<div className="windowControlItem">
				Gaps <input name="gaps" checked={windowProps.gaps} onChange={propHandler} type="checkbox" />
			</div>
			<div className="windowControlItem">
				Border size <input className="borderSizeInput" key="borderSize" name="borderSize" value={windowProps.borderSize} onChange={propHandler} type="text" />
			</div>
			<div className="windowControlItem">
				Layout
				<select name="windowLayout" id="windowLayout" onChange={propHandler}>
					{
						windowLayouts.map((layout) => {
							return (
								<option value={layout} key={layout}>{layout}</option>
							)
						})
					}
				</select>
			</div>
		</div>
	)
}
