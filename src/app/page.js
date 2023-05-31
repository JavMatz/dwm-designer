'use client'

import Image from 'next/image'
import { useState } from 'react';

import styles from './page.module.css'
import Bar from './bar.js'

const screenStyle = {
    width: "60%",
    margin: "2rem",
    border: "1px solid black",
    backgroundColor: "#808080",
    // background-position: center,
    // background-size: cover,
    aspectRatio: "16 / 9",
};

export default function Home() {
    const [colors, setColors] = useState({
        col_gray1: "#222222",
        col_gray2: "#444444",
        col_gray3: "#bbbbbb",
        col_gray4: "#eeeeee",
        col_cyan: "#005577"
    });

    function onChangedColorValue(event) {
        setColors(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
    }

    return (
        <main className={styles.main}>
            <div className={styles.colorControlGrid}>
                {
                    Object.keys(colors).map((color, index) => {
                        return (
                            <div key={index} className={styles.colorControlItem}>
                                {color}
                                <input key={color} name={color} value={colors[color]} onChange={onChangedColorValue} type="text" />
                            </div>
                        );
                    })
                }
            </div>
            <div style={{ ...screenStyle }}>
                <Bar colors={colors} />
            </div>
        </main>
    )
}
