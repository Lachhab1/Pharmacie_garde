import React from 'react'
import { Button, Input, Textarea } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function EditMedicament() {
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
                    >
                        Save
                    </Button>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-6 w-96 mx-auto'>
                    <Input variant="outlined" label="Name" placeholder='Name' />
                    <Input variant="outlined" label="Code" placeholder='Code' />
                    <Input variant="outlined" label="Price" placeholder='Price' />
                    <Input variant="outlined" label="Quantity" placeholder='Quantity' />

                    <Textarea label="Description" size='md' rows={6} />
                </div>

            </div>
        </div>
    )
}
