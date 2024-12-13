import { Routes, Route } from 'react-router-dom';
import App from './App'
import Camera from './Camera'
import Geo from './Geo'
import Maps from './pages/Maps/GoogleMaps'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Camera' element={<Camera />} />
            <Route path='/Geo' element={<Geo />} />
            <Route path='/Maps' element={<Maps />} />
        </Routes>
    )
}

export default AppRoutes;