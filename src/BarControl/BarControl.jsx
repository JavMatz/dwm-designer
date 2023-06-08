import './BarControl.css';

export default function BarControl({ propHandler, barProperties }) {
	return (
		<div className="barControlGrid">
			<div className="barControlItem">
				Show bar <input name="show" checked={barProperties.show} onChange={propHandler} type="checkbox" />
			</div>
			<div className="barControlItem">
				Bar on top <input name="top" checked={barProperties.top} onChange={propHandler} type="checkbox" />
			</div>
		</div>
	)
}
