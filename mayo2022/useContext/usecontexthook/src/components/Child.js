import GrandChild from "./GrandChild"

const Child = (props) => (
    <div className="container">
        <h2>Child (level 2)</h2>
        <GrandChild gift = {props.gift} />
    </div>
)

export default Child;