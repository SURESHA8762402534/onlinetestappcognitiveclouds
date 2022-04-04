import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr:8 }}>
                        <Link style={{ textDecoration: 'none', color:'white' }} to='/login'>Login</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                        <Link style={{ textDecoration: 'none', color:'white' }} to='/signup'>Sign Up</Link>
                    </Typography>


                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Nav