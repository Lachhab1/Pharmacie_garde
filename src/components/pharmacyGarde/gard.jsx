import PharmacyDetails from "../PharmacyDetails";
import { useState, useEffect } from 'react'
import img1 from '../../images/images.jpeg'
import axios from "../../api/axios";

export default function Garde() {
    const [isGarde, setIsGarde] = useState(false)
    const [data, setData] = useState([]);
    //show all gard
    //set as garde
    const handleSetAsGarde = () => {
        setIsGarde(!isGarde)
    }
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("/pharmacy");
            setData(
                response?.data?.data?.map((row) => {
                    return {
                        code: row.id_p,
                        name: row.name_p,
                        address: row.address_u,
                        phone: row.phone_p,
                    };
                }
                )
            )
        } catch (error) {
            console.log(error);
        }
    };
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
                    data?.map((pharmacy, index) => {
                        return (
                            <div key={index}>
                                <PharmacyDetails pharmacy={pharmacy} />
                            </div>
                        )
                    })}
            </div>
        </>
    )
}