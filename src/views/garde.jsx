import React from "react";
import MapComponent from "../components/map/mapCompenent";
import { Button, Input } from "@material-tailwind/react";
const Garde = () => {
    const [open, setOpen] = React.useState(false);
    const [coords, setCoords] = React.useState(null);
    //form,ulaire  to save the info for pahramcy
    return (
        <div>
            <h1>Garde</h1>
            <br />
            <Input type="text" label="Name" variant="outlined" />
            <br />
            <Input type="text" label="Address" variant="outlined" />
            <br />
            <Input type="text" label="Phone" variant="outlined" />
            <br />
            <Button color="blue" onClick={() => setOpen(true)}>Button</Button>
            {open && <MapComponent close={setOpen} pos={setCoords} />}
            {coords && <p>{JSON.stringify(coords)}</p>}
        </div >
    );
}
export default Garde;