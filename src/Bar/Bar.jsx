import './Bar.css';

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
    return <div className="selected_rectangle"></div>
}

function UnselectedRectangle() {
    return <div className="unselected_rectangle"></div>
}

export default function Bar({ colors, workspaces }) {
    return (
        <div style={{ ...topBar, color: colors.colGray3, backgroundColor: colors.colGray1 }}>
            <div className="workspaces">
                {
                    workspaces.map((tag, index) => {

                        if (tag == 1) {
                            return (
                                <div key={index} id={tag} style={{ ...selectedWorkspace, color: colors.colGray4, backgroundColor: colors.colCyan }} >
                                    <SelectedRectangle />{tag}
                                </div>
                            )
                            // 8 & 5 are random values, nothing special
                        } else if (tag == 8) {
                            return (
                                <div key={index} id={tag} style={{ ...unselectedWorkspace }}>
                                    <UnselectedRectangle />{tag}
                                </div>
                            )
                        } else if (tag == 5) {
                            return (
                                <div key={index} id={tag} style={{ ...selectedWorkspace, color: colors.colGray4, backgroundColor: colors.colCyan }}>
                                    {tag}
                                </div>
                            )
                        }
                        return (
                            <div key={index} style={{ ...unselectedWorkspace }}>
                                {tag}
                            </div>
                        )
                    })
                }
            </div>
            <div className="layout_indicator"> [] </div>
            <div style={{ ...windowTitle, color: colors.colGray4, backgroundColor: colors.colCyan }}>Title of window</div>
            <div >dwm-x.x</div>
        </div>
    )
}
