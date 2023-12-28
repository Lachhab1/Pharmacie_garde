import PharmImage from '../images/images.jpeg'
import { useState } from 'react'
export default function PharmacyDetails(pharmacy) {
    const [isGarde, setIsGarde] = useState(false)
    //show all gard
    //set as garde

    const handleSetAsGarde = () => {
        setIsGarde(!isGarde)
    }

    return (
        <div className="w-1/2 mb-4  relative" >
            <div
                className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                <img
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={PharmImage}
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
            <button
                className={`absolute top-0 right-0 mt-2 p-2 bg-gray-500 rounded-lg text-white ${isGarde ? 'bg-green-500' : 'hover:bg-green-500'}`}
                onClick={handleSetAsGarde}
            >
                {isGarde ? 'Remove as Garde' : 'Set as Garde'}
            </button>
        </div>
    )
}




