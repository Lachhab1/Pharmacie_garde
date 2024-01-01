import { useContext, useState } from "react";
import { createContext, useEffect } from "react";
import axios from "../api/axios";


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
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN") ? localStorage.getItem("ACCESS_TOKEN") : null)
    const [errors, setErrors] = useState([])
    const [notification, setNotification] = useState(null)
    const [sideOpen, setsideOpen] = useState(false)
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }
    const login = ({ email, password }) => {
        axios.post("/user/login", { email, password }).then((res) => {
            if (res.data.success) {
                setIsAuth(true)
                setRole(res.data.data.role)
                setUser(`${res.data.data.first_name} ${res.data.data.last_name}`)
                setToken("secret")
            }
            else {
                setErrors(res.data.errors)
            }
        }
        ).catch((err) => {
            setErrors(["email or password incorrect"])
        })
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
        if (panier.find((item) => item.id == product.id)) {
            let newPanier = panier.map((item) => {
                if (item.id == product.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            setPanier(newPanier)
            localStorage.removeItem("panier")
            localStorage.setItem("panier", JSON.stringify(newPanier))
            return
        }
        product.quantity = 1;
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
        <stateContext.Provider value={{ isAuth, token, setIsAuth, role, login, logout, errors, setErrors, sideOpen, setsideOpen, panier, addToPanier, removeFromPanier }}>
            {children}
        </stateContext.Provider>
    )
}

export const UseStateContext = () => useContext(stateContext)

