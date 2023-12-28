import React, { useState } from 'react'
import { APIProvider, Map, Marker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

export default function MapGard() {
    const [gards, setGards] = useState([
        {
            name: "Pharmacie 1",
            image: "https://images.unsplash.com/photo-1612838250290-6d5c3e6d9f6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3klMjB3aWRnZXQlMjBwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            open: "8:00 AM",
            close: "9:00 PM",
            latitude: 33.700867037355344,
            longitude: - 7.35743202239808
        },
        {
            name: "Pharmacie 2",
            image: "https://images.unsplash.com/photo-1612838250290-6d5c3e6d9f6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3klMjB3aWRnZXQlMjBwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            open: "8:00 AM",
            close: "9:00 PM",
            latitude: 33.690867037355344,
            longitude: - 7.357437939808
        },
        {
            name: "Pharmacie 3",
            image: "https://images.unsplash.com/photo-1612838250290-6d5c3e6d9f6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3klMjB3aWRnZXQlMjBwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            open: "8:00 AM",
            close: "9:00 PM",
            latitude: 33.706867037355344,
            longitude: - 7.34743207939808
        }])
    const darkMapStyle = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        // ... add more styles for the dark map ...
    ];
    const position = { lat: 0, lng: 0 }
    const initialPosition = { lat: 33.70491765911705, lng: -7.3605927786419585 };
    return (
        <div>
            <APIProvider apiKey={"AIzaSyC6yiyqoqG2Tm1C-uEPAFDAVZCh4BGJ5xk"}>
                <div style={{ height: "100vh", width: "100%" }} className="mx-auto">
                    <Map zoom={9} center={initialPosition}  >
                        {
                            gards.map((gard, index) => {
                                return (
                                    <Marker position={{ lat: gard.latitude, lng: gard.longitude }}>
                                        <Pin />
                                    </Marker>
                                )
                            })
                        }
                    </Map>
                </div>
            </APIProvider >
        </div >
    )
}