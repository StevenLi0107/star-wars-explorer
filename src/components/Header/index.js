import { memo } from 'react';
import {PropTypes} from 'prop-types';
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';

const useStyles = makeStyles(theme =>({
    container: {
      position:'relative',
      width:'100%',
      height:'48px',
      background: theme.palette.background.main,
      color:theme.palette.primary.main
    },
  }));

function Header({title}) {
    const classes = useStyles();
    return (
        <AppBar className={classes.container}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default memo(Header);



