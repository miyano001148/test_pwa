import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Listitem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListitemButton from '@mui/material/ListItemButton'
import Avatar from '@mui/material/Avatar';
import { Drawer } from '@mui/material';

import pjson from '../../../package.json';

import { useNavigate } from 'react-router-dom';

const DrawerList = styled('div')(() => ({
    width: 250,
}))

const DrawerHeader = styled('div')(() => ({
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
}));

const DrawerAvater = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(6),
    height: theme.spacing(6),
}));

type Props = {
    drawerOpen: boolean;
    onToggleDrawer: () => void;
}

export const SideBar = (props: Props) => {
    const navigate = useNavigate();
    return (

        <Drawer variant='temporary' open={props.drawerOpen} onClose={props.onToggleDrawer}>
            <DrawerList role='presentation' onClick={props.onToggleDrawer}>
                <DrawerHeader>
                    <p>
                        v{pjson.version}
                    </p>
                </DrawerHeader>
                <List disablePadding>
                    <Listitem disablePadding>
                        <ListitemButton onClick={() => navigate('/')}>
                            <ListItemText secondary='HOME' />
                        </ListitemButton>
                    </Listitem>
                    <Listitem disablePadding>
                        <ListitemButton onClick={() => navigate('/Camera')}>
                            <ListItemText secondary='Camera' />
                        </ListitemButton>
                    </Listitem>
                    <Listitem disablePadding>
                        <ListitemButton onClick={() => navigate('/Geo')}>
                            <ListItemText secondary='Geo' />
                        </ListitemButton>
                    </Listitem>
                    <Listitem disablePadding>
                        <ListitemButton onClick={() => navigate('/GoogleMaps')}>
                            <ListItemText secondary='GoogleMaps' />
                        </ListitemButton>
                    </Listitem>
                    <Listitem disablePadding>
                        <ListitemButton onClick={() => navigate('/SendNotification')}>
                            <ListItemText secondary='SendNotification' />
                        </ListitemButton>
                    </Listitem>
                </List>
            </DrawerList>
        </Drawer>
    );
} 
