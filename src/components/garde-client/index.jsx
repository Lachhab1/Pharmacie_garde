import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import imagePharmacy from '../../images/images.jpeg'
import axios from "../../api/axios";

export default function ViewGarde() {
    const [gards, setGards] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/pharmacy/garde/data").catch
                ((err) => {
                    console.log(err);
                })
            if (res.data.success) {
                setGards(res.data.data.map((row) => {
                    return {
                        code: row.id_p,
                        name: row.name_p,
                        address: row.address_u,
                        phone: row.phone_p,
                        id_period: row.id_period,
                        open: (new Date(row?.startTime)).toLocaleTimeString(),
                        close: (new Date(row?.endTime)).toLocaleTimeString(),
                        openDate: (new Date(row?.startTime)).toLocaleDateString(),
                        closeDate: (new Date(row?.endTime)).toLocaleDateString(),
                    };
                }
                ))
            }
        }
        fetchData()
    }, [gards])

    return (
        <div>
            <div className="flex flex-wrap h-100 justify-evenly">
                {
                    gards.map((gard, index) => {
                        return (
                            <div
                                className="flex flex-col  rounded-lg bg-yellow-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  md:flex-row ms-4 my-2"
                                key={index}
                            >
                                <a className='w-full flex flex-1' href={`https://www.google.com/maps/search/?api=1&query=${gard.latitude},${gard.longitude}`} target="_blank" >
                                    <img
                                        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                        src={imagePharmacy}
                                        alt=""
                                    />
                                </a>
                                <div className="flex flex-col justify-start p-6">
                                    <h5
                                        className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50"
                                    >
                                        {gard.name}
                                    </h5>
                                    <p className="mb-4 text-md font-semibold text-neutral-600 dark:text-neutral-200">
                                        {gard.address}
                                    </p>
                                    <p className="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
                                        {gard.phone}
                                    </p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                        FROM {gard.openDate} TO {gard.closeDate}
                                    </p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                        OPEN  {gard.open} TO {gard.close}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}