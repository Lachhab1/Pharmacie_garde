import flecheRight from "/src/assets/icons8-flèche-droite-color-32.png"
import logo from "/src/assets/icons8-pharmacie-icon-3.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    const Menu = [
        { name: "Dashboard", icon: "/src/assets/icons8-tableau-de-bord-48.png", link: "/" },
        { name: "Medicaments", icon: "/src/assets/icons8-main-avec-une-pilule-48.png", link: "/medic" },
        { name: "Livraisons", icon: "/src/assets/icons8-livraison-48.png", link: "/liv" },
        { name: "Garde", icon: "/src/assets/icons8-visite-48.png", link: "/gar" }
    ]

    return (
        <div className={`bg-primary relative duration-300 pt-8 p-5 ${isOpen ? "w-72" : "w-20"}`}>
            <img src={flecheRight} alt="arrow" className={`w-7 absolute cursor-pointer rounded-full -right-3 top-9 hover:border-cyan-500 ${isOpen ? "rotate-180 active:border-b-neutral-500 hover:border-b-neutral-50 border-2" : "border-0"}`} onClick={toggleSidebar} />
            <div className="flex gap-x-4 items-center">
                <img src={logo} alt="logo" className="cursor-pointer duration-500 w-10" />
                <h1 className={`text-white origin-left font-medium duration-300 text-3xl ${!isOpen && "scale-0"}`}>Pharmacie</h1>
            </div>
            <div className={`flex flex-col gap-y-5 mt-10`} style={{ maxHeight: "calc(100% - 200px)", overflowY: "auto" }}>
                {/* Menu items */}
                {Menu.map((item, index) => {
                    return (
                        <Link to={item.link}>
                            <div key={index} className="flex gap-x-4 items-center cursor-pointer py-2 hover:bg-gray-200 hover:bg-opacity-25 hover:rounded-md hover:text-secondary-200">
                                <img src={item.icon} alt="icon" className="w-8 ps-2" />
                                <h1 className={`text-white font-medium text-lg ${!isOpen && "hidden"}`}>
                                    {item.name}
                                </h1>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

