import './App.css';
import { useState } from 'react';
import { BaseLayout } from './components/layout/BaseLayout';

export function App() {
	let [count, setCount] = useState(0);

  return (<div className='App'>
		<BaseLayout />
		<button onClick={() => setCount(count + 1)}>+</button>
		<div>{count}</div>
		<button onClick={() => setCount(count - 1)}>-</button>
	</div>)
}
