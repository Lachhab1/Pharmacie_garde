import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

export default function MapComponent(props) {
    const initialPosition = { lat: 33.70491765911705, lng: -7.3605927786419585 };
    const [open, setOpen] = useState(false);
    const [clickPosition, setClickPosition] = useState(null);
    const [markerPosition, setMarkerPosition] = useState(initialPosition);
    const onMapClick = (event) => {
        // console.log("event", event.detail.latLng.lng);
        if (event && event.detail && event.detail.latLng) {
            const clickedPosition = {
                lat: event.detail.latLng.lat,
                lng: event.detail.latLng.lng,
            };
            setClickPosition(clickedPosition);
            setMarkerPosition(clickedPosition);
            setOpen(true);
            props.pos(clickedPosition);
            props.close(false);
        }
    };
    const onInfoWindowClose = () => {
        setOpen(false);
    };



    return (
        <APIProvider apiKey={"AIzaSyC6yiyqoqG2Tm1C-uEPAFDAVZCh4BGJ5xk"}>
            <div style={{ height: "300px", width: "60%" }} className="mx-auto">
                <Map zoom={16} center={initialPosition} gestureHandling={'greedy'}
                    disableDefaultUI={true} onClick={onMapClick}>
                    <Marker position={initialPosition} >
                        <Pin />
                    </Marker>
                    {open && (
                        <InfoWindow position={clickPosition || initialPosition} onCloseClick={onInfoWindowClose}>
                            <p>Clicked position: {JSON.stringify(clickPosition)}</p>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    );
}
