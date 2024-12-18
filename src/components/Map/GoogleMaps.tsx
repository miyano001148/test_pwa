import { useState } from 'react';
import {Wrapper, Status} from '@googlemaps/react-wrapper';
import { ToolBar } from '../ToolBar/ToolBar';
import { SideBar } from '../ToolBar/SideBar';
import useWindowSize from '../useWindowSize'
import GlobalStyles from '@mui/material/GlobalStyles';
import Maps from './Maps'

const MAP_API_KEY = 'AIzaSyBpSWUbFGu6BhG_EEcEV2yaUZDyrSB1Y4U';

type Props = {
    lat: number,
    lng: number,
};

const GoogleMaps = () => {
    const [lat, setLat] = useState<number>(35.7140371);
    const [lng, setLng] = useState<number>(139.7925173);
    
    const render = (status: Status) => {
        return <h1>{status}</h1>
    }

    const position: Props = {
        lat: lat as number,
        lng: lng as number
    };

    // const handleMarkerDragEnd = (e: google.maps.MapMouseEvent) => {
    //     if (e.latLng) {
    //         setLat(e.latLng.lat());
    //         setLng(e.latLng.lng());
    //     }
    // };

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
        <Wrapper apiKey={MAP_API_KEY} render={render}>
            <div className='main-container'>
                {/* <Maps style={{ width: '800px', aspectRatio: '16/9', margin: '10px auto' }} center={ position }>*/}
                <Maps style={{ width: width, height: height}} center={ position }>
                </Maps>
            </div>
        </Wrapper>
        </div>
    );
}

export default GoogleMaps