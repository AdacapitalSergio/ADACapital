import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt} from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import "./MapaStyle.css"

export default function Mapa() {
    const position = [-14.9186, 13.4925];

    return (
        <div className="section" style={{ width: "100%", height: "100vh" }}>
            <MapContainer className="section" center={position} zoom={15} scrollWheelZoom={false} style={{ width: "100%", height: "100%", zIndex: 0 }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <Marker position={position}>
                    <Popup>
                        <FaMapMarkerAlt className="contact-icon" />
                        <b>Empresa</b><br />
                        Bairro Senhora do Monte, Lubango - Angola
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
