import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'unstated';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement)
