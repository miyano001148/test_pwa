import { Routes, Route } from 'react-router-dom';
import App from './App'
import Camera from './Camera'
import Geo from './Geo'
import GoogleMaps from './components/Map/GoogleMaps'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Camera' element={<Camera />} />
            <Route path='/Geo' element={<Geo />} />
            <Route path='/GoogleMaps' element={<GoogleMaps />} />
        </Routes>
    )
}

export default AppRoutes;