import { useState } from 'react';
import {Wrapper, Status} from '@googlemaps/react-wrapper';
import Maps from './Maps'
// import Marker from './Marker'

type Props = {
    latitude: number;
    longitude: number;
};

const GoogleMaps = () => {
    const [latitude, setLatitude] = useState<number>(24.2867)
    const [longitude, setLongitude] = useState<number>(153.9807)

    const render = (status: Status) => {
        return <h1>{status}</h1>
    }

    // const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY as string;
    // TODO: 別の場所に移す
    const apiKey = 'AIzaSyBpSWUbFGu6BhG_EEcEV2yaUZDyrSB1Y4U';


    const position: Props = {
        latitude: latitude as number,
        longitude: longitude as number,
    }

    const handleMarkerDragEnd = (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
            setLatitude(e.latLng.lat());
            setLongitude(e.latLng.lng());
        }
    };

    return (
        <Wrapper apiKey={apiKey} render={render}>
            <div className='main-container'>
                <Maps style={{ maxWidth:'800px', aspectRatio:'16/9', margin:'10px auto'}} />
            </div>
        </Wrapper>
    )
}

export default GoogleMaps;