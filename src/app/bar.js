import styles from './bar.module.css';

const workspaces = [...Array(9).keys()];

export default function Bar() {
    return (
        <div className={styles.topbar}>
            <div className={styles.workspaces}>
                {
                    workspaces.map((workspace) => {
                        if (workspace + 1 == 1) {
                            return (
                                <div id={workspace + 1} className={styles.selected_workspace} ><div className={styles.selected_rectangle}></div>{workspace + 1}</div>
                            )
                        } else if (workspace + 1 == 8) {
                            return (
                                <div id={workspace + 1} className={styles.unselected_workspace}><div className={styles.unselected_rectangle}></div>{workspace + 1}</div>
                            )
                        } else if (workspace + 1 == 5) {
                            return (
                                <div id={workspace + 1} className={styles.selected_workspace}>{workspace + 1}</div>
                            )
                        }
                        return (
                            <div id={workspace + 1} className={styles.unselected_workspace}>{workspace + 1}</div>
                        )
                    })
                }
                <div className={styles.layout_indicator}> [] </div>
            </div>
            <div className={styles.window_title}>Title of window</div>
            <div >dwm-x.x</div>
        </div>
    )
}
