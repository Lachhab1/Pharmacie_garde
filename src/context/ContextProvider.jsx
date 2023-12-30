import { useContext, useState } from "react";
import { createContext, useEffect } from "react";


const stateContext = createContext({
    isAuth: false,
    role: "",
    login: () => { },
    logout: () => { },
    setErrors: () => { },
    setIsAuth: () => { },
    user: null,
    notification: null,
    setNotification: () => { },
    token: null,
    errors: null,
    setUser: () => { },
    setToken: () => { },
    sideOpen: false,
    setsideOpen: () => { },
    panier: [],
    addToPanier: () => { },
    removeFromPanier: () => { },
})

export const ContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [role, setRole] = useState('')
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [errors, setErrors] = useState([])
    const [notification, setNotification] = useState(null)
    const [sideOpen, setsideOpen] = useState(false)
    const login = ({ email, password }) => {
        if (email == "admin" && password === "admin") {
            setIsAuth(true)
            setRole("admin")
            setUser({ name: "admin", email: "admin" })
            setToken("token")
        }
        else if (email === "client" && password === "client") {
            setIsAuth(true)
            setRole("client")
            setUser({ name: "client", email: "client" })
            setToken("token")
        }
        else {
            setErrors(["email or password incorrect"])
        }
    }
    const logout = () => {
        setIsAuth(false)
        setRole("")
        setUser(null)
        setToken(null)
        setErrors([])
    }
    useEffect(() => {
        console.log("sideOpen: " + sideOpen)
    }, [sideOpen]
    )
    //panier things
    const [panier, setPanier] = useState(localStorage.getItem("panier") ? JSON.parse(localStorage.getItem("panier")) : []);
    const addToPanier = (product) => {
        setPanier([...panier, product]);
    };
    const removeFromPanier = (product) => {
        let newPanier = panier.filter((item) => item.id != product.id)
        setPanier(newPanier)
        localStorage.removeItem("panier")
        localStorage.setItem("panier", JSON.stringify(newPanier))
    }
    useEffect(() => {
        setPanier(JSON.parse(localStorage.getItem("panier")))
    }, [localStorage.getItem("panier")])
    useEffect(() => {
        localStorage.setItem("panier", JSON.stringify(panier));
    }, [panier])

    return (
        <stateContext.Provider value={{ isAuth, setIsAuth, role, login, logout, errors, setErrors, sideOpen, setsideOpen, panier, addToPanier, removeFromPanier }}>
            {children}
        </stateContext.Provider>
    )
}

export const UseStateContext = () => useContext(stateContext)

