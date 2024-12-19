import { Routes, Route } from 'react-router-dom';
import App from './App'
import Camera from './components/Camera/Camera'
import GoogleMaps from './components/Map/GoogleMaps'
import Photo from './components/Camera/Photo'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Camera' element={<Camera />} />
            <Route path='/GoogleMaps' element={<GoogleMaps />} />
            <Route path='/Photo' element={<Photo />} />
        </Routes>
    )
}

export default AppRoutes;