import React, { useEffect } from 'react';

// Lightweight Spinner component
// Props:
// - size: number (px) or string (e.g. '48px')
// - color: CSS color string
// - speed: CSS duration string (e.g. '1s')
// Example: <Spinner size={64} color="#e91e63" speed="0.8s" />
const Spinner = ({ size = 64, color = '#cb3bb5ff', speed = '1s', ariaLabel = 'Loading' }) => {
	useEffect(() => {
		// Inject styles once into the document head so the component works without external CSS
		if (typeof document === 'undefined') return; // SSR guard
		if (document.getElementById('proofvis-spinner-styles')) return;
		const style = document.createElement('style');
		style.id = 'proofvis-spinner-styles';
		style.textContent = `
@keyframes proofvis-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.proofvis-spinner { display: inline-block; animation-name: proofvis-spin; animation-timing-function: linear; animation-iteration-count: infinite; }
`;
		document.head.appendChild(style);
	}, []);

	// Allow numeric `size` (pixels) or string like '3rem'
	const sizeValue = typeof size === 'number' ? `${size}px` : size;
	const borderWidth = Math.max(2, Math.round((parseInt(String(size), 10) || 48) / 8));

	const spinnerStyle = {
		width: sizeValue,
		height: sizeValue,
		borderRadius: '50%',
		border: `${borderWidth}px solid ${hexToRgba(color, 0.25)}`,
		borderTop: `${borderWidth}px solid ${color}`,
		boxSizing: 'border-box',
		animationDuration: speed,
	};

	return React.createElement('div', {
		role: 'img',
		'aria-label': ariaLabel,
		className: 'proofvis-spinner',
		style: spinnerStyle,
	});
};

// Helper: convert hex or rgb-ish color to rgba with alpha fallback
function hexToRgba(inputColor, alpha = 1) {
	if (!inputColor) return `rgba(0,0,0,${alpha})`;
	const hex = String(inputColor).trim();
	// If already rgba()/rgb(), try to add alpha
	if (hex.startsWith('rgba')) return hex;
	if (hex.startsWith('rgb(')) {
		return hex.replace('rgb(', 'rgba(').replace(')', `, ${alpha})`);
	}
	// hex handling
	const match = hex.replace('#', '');
	if (![3, 6].includes(match.length)) return `rgba(0,0,0,${alpha})`;
	const full = match.length === 3 ? match.split('').map(c => c + c).join('') : match;
	const r = parseInt(full.slice(0, 2), 16);
	const g = parseInt(full.slice(2, 4), 16);
	const b = parseInt(full.slice(4, 6), 16);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default Spinner;

/* Usage example (in a React app):
import Spinner from './Proofvis/basics';

function App() {
	return (
		<div>
			<h3>Loading</h3>
			<Spinner size={64} color="#e91e63" speed="0.9s" />
		</div>
	);
}
*/