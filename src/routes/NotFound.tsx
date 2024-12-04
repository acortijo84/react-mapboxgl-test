import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
	container: {
		textAlign: 'center',
		padding: '50px',
		fontFamily: 'Arial, sans-serif',
	},
	header: {
		fontSize: '72px',
		color: '#333',
	},
	message: {
		fontSize: '18px',
		color: '#666',
	},
	link: {
		marginTop: '20px',
		display: 'inline-block',
		padding: '10px 20px',
		backgroundColor: '#007BFF',
		color: '#fff',
		textDecoration: 'none',
		borderRadius: '5px',
	},
};

export default function NotFound() {
	return (
		<div style={styles.container}>
			<h1 style={styles.header}>404</h1>
			<p style={styles.message}>
				Oops! The page you&apos;re looking for doesn&apos;t exist.
			</p>
			<Link to='/' style={styles.link}>
				Go Back to Homepage
			</Link>
		</div>
	);
}
