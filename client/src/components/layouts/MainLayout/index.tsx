import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'


const MainLayout: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <Header />

            {/* Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MainLayout;
