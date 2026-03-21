'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in leaflet with React
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  locationString: string;
}

export default function Map({ locationString }: MapProps) {
  // Try to geocode the location string manually (basic mock for coordinates if real ones aren't available)
  // In a real app we would use property.latitude and property.longitude
  const [coordinates, setCoordinates] = useState<[number, number]>([37.4419, -122.1430]); // Default: Palo Alto

  useEffect(() => {
    // Basic hash to generate semi-consistent coordinates based on location string
    let hash = 0;
    for (let i = 0; i < locationString.length; i++) {
        hash = locationString.charCodeAt(i) + ((hash << 5) - hash);
    }
    const lat = 35 + (Math.abs(hash) % 10);
    const lng = -120 + (Math.abs(hash) % 20);
    
    setCoordinates([lat, lng]);
  }, [locationString]);

  // Prevent SSR issues explicitly
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-full h-full bg-slate-100 flex items-center justify-center">Loading map...</div>;

  return (
    <MapContainer 
      center={coordinates} 
      zoom={13} 
      scrollWheelZoom={false} 
      className="w-full h-full rounded-lg z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates} icon={icon}>
        <Popup>
          {locationString}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
