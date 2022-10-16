/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { CounterProvider } from './CounterContext';

render(() => <CounterProvider count={1}><App /></CounterProvider>, document.getElementById('root') as HTMLElement);
