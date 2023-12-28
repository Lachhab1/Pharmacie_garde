import PharmacyDetails from "../PharmacyDetails";
import { useState } from 'react'
import img1 from '../../images/images.jpeg'

export default function Garde() {
    const [isGarde, setIsGarde] = useState(false)
    //show all gard
    //set as garde
    const handleSetAsGarde = () => {
        setIsGarde(!isGarde)
    }
    const pharmacies = [
        {
            name: "Pharmacie 1",
            isGarde: true,
            image: { img1 }
        },
        {
            name: "Pharmacie 2",
            isGarde: false,
            image: "https://images.unsplash.com/photo-1612838250290-6d5c3e6d9f6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3klMjB3aWRnZXQlMjBwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
            name: "Pharmacie 3",
            isGarde: false,
            image: "https://images.unsplash.com/photo-1612838250290-6d5c3e6d9f6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3klMjB3aWRnZXQlMjBwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        },
    ]
    return (
        <>
            <div className="flex flex-wrap justify-start">
                {
                    pharmacies.map((pharmacy, index) => {
                        return (
                            <PharmacyDetails pharmacy={pharmacy} />
                        )
                    })}
            </div>
        </>
    )
}