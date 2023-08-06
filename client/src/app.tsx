import { Router } from 'preact-router'

import { Home } from '@pages/index'


export function App() {
    return (
        <Router>
            <Home path="/" />
        </Router>
    )
}
