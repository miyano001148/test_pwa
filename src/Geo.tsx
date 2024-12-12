import React, {useState, useEffect, useRef } from 'react';
import './App.css';
import { ToolBar } from './components/ToolBar/ToolBar';
import { SideBar } from './components/ToolBar/SideBar';
import GlobalStyles from '@mui/material/GlobalStyles';

const ErrorText = () => (
    <p className='App-error-text'>geolocation Is Not availane</p>
);

export default () => {
    const [isAvailable, setAvailable] = useState(false);
    const [position, setPosition] = useState({ latitude: 0, longitude: 0});
    const [watchStatus, setWatchStatus] = useState({
        isWatching: false,
        watchId: 0
    });

    const isFirstRef = useRef(true);

    useEffect(() => {
        isFirstRef.current = false;
        if ('geolocation' in navigator) {
            setAvailable(true);
        }
    }, [isAvailable]);

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setPosition({ latitude, longitude});
        });
    };

    /**
     * 監視開始
     */
    const startWatchPosition = () => {
        const watchId = navigator.geolocation.watchPosition(position => {
            const { latitude, longitude } = position.coords;
            setPosition({ latitude, longitude});
        });
        setWatchStatus({ isWatching: true, watchId })
    }

    /**
     * 監視停止
     */
    const stopWatchPosition = () => {
        navigator.geolocation.clearWatch(watchId);
        setWatchStatus({ isWatching: false, watchId})
    }

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleToggleDrawer = () => {
      setDrawerOpen((drawerOpen) => !drawerOpen)
    }

    if (isFirstRef.current) return <div className='App'>Loading...</div>;

    const { isWatching, watchId } = watchStatus;

    return (
        <div className='App'>
            <GlobalStyles styles={{ body: {margin: 0, padding: 0}}} />
            <ToolBar onToggleDrawer={ handleToggleDrawer }/>
            <SideBar drawerOpen={ drawerOpen } onToggleDrawer={ handleToggleDrawer }/>
            <p>Geo</p>
            {!isFirstRef && !isAvailable && <ErrorText />}
            {isAvailable && (
                <div>
                    <button onClick={getCurrentPosition}>Get Current Position</button>
                    {isWatching ? (
                        <button onClick={stopWatchPosition}>
                            stop Watch Position
                        </button>
                    ) : (
                        <button onClick={startWatchPosition}>
                            Start Watch Position
                        </button>
                    )}
                    <div>
                        <h3>Position</h3>
                        <div>
                            latitude: {position.latitude}
                            <br />
                            longitude: {position.longitude}
                        </div>
                    </div>
                    <div>
                        <h3>Watch Mode</h3>
                        <p>Watch Status: {isWatching ? 'Watching' : 'Not Watching'}</p>
                        <p>Watch ID: { watchId }</p>
                    </div>
                </div>
            )}
        </div>
    );
};
