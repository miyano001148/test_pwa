import './App.css';
import Webcam from 'react-webcam';
import { useRef, useState, useCallback } from 'react';
import { ToolBar } from './components/ToolBar/ToolBar';
import { SideBar } from './components/ToolBar/SideBar';
import GlobalStyles from '@mui/material/GlobalStyles';

const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user",
}

function Camera() {
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
    const webcamRef = useRef<Webcam>(null);
    const [url, setUrl] = useState<string | null>(null);
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current?.getScreenshot();
      if (imageSrc) {
        setUrl(imageSrc);
      } 
    }, [webcamRef]); 

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleToggleDrawer = () => {
      setDrawerOpen((drawerOpen) => !drawerOpen)
    }

    return (
        <div className="App">
        <GlobalStyles styles={{ body: {margin: 0, padding: 0}}} />
        <ToolBar onToggleDrawer={ handleToggleDrawer }/>
        <SideBar drawerOpen={ drawerOpen } onToggleDrawer={ handleToggleDrawer }/>
        <header className="App-header">
          {isCaptureEnable || (
            <button onClick={() => setCaptureEnable(true)}>開始</button>
          )}
          {isCaptureEnable && (
            <>
              <div>
                <Webcam
                  audio={false}
                  width={540}
                  height={360}
                  ref={webcamRef}
                  screenshotFormat='image/jpeg'
                  videoConstraints={videoConstraints}
                />
              </div>
              <button onClick={capture}>撮影</button>
            </>
          )}
          {url &&(
            <>
              <div>
                <button onClick={() => {
                  setUrl(null);
                }}>
                削除
                </button>
              </div>
              <div>
                <img src={url} alt="screenshot" />
              </div>
            </>
          )}
        </header>
      </div>  
    )
}

export default Camera;