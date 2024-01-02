import React, { useState } from "react";
import MapComponent from "../map/mapCompenent";
import { Button, Input } from "@material-tailwind/react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
const AddPharmacy = () => {
    const [open, setOpen] = React.useState(false);
    const [coords, setCoords] = React.useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAdress] = useState('');
    const navigate = useNavigate();
    //form,ulaire  to save the info for pahramcy
    const handleSend = async (e) => {
        e.preventDefault();
        console.log(e);
        const data = {
            name_p: name,
            address_u: address,
            phone_p: phone,
            longitude: coords?.lng,
            latitude: coords?.lat
        };
        console.log(data)
        const res = await axios.post('/pharmacy', data).catch((err) => {
            console.log(err);
        }
        )
        if (res && res.data.success) {
            console.log(res)
            setName('')
            setAdress('')
            setCoords('')
            setPhone('')
            navigate('/pharmacy')
        }
    }
    return (
        <div>
            <h1 className="text-gray-600 font-semibold">Add pharmacies</h1>
            <br />
            <div className="w-3/4 mx-auto">
                <div className="flex gap-3">
                    <Input type="text" label="Name" variant="outlined" className="flex-1" value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <Input type="text" label="Phone" variant="outlined" className="flex-1" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <br />
                </div>
                <div className="flex flex-row mt-4 gap-4">
                    <Input type="text" label="Address" variant="outlined" className="flex-1" value={address} onChange={(e) => setAdress(e.target.value)} />
                    <br />
                    <button onClick={() => setOpen(prev => !prev)} className={`flex-shrink-0  bg-primary text-white font-semibold py-2 px-5 me-0 border-0 rounded-lg border-none inline-block hover:bg-blue-300 ${open ? "focus:bg-blue-300 " : " "}`}>location</button>
                </div>
            </div >
            <div className="mt-4 border-2 ">
                {open && <MapComponent close={setOpen} pos={setCoords} />}
                {!open && coords && <div className="text-gray-600 font-semibold">lat: {coords.lat} lng: {coords.lng}</div>}
            </div>
            <Button variant="outlined" color="blue" className="text-blue mt-4" onClick={(e) => handleSend(e)}>Add</Button>
        </div >
    );
}
export default AddPharmacy;