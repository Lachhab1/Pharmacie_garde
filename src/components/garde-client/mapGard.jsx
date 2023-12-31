import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
    DirectionsService,
    DirectionsRenderer,
} from "@react-google-maps/api";

import mapstyle from "../mapstyle";
import Icon from "../../assets/icons8-pharmacy-icon-2.png"
const libraries = ["places", "routes"];

const mapContainerStyle = {
    height: "70vh",
    width: "70vw",
};
const options = {
    styles: mapstyle,
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 33.70491765911705,
    lng: -7.3605927786419585,
};
import Gard from "../../gard.js"

export default function MapGard() {

    const [gard, setGard] = React.useState(Gard);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyC6yiyqoqG2Tm1C-uEPAFDAVZCh4BGJ5xk",
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            },
        ]);
    }, []);
    const handleMarkerClick = (marker) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const origin = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                const directionsService = new window.google.maps.DirectionsService();
                const destination = { lat: marker.latitude, lng: marker.longitude };
                directionsService.route({
                    origin: origin,
                    destination: destination,
                    travelMode: google.maps.TravelMode.DRIVING, // Adjust travel mode as needed
                })
                    .then((response) => {
                        const directionsRenderer = new window.google.maps.DirectionsRenderer({
                            map: mapRef.current,
                        });
                        directionsRenderer.setDirections(response);
                    })
                    .catch((error) => console.error(error));
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(19);
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";


    return (
        <div>
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {gard.map((marker) => (
                    <Marker
                        key={`${marker.latitude}-${marker.longitude}`}
                        position={{ lat: marker.latitude, lng: marker.longitude }}
                        onClick={() => handleMarkerClick(marker)}
                        icon={{
                            url: Icon,
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                            scaledSize: new window.google.maps.Size(30, 30),
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    );
}