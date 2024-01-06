import PharmacyDetails from "../PharmacyDetails";
import { useState, useEffect } from 'react'
import img1 from '../../images/images.jpeg'
import axios from "../../api/axios";
import SettedGard from "./SettedGard";

export default function Garde() {
    const [isGarde, setIsGarde] = useState(false)
    const [data, setData] = useState([]);
    const [pharmacyNotingarde, setPharmacyNotInGarde] = useState([]);
    //show all gard
    //set as garde
    const handleSetAsGarde = () => {
        setIsGarde(!isGarde)
    }
    useEffect(() => {
        fetchData();
    }, [data, pharmacyNotingarde]);

    const fetchData = async () => {
        try {
            const response = await axios.get("/pharmacy/garde/data");
            const res = await axios.get("/pharmacy/garde/notsettedGarde");
            setPharmacyNotInGarde(res?.data?.data.map((row) => {
                return {
                    code: row.id_p,
                    name: row.name_p,
                    address: row.address_u,
                    phone: row.phone_p,
                };
            })
            )
            setData(
                response?.data?.data?.map((row) => {
                    return {
                        code: row.id_p,
                        name: row.name_p,
                        address: row.address_u,
                        phone: row.phone_p,
                        id_period: row.id_period,
                        openDate: `${(new Date(row?.startTime)).getFullYear().toString()}-${((new Date(row?.startTime)).getMonth() + 1).toString().padStart(2, '0')}-${(new Date(row?.startTime)).getDate().toString().padStart(2, '0')}`,
                        close: (new Date(row?.endTime)).toLocaleTimeString(),
                        open: (new Date(row?.startTime)).toLocaleTimeString(),
                        closeDate: `${(new Date(row?.endTime)).getFullYear().toString()}-${((new Date(row?.endTime)).getMonth() + 1).toString().padStart(2, '0')}-${(new Date(row?.endTime)).getDate().toString().padStart(2, '0')}`,
                    };
                }
                    // )
                ))
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex flex-wrap justify-evenly">
                {
                    data?.map((pharmacy, index) => {
                        return (
                            <div key={index}>
                                <SettedGard pharmacy={pharmacy} />
                            </div>
                        )
                    })}
            </div>
            <div className="w-full h-2 bg-brown-900"></div>
            <div className="flex flex-wrap justify-evenly">
                {
                    pharmacyNotingarde?.map((pharmacy, index) => {
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