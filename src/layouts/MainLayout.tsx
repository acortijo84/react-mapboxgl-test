import { Outlet } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
	return (
		<>
			<Header />
			<div className='py-8 px-4'>
				<Outlet />
			</div>
			<Footer />
		</>
	);
}
