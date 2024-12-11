import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
    onToggleDrawer: () => void;
};

export const ToolBar = (props: Props) => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
            <Toolbar>
                <IconButton aria-label='menu-button' size='large' edge='start' color='inherit' sx={{ mr: 2 }} onClick= {props.onToggleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Typography>PWA test</Typography>
            </Toolbar>
        </AppBar>
    </Box>
)