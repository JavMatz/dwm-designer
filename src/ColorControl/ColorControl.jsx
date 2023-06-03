import './ColorControl.css';

export default function ColorControl({ colorCollection }) {
    return (
        <div className="colorControlGrid">
            {
                Object.keys(colorCollection).map((color) => {
                    return (
                        <div key={color} className="colorControlItem">
                            {color}
                            <input key={color} name={color} value={colorCollection[color]} onChange={() => {}} type="text" />
                        </div>
                    )
                })
            }
        </div>
    )
}
