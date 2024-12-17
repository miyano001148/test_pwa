import logo from './logo.svg';
import './App.css';
import { useRef, useState, useCallback } from 'react';
import { ToolBar } from './components/ToolBar/ToolBar';
import { SideBar } from './components/ToolBar/SideBar';
import GlobalStyles from '@mui/material/GlobalStyles';

import Notification from './components/Firebase/Notification'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleToggleDrawer = () => {
    setDrawerOpen((drawerOpen) => !drawerOpen)
  }

  console.log(process.env.NODE_ENV)

  return (
    <div className="App">
      <GlobalStyles styles={{ body: {margin: 0, padding: 0}}} />
      <ToolBar onToggleDrawer={ handleToggleDrawer }/>
      <SideBar drawerOpen={ drawerOpen } onToggleDrawer={ handleToggleDrawer }/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Notification />
    </div>
  );
}

export default App;
