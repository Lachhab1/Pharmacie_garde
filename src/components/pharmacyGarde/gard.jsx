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