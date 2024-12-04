import { useState, useRef } from 'react';
import Map, { NavigationControl, MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Link } from 'react-router-dom';

const INITIAL_CENTER: [number, number] = [
	-73.98798430814351, 40.73559408896372,
];
const INITIAL_ZOOM: number = 14.905356011839437;

const ReactMapBoxGl = () => {
	const [viewport, setViewport] = useState({
		longitude: INITIAL_CENTER[0],
		latitude: INITIAL_CENTER[1],
		zoom: INITIAL_ZOOM,
	});
	const mapRef = useRef<MapRef>(null);

	const handleButtonClick = () => {
		if (mapRef.current) {
			mapRef.current.flyTo({
				center: INITIAL_CENTER,
				zoom: INITIAL_ZOOM,
				duration: 1000,
			});
		}
	};

	return (
		<>
			<div className='py-4'>
				<Link to='/'>mapboxgl</Link>
			</div>
			<div className='relative'>
				<div className='sidebar'>
					Longitude: {viewport.longitude.toFixed(4)} | Latitude:{' '}
					{viewport.latitude.toFixed(4)} | Zoom: {viewport.zoom.toFixed(2)}
				</div>
				<button className='reset-button' onClick={handleButtonClick}>
					Reset
				</button>
				<Map
					ref={mapRef}
					initialViewState={viewport}
					onMove={(evt) => {
						const { viewState } = evt;
						setViewport({
							longitude: viewState.longitude,
							latitude: viewState.latitude,
							zoom: viewState.zoom,
						});
					}}
					style={{ width: '100%', height: '50vh' }}
					mapStyle='mapbox://styles/arturo-c/cm48sjyqd012g01qr47kg8a1d'
					mapboxAccessToken={import.meta.env.VITE_APP_TOKEN}
				>
					<NavigationControl position='top-right' />
				</Map>
			</div>
		</>
	);
};

export default ReactMapBoxGl;
