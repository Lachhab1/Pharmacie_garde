import React from "react";
import MapComponent from "../map/mapCompenent";
import { Button, Input } from "@material-tailwind/react";
const EditPharmacy = () => {
    const [open, setOpen] = React.useState(false);
    const [coords, setCoords] = React.useState(null);
    //form,ulaire  to save the info for pahramcy
    return (
        <div>
            <h1 className="text-gray-600 font-semibold">Edit pharmay</h1>
            <br />
            <div className="w-3/4 mx-auto">
                <div className="flex gap-3">
                    <Input type="text" label="Name" variant="outlined" className="flex-1" />
                    <br />
                    <Input type="text" label="Phone" variant="outlined" className="flex-1" />
                    <br />
                </div>
                <div className="flex flex-row mt-4 gap-4">
                    <Input type="time" label="Open" variant="outlined" className="flex-1" />
                    <br />
                    <Input type="time" label="Close" variant="outlined" className="flex-1" />
                    <br />
                </div>
                <div className="flex flex-row mt-4 gap-4">
                    <Input type="text" label="Address" variant="outlined" className="flex-1" />
                    <br />
                    <button onClick={() => setOpen(prev => !prev)} className={`flex-shrink-0  bg-primary text-white font-semibold py-2 px-5 me-0 border-0 rounded-lg border-none inline-block hover:bg-blue-300 ${open ? "focus:bg-blue-300 " : " "}`}>location</button>
                </div>
            </div >
            <div className="mt-4 border-2 ">
                {open && <MapComponent close={setOpen} pos={setCoords} />}
                {!open && coords && <div className="text-gray-600 font-semibold">lat: {coords.lat} lng: {coords.lng}</div>}
            </div>
            <Button variant="outlined" color="blue" className="text-blue mt-4">Add</Button>
        </div >
    );
}
export default EditPharmacy;