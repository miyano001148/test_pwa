import '../../App.css';
import Webcam from 'react-webcam';
import { useCallback, useRef, useState } from 'react';
import { ToolBar } from '../ToolBar/ToolBar';
import { SideBar } from '../ToolBar/SideBar';
import useWindowSize from '../useWindowSize'
import GlobalStyles from '@mui/material/GlobalStyles';
import { useNavigate } from 'react-router-dom';

const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user",
}

function Camera() {
    const webcamRef = useRef<Webcam>(null);
    const navigate = useNavigate();
    
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current?.getScreenshot();
      if (imageSrc) {
        console.log(imageSrc);
        navigate('/Photo', {
          state: imageSrc
        });
      }
    }, [webcamRef]);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleToggleDrawer = () => {
      setDrawerOpen((drawerOpen) => !drawerOpen)
    }

    const [width, height] = useWindowSize();

    return (
        <div className="App">
        <GlobalStyles styles={{ body: {margin: 0, padding: 0}}} />
        <ToolBar onToggleDrawer={ handleToggleDrawer }/>
        <SideBar drawerOpen={ drawerOpen } onToggleDrawer={() => handleToggleDrawer }/>
        <header className="App-header">
            <div>
              <Webcam
                audio={false}
                width={width}
                height={height}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                videoConstraints={videoConstraints}
               />
            </div>
            <button style={{zIndex:1}} onClick={capture}>撮影</button>
        </header>
      </div>  
    )
}

export default Camera;