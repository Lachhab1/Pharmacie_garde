import PharmImage from '../images/images.jpeg'
import { useState, useEffect } from 'react'
import axios from "../api/axios";
export default function PharmacyDetails(pharmacy) {
    const [isGarde, setIsGarde] = useState(false)
    const [showModal, setShowModal] = useState(false) // Add state for modal visibility
    const [openTime, setOpenTime] = useState('08:00:00') // Add state for open time
    const [closeTime, setCloseTime] = useState('21:00:00') // Add state for close time
    const [selectedDate, setSelectedDate] = useState('') // Add state for selected date
    const [guardEndDate, setGuardEndDate] = useState('') // Add state for guard end date
    const [idGard, setIdGard] = useState('') // Add state for guard end date
    const [inputError, setInputError] = useState(false) // Add state for input error

    const handleCloseModal = () => {
        setShowModal(false) // Close modal
    }

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value) // Update selected date state
    }

    const handleGuardEndDateChange = (event) => {
        setGuardEndDate(event.target.value) // Update guard end date state
    }

    const sendData = async (e) => {
        e.preventDefault();
        if (selectedDate && guardEndDate) {
            const res = await axios.post('/pharmacy/garde', {
                id_p: pharmacy?.pharmacy?.code,
                startTime: selectedDate + ' ' + openTime,
                endTime: guardEndDate + ' ' + closeTime
            }).catch((err) => {
                console.log(err);
            })
            if (res.data.success) {
                console.log(res.data.data);
                setIdGard(res.data.data.insertId)
            }
        } else {
            setInputError(true) // Set input error to true if start date or end date is not provided
        }
    }
    const handleSetAsGarde = (e) => {
        setIsGarde(!isGarde)
        if (selectedDate && guardEndDate) {
            setShowModal(true) // Show modal when setting as garde
            !isGarde ? sendData(e) : axios.delete(`/pharmacy/garde/${idGard}`).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }
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
                        {pharmacy?.pharmacy?.name}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Address : {pharmacy?.pharmacy?.address}
                    </p>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Tel: {pharmacy?.pharmacy?.phone}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-300">
                        OPEN FROM {openTime} TO {closeTime}
                    </p>
                    <label htmlFor="startDate" className="text-sm text-neutral-500 dark:text-neutral-300">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className={`mt-2 p-2 border ${inputError && !selectedDate ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {inputError && !selectedDate && <p className="text-red-500">Start date is required</p>}
                    <label htmlFor="endDate" className="text-sm text-neutral-500 dark:text-neutral-300">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={guardEndDate}
                        onChange={handleGuardEndDateChange}
                        className={`mt-2 p-2 border ${inputError && !guardEndDate ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {inputError && !guardEndDate && <p className="text-red-500">End date is required</p>}
                </div>
            </div>
            {selectedDate && guardEndDate && (
                <button
                    className={`absolute top-0 right-0 mt-2 p-2 bg-gray-500 rounded-lg text-white ${isGarde ? 'bg-green-500' : 'hover:bg-green-500'}`}
                    onClick={handleSetAsGarde}
                >
                    {isGarde ? 'Remove as Garde' : 'Set as Garde'}
                </button>
            )}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p>Open from {openTime} to {closeTime}</p>
                        <p>Date: {selectedDate}</p>
                        <p>Guard End Date: {guardEndDate}</p>
                        <button className="mt-2 p-2 bg-gray-500 rounded-lg text-white" onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}
