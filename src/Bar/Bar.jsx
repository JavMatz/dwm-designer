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

const workspaces = [...Array(9).keys()];

function SelectedRectangle() {
    return <div className="selected_rectangle"></div>
}

function UnselectedRectangle() {
    return <div className="unselected_rectangle"></div>
}

export default function Bar({ colors }) {
    return (
        <div style={{ ...topBar, color: colors.colGray3, backgroundColor: colors.colGray1 }}>
            <div className="workspaces">
                {
                    workspaces.map((workspace, index) => {

                        if (workspace + 1 == 1) {
                            return (
                                <div key={index} id={workspace + 1} style={{ ...selectedWorkspace, color: colors.colGray4, backgroundColor: colors.colCyan }} >
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
                                <div key={index} id={workspace + 1} style={{ ...selectedWorkspace, color: colors.colGray4, backgroundColor: colors.colCyan }}>
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
            </div>
            <div className="layout_indicator"> [] </div>
            <div style={{ ...windowTitle, color: colors.colGray4, backgroundColor: colors.colCyan }}>Title of window</div>
            <div >dwm-x.x</div>
        </div>
    )
}
