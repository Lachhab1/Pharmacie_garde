import React, { useState, useEffect } from "react";
import MapComponent from "../map/mapCompenent";
import { Button, Input } from "@material-tailwind/react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const EditPharmacy = () => {
    const { code } = useParams();
    const [open, setOpen] = React.useState(false);
    const [coords, setCoords] = React.useState(null);
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/pharmacy/${code}`);
                const { name_p, address_u, id_p, longitude, latitude, phone_p } = response.data.data;
                setName(name_p);
                setPhone(phone_p);
                setAddress(address_u);
                setCoords({
                    lat: latitude,
                    lng: longitude,
                });
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [code]);

    const sendData = async () => {
        try {
            const response = await axios.patch(`/pharmacy`, {
                id_p: code,
                name_p: name,
                phone_p: phone,
                address_u: address,
                longitude: coords.lng,
                latitude: coords.lat,
            });
            if (response && response.data.success) {
                setName("");
                setPhone("");
                setAddress("");
                setCoords(null);
                navigate("/pharmacy");
            }
        } catch (error) {
            console.log(error);
        }

    };


    //form,ulaire  to save the info for pahramcy
    return (
        <div>
            <h1 className="text-gray-600 font-semibold">Edit pharmay</h1>
            <br />
            <div className="w-3/4 mx-auto">
                <div className="flex gap-3">
                    <Input
                        type="text"
                        label="Name"
                        variant="outlined"
                        className="flex-1"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <Input
                        type="text"
                        label="Phone"
                        variant="outlined"
                        className="flex-1"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <br />
                </div>
                <div className="flex flex-row mt-4 gap-4">
                    <Input
                        type="text"
                        label="Address"
                        variant="outlined"
                        className="flex-1"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <br />
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className={`flex-shrink-0  bg-primary text-white font-semibold py-2 px-5 me-0 border-0 rounded-lg border-none inline-block hover:bg-blue-300 ${open ? "focus:bg-blue-300 " : " "
                            }`}
                    >
                        location
                    </button>
                </div>
            </div>
            <div className="mt-4 border-2">
                {open && <MapComponent close={setOpen} pos={setCoords} />}
                {!open && coords && (
                    <div className="text-gray-600 font-semibold">
                        lat: {coords.lat} lng: {coords.lng}
                    </div>
                )}
            </div>
            <Button variant="outlined" color="blue" className="text-blue mt-4" onClick={sendData}>
                Add
            </Button>
        </div>
    );
};

export default EditPharmacy;