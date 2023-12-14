import React from 'react'
import { Button, Input, Textarea } from "@material-tailwind/react";
export default function AddMedicament() {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col mx-auto mb-4'>
                    <div className='font-extrabold text-2xl'>Add Medicament</div>
                    <div className='text-sm text-gray-400'>Add new medicament</div>
                </div>
                <div className='flex flex-row'>
                    <Button
                        size="sm"
                        variant='contained'
                        className="w-20 h-10 rounded-full text-center shadow-lg mr-2"
                        color='white'
                    >
                        Cancel
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
