import { useContext } from "react";
import GiftContext from "../context/gift";


const GreatGrandchild = (props) =>  {
    const giftContext = useContext(GiftContext)
    console.log(giftContext);
    const { gift, setGiftState} = useContext(GiftContext)

    return (
        <div className="container">
            <h4>Great Grand child </h4>
            <p>{props.gift}</p>
            <p>{GiftContext.gift}</p>
            <p>{gift}</p>
            <button
                onClick={() => setGiftState("football")}
            >
                click me!
            </button>
        </div>
    )
}

export default GreatGrandchild