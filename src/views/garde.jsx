import React from "react";
import MapComponent from "../components/map/mapCompenent";
import { Button } from "@material-tailwind/react";
const Garde = () => {
    const [open, setOpen] = React.useState(false);
    const [coords, setCoords] = React.useState(null);
    return (
        <div>
            <Button color="blue" onClick={() => setOpen(true)}>Button</Button>
            {open && <MapComponent close={setOpen} pos={setCoords} />}
            {coords && <p>{JSON.stringify(coords)}</p>}
        </div>
    );
}
export default Garde;