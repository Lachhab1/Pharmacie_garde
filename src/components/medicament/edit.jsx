import React, { useState, useEffect } from 'react';
import { Button, Input, Textarea } from "@material-tailwind/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from '../../api/axios';

export default function EditMedicament() {
    const { code } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/medicine/${code}`);
                const { name_m, price, description_m } = response.data.data;
                setName(name_m);
                setPrice(price);
                setDescription(description_m);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [code]);

    const handleSave = async (e) => {
        e.preventDefault();
        // Update the data using axios.put('/medicine') with the state values
        const res = await axios.patch(`/medicine/${code}`, {
            id_m: code,
            name_m: name,
            price: price,
            description_m: description
        })
            .catch(error => {
                console.log(error);
            });
        if (res && res.data.success) {
            setName('');
            setPrice('');
            setDescription('');
            navigate('/medic');
        }
    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col mx-auto mb-4'>
                    <div className='font-extrabold text-2xl'>Edit Medicament</div>
                    <div className='text-sm text-gray-400'>Edit the medicament</div>
                </div>
                <div className='flex flex-row'>
                    <Button
                        size="sm"
                        variant='contained'
                        className="w-20 h-10 rounded-full text-center shadow-lg mr-2"
                        color='white'
                    >
                        <Link to={'/medic'}>
                            Cancel
                        </Link>
                    </Button>
                    <Button
                        size="sm"
                        variant='contained'
                        className="w-20 h-10 rounded-full text-center"
                        color='light-blue'
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-6 w-96 mx-auto'>
                    <Input variant="outlined" label="Name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <Input variant="outlined" label="Price" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                    <Textarea label="Description" size='md' rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>
        </div>
    );
}
