import { useState } from 'react';
import ColorControl from './ColorControl';
import Screen from './Screen';
import './App.css';

export default function App() {
    const [classicColors, setClassicColors] = useState({
        colGray1: "#222222",
        colGray2: "#444444",
        colGray3: "#bbbbbb",
        colGray4: "#eeeeee",
        colCyan: "#005577"
    });

    const [colors, setColors] = useState({
        normalForeground: "#bbbbbb",
        normalBackground: "#222222",
        normalBorder: "#444444",
        selectedForeground: "#eeeeee",
        selectedBackground: "#005577",
        selectedBorder: "#005577"
    });

    const [barProperties, setBarProperties] = useState({
        show: true,
        top: true
    });

    return (
        <div className="main">
            <div className="controlPanel">
                <ColorControl colorCollection={colors} />
            </div>
            <Screen barProps={barProperties} />
        </div>
    )
}
