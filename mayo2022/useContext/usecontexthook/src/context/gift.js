import { createContext, useState } from "react";

const GiftContext = createContext({
    gift:"toy car"
})

const GiftContextProvider = ({children}) => {
    const [giftState, setGiftState] = useState("book");

    return (
        <GiftContext.Provider value={{gift: giftState, setGiftState:setGiftState}}>
        {children}
        </GiftContext.Provider>
    )
}

export default GiftContext;
export {GiftContextProvider};