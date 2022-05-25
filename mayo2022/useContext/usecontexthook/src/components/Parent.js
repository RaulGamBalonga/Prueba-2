import Child from "./Child";

const Parent = (props) => (
    <div className="container">
        <h1>Parent (level 1)</h1>
        <Child gift = {props.gift}/>
    </div>
)

export default Parent;