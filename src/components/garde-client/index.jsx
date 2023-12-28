import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import imagePharmacy from '../../images/images.jpeg'
export default function ViewGarde() {
    const [gards, setGards] = useState([
        {
            name: "Pharmacie 1",
            isGarde: true,
            image: "https://images.unsplash.com/photo-1612838250290-6d5c3e6d9f6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3klMjB3aWRnZXQlMjBwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            open: "8:00 AM",
            close: "9:00 PM",
            longitude: 33.700867037355344,
            latitude: - 7.35743207939808
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
    ])

    return (
        <div>
            <div className="flex flex-wrap h-100">
                {
                    gards.map((gard, index) => {
                        return (

                            <div
                                className="flex flex-col rounded-lg bg-yellow-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row mx-auto my-2">
                                <img
                                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                    src={imagePharmacy}
                                    alt="" />
                                <div className="flex flex-col justify-start p-6">
                                    <h5
                                        className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                        Card title
                                    </h5>
                                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                        OPEN FROM 8:00 AM TO 9:00 PM
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