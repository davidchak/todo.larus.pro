import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/reset.css';
import './assets/styles/root.css';
import './assets/styles/index.css';
import App from './App';
import { StoreProvider } from './store/Store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<StoreProvider>
			<App />
		</StoreProvider>
	</React.StrictMode>
);
