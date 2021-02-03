import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'inline-flex',
    }
  },
  linkBrand: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  },
  linkBrandSmall: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
      display: 'inline-block',
    }
  },
  drawer: {
    width: 256,
    flexShrink: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  drawerContainer: {
    width: 256,
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(4),
    width: 'auto',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navigation(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: 'mui-assets/img/logo-pied-piper-white.png', width: 120 },
    'brand-small': { image: 'mui-assets/img/logo-pied-piper-white-icon.png', width: 32 },
    'link1': 'Features',
    'link2': 'Enterprise',
    'link3': 'Support',
    'link4': 'ICO',
    ...props.content
  };

  let brand = content['brand'].text || '';
  let brandSmall = content['brand-small'].text || '';

  if (content['brand'].image) {
    brand = <img src={ content['brand'].image } alt="" width={ content['brand'].width } />;
  }

  if (content['brand-small'].image) {
    brandSmall = <img src={ content['brand-small'].image } alt="" width={ content['brand-small'].width } />;
  }

  const buckets = {
    'main': (Array.isArray(props.bucketMain) ? props.bucketMain : [])
  }

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrand}>
            {brand}
          </Link>
          <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrandSmall}>
            {brandSmall}
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent">
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key={content['link1']}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={content['link1']} />
            </ListItem>
            <ListItem button key={content['link2']}>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={content['link2']} />
            </ListItem>
            <ListItem button key={content['link3']}>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content['link3']} />
            </ListItem>
            <ListItem button key={content['link4']}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={content['link4']} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key={content['link1']}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={content['link1']} />
            </ListItem>
            <ListItem button key={content['link2']}>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={content['link2']} />
            </ListItem>
            <ListItem button key={content['link3']}>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content['link3']} />
            </ListItem>
            <ListItem button key={content['link4']}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={content['link4']} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <div>
          {buckets['main'].map(component => <React.Fragment>{component}</React.Fragment>)} 
        </div>
      </main>
    </div>
  );
}