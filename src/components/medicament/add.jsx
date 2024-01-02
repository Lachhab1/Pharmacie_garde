import React from 'react'
import { Button, Input, Textarea } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../../api/axios';

export default function AddMedicament() {
    const navigate = useNavigate();
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [description, setDescription] = React.useState('')

    const handleSend = async (e) => {
        e.preventDefault();
        const res = await axios.post('/medicine', {
            name_m: name,
            price: price,
            description_m: description
        }).catch((err) => {
            console.log(err);
        }
        )
        if (res && res.data.success) {
            setName('')
            setPrice('')
            setDescription('')
            navigate('/medic')
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }


    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    return (
        <div className='flex flex-col'>
            <form>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col mx-auto mb-4'>
                        <div className='font-extrabold text-2xl'>Add Medicament</div>
                        <div className='text-sm text-gray-400'>Add new medicament</div>
                    </div>
                    <div className='flex flex-row'>
                        <Link to={'/medic'}>
                            <Button
                                size="sm"
                                variant='filled'
                                className="w-20 h-10 rounded-full text-center shadow-lg mr-2 text-black"
                                children='Cancel'
                                color='white' />
                        </Link>
                        <Button
                            size="sm"
                            variant='filled'
                            className="w-20 h-10 rounded-full text-center"
                            color='light-blue'
                            onClick={handleSend}
                            children='Save'
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-6 w-96 mx-auto'>
                        <Input variant="outlined" label="Name" placeholder='Name' value={name} onChange={handleNameChange} />
                        <Input variant="outlined" label="Price" placeholder='Price' value={price} onChange={handlePriceChange} />
                        <Textarea label="Description" size='md' rows={6} value={description} onChange={handleDescriptionChange} />
                    </div>
                </div>
            </form>
        </div>
    )
}
