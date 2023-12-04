import { useContext, useState } from "react";
import {createContext,useEffect} from "react";


const stateContext = createContext({
    wewe: "wewe",
    isAuth: false,
})

export const ContextProvider = ({children}) => {
    return (
        <stateContext.Provider value={{}}>
            {children}
        </stateContext.Provider>
    )
}

export const UseStateContext = () => useContext(stateContext)

