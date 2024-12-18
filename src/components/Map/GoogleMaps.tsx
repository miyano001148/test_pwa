import { useState } from 'react';
import {Wrapper, Status } from '@googlemaps/react-wrapper';
import { ToolBar } from '../ToolBar/ToolBar';
import { SideBar } from '../ToolBar/SideBar';
import useWindowSize from '../useWindowSize'
import GlobalStyles from '@mui/material/GlobalStyles';
import Maps from './Maps'

const MAP_API_KEY = 'AIzaSyBpSWUbFGu6BhG_EEcEV2yaUZDyrSB1Y4U';
const MAP_ID = '9923f3710b423640';

const GoogleMaps = () => {
    const [position, setPosition] = useState({ lat: 35.7140371, lng: 139.7925173});
    
    const render = (status: Status) => {
        if ('geolocation' in navigator) {
            // 現在地の取得(TODO: getCurrentPositionは精度が悪いので修正したい。)
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                setPosition({ lat: latitude, lng: longitude});
            });            
        }
        return <h1>{status}</h1>
    }

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleToggleDrawer = () => {
      setDrawerOpen((drawerOpen) => !drawerOpen)
    }

    const [width, height] = useWindowSize();

    return (
        <div className="App">
        <GlobalStyles styles={{ body: {margin: 0, padding: 0}}} />
        <ToolBar onToggleDrawer={ handleToggleDrawer } />
        <SideBar drawerOpen={ drawerOpen } onToggleDrawer={ handleToggleDrawer }/>
        <Wrapper apiKey={MAP_API_KEY} render={render} libraries={['marker']}>
            <div className='main-container'>
                <Maps style={{ width: width, height: height}} center={ position } mapId={MAP_ID}>
                </Maps>
            </div>
        </Wrapper>
        </div>
    );
}

export default GoogleMaps