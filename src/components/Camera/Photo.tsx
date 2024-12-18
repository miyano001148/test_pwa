import '../../App.css';
import { useState } from 'react';
import { ToolBar } from '../ToolBar/ToolBar';
import { SideBar } from '../ToolBar/SideBar';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Button from '@mui/material/Button';

function Photo() {
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state as string;

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleToggleDrawer = () => {
      setDrawerOpen((drawerOpen) => !drawerOpen)
    }
    // 画像削除
    const imageDeletion = () => {
        navigate('/Camera');
    }
    // 画像保存
    const imageSaving = async (url: string) => {
        try {
            const response = await axios.get(url, {
                responseType: "blob",
            });
            saveAs(response.data);
            navigate('/Camera');
        } catch (error) {
            console.error("Image download failed", error);
        }
    };

    return (
        <div className="App">
        <GlobalStyles styles={{ body: {margin: 0, padding: 0}}} />
        <ToolBar onToggleDrawer={ handleToggleDrawer }/>
        <SideBar drawerOpen={ drawerOpen } onToggleDrawer={ handleToggleDrawer }/>
        <header className="App-header">
          {url &&(
            <div>
              <img src={url} alt="screenshot" />
            </div>
          )}
          {url &&(
            <>
              <div>
                <Button variant='outlined' onClick={() => imageSaving(url)}>
                保存
                </Button>
                <Button variant='outlined' onClick={imageDeletion}>
                保存せず戻る
                </Button>
              </div>
            </>
          )}

        </header>
      </div>  
    )
}

export default Photo;