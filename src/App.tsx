import { useState, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import './App.css';
// Did I need to make any changes to here in order to make it TypeScript valid?

const INITIAL_CENTER: [number, number] = [
	-73.98798430814351, 40.73559408896372,
];
const INITIAL_ZOOM: number = 14.905356011839437;

function App() {
	const mapRef = useRef<mapboxgl.Map | null>(null);
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const [center, setCenter] = useState<[number, number]>(INITIAL_CENTER);
	const [zoom, setZoom] = useState<number>(INITIAL_ZOOM);

	const handleButtonClick = () => {
		if (mapRef.current) {
			mapRef.current.flyTo({
				center: INITIAL_CENTER,
				zoom: INITIAL_ZOOM,
			});
		}
	};

	useEffect(() => {
		mapboxgl.accessToken = import.meta.env.VITE_APP_TOKEN;
		if (mapContainerRef.current) {
			mapRef.current = new mapboxgl.Map({
				container: mapContainerRef.current,
				center: center,
				zoom: zoom,
				style: 'mapbox://styles/arturo-c/cm48sjyqd012g01qr47kg8a1d',
			});

			mapRef.current.on('move', () => {
				const mapCenter = mapRef.current?.getCenter();
				const mapZoom = mapRef.current?.getZoom();

				setCenter([mapCenter!.lng, mapCenter!.lat]);
				setZoom(mapZoom!);
			});
		}

		return () => {
			mapRef.current?.remove();
		};
	}, []);

	return (
		<>
			<div className='sidebar'>
				Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} |
				Zoom: {zoom.toFixed(2)}
			</div>
			<button className='reset-button' onClick={handleButtonClick}>
				Reset
			</button>
			<div id='map-container' ref={mapContainerRef}></div>
		</>
	);
}

export default App;
