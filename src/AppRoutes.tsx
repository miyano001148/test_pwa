import { Routes, Route } from 'react-router-dom';
import App from './App'
import Camera from './Camera'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Camera' element={<Camera />} />
        </Routes>
    )
}

export default AppRoutes;