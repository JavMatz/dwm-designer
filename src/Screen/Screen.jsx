import Bar from '../Bar';

const screenStyle = {
    display: "flex",
    // alignItems: "flex-start",
    width: "100%",
    margin: "2rem",
    border: "1px solid black",
    backgroundColor: "#808080",
    // background-position: center,
    // background-size: cover,
    aspectRatio: "16 / 9",
};

export default function Screen({ barProps }) {
    return (
        <div style={{ ...screenStyle, flexDirection: barProps.top ? "column" : "column-reverse" }}>
            {
                barProps.show ? <Bar/> : <></>
            }
        </div>
    )
}
