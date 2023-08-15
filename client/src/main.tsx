import ReactDOM from 'react-dom/client'
import React from 'react'
import { Provider } from 'react-redux'

import store from '@state/store.ts'
import App from './App.tsx'

import './tailwind.css'


ReactDOM
    .createRoot(document.body)
    .render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
