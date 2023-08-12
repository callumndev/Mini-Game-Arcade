import { render } from 'preact'
import { Provider } from 'react-redux'

import store from '@state/store.ts'
import { App } from './app.tsx'

import './tailwind.css'


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')!
)
