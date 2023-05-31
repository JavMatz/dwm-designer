'use client'

import styles from './bar.module.css';
import { useState, useEffect } from 'react';

const workspaces = [...Array(9).keys()];

const topBar = {
    width: '100%',
    fontFamily: 'monospace',
    display: 'flex',
};

const selectedWorkspace = {
    position: 'relative',
    width: '100%',
    padding: '2px 8px',
    flex: '1',
};

const unselectedWorkspace = {
    position: 'relative',
    padding: '2px 8px',
};

const windowTitle = {
    flex: "2",
    verticalAlign: "middle",
    padding: '2px 5px',
};

function SelectedRectangle() {
    return <div className={styles.selected_rectangle}></div>
}

function UnselectedRectangle() {
    return <div className={styles.unselected_rectangle}></div>
}

export default function Bar(props) {
    const [col_gray1, setCol_gray1] = useState("#222222");
    const [col_gray2, setCol_gray2] = useState("#444444");
    const [col_gray3, setCol_gray3] = useState("#bbbbbb");
    const [col_gray4, setCol_gray4] = useState("#eeeeee");
    const [col_cyan, setCol_cyan] = useState("#005577");

    useEffect(() => {
        setCol_gray1(props.colors.col_gray1);
        setCol_gray2(props.colors.col_gray2);
        setCol_gray3(props.colors.col_gray3);
        setCol_gray4(props.colors.col_gray4);
        setCol_cyan(props.colors.col_cyan);
    }, [props]);

    return (
        <div style={{ ...topBar, color: col_gray3, backgroundColor: col_gray1 }}>
            <div className={styles.workspaces}>
                {
                    workspaces.map((workspace, index) => {
                        if (workspace + 1 == 1) {
                            return (
                                <div key={index} id={workspace + 1} style={{ ...selectedWorkspace, color: col_gray4, backgroundColor: col_cyan }} >
                                    <SelectedRectangle />{workspace + 1}
                                </div>
                            )
                            // 8 & 5 are random values, nothing special
                        } else if (workspace + 1 == 8) {
                            return (
                                <div key={index} id={workspace + 1} style={{ ...unselectedWorkspace }}>
                                    <UnselectedRectangle />{workspace + 1}
                                </div>
                            )
                        } else if (workspace + 1 == 5) {
                            return (
                                <div key={index} id={workspace + 1} style={{ ...selectedWorkspace, color: col_gray4, backgroundColor: col_cyan }}>
                                    {workspace + 1}
                                </div>
                            )
                        }
                        return (
                            <div key={index} style={{ ...unselectedWorkspace }}>
                                {workspace + 1}
                            </div>
                        )
                    })
                }
                <div className={styles.layout_indicator}> [] </div>
            </div>
            <div style={{ ...windowTitle, color: col_gray4, backgroundColor: col_cyan }}>Title of window</div>
            <div >dwm-x.x</div>
        </div>
    )
}
