import GreatGrandchild from "./GreatGrandChild";
const GrandChild = (props) => (
    <div className="container">
        <h3>Grand child (level 3)</h3>
        <GreatGrandchild gift = {props.gift} />
        <GreatGrandchild gift = {props.gift} />
        <GreatGrandchild gift = {props.gift} />

    </div>
)

export default GrandChild;