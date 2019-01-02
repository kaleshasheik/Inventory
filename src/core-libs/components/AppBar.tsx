import * as React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link, LinkProps } from 'react-router-dom'
import {  TabProps } from '@material-ui/core/Tab'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import {Footer} from '../Footer'
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';


const styles = (theme:Theme) => createStyles({
  indicator: {
      height: 2,
      backgroundColor: '#FF8C00',
     
    },
    appBar:{
      backgroundColor: '#23333D',
      height: '60px',
    },
    tab:{

      color: 'white',
     marginLeft: theme.spacing.unit * 20,
      position: 'absolute',
      
          
    },
    link:{
     // textTransform: 'none',
      "&:hover": {
        textDecoration: 'none',
        color:'white'
      }

    },
    mobileLink:{
      textTransform: 'none',
       "&:hover": {
         textDecoration: 'none',
         color:'darkorange',
         
       
       },
       color: '#23333D'
     },
    toolbarTitle:{
     MarginLeft: 0,
      height: '30px',
      width: '70%',
      
    },
    footer:{
    
      position: 'fixed',
      bottom: 0,
      backgroundColor: '#ccc',
      width: '100%',
      height: '30px',
    },
    bottomAppbar:{
     
        top: 'auto',
        bottom: 0,
        backgroundColor: '#ccc',
        height: '40px',
       
    },
    toolbar: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      
    },
    account:{
      color: 'darkorange'
    },
    grow: {
      flexGrow: 1,
    },
    menu:{
       textTransform: 'none',
      color: 'black',
      "&:hover": {
        textDecoration: 'none',
     
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    
    },
  })

export interface HeaderProps extends RouteComponentProps<any>{ 
  classes?: any
}

export interface HeaderState { 
    value: Number
    anchorEl: any
    mobileMoreAnchorEl: any
}

const LinkTab: React.ComponentType<TabProps & LinkProps> = Tab as React.ComponentType<TabProps & LinkProps>

 class ApplicationBar extends React.Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props)
        this.state = {
            value: 0,
            
            mobileMoreAnchorEl: null,
            anchorEl: null,
            
        }
    }
    
 
    handleChange = (event:React.ChangeEvent<HTMLInputElement>, value: Number) => {
        this.setState({ value })
      }
    
      handleMenuItemClose = (event:any) => {
        this.setState({ mobileMoreAnchorEl: null });
      };
    
      handleMenuClose = () => {
        this.setState({ anchorEl: null});
        this.handleMobileMenuClose();
      };
    
      handleMobileMenuOpen = (event:any) => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
      };
    
      handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
        
      };
      handleProfileMenuOpen = (event:any) => {
        this.setState({ anchorEl: event.currentTarget });
      };
   
    render() {
      const { classes } = this.props
   
      console.log('token in appbar ', sessionStorage.getItem('token') )
   
      const { anchorEl, mobileMoreAnchorEl } = this.state;
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={this.handleMenuClose}
        >
       <MenuItem onClick={this.handleMenuClose} >
        <LinkTab className={classes.menu} label='My Account'  component={Link} to='/myAccount' />
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
        <LinkTab className={classes.menu} label='Logout'  component={Link} to='/logout' />
        </MenuItem>
        </Menu>
      );
  
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
     
          open={isMobileMenuOpen}
          onClose={this.handleMobileMenuClose}
        >
          <MenuItem onClick={this.handleMenuItemClose}>
          <LinkTab  className={classes.mobileLink} label='DashBoard'  component={Link} to='/userDashboard' />
          </MenuItem>
          <MenuItem onClick={this.handleMenuItemClose}>
          <LinkTab className={classes.mobileLink}  label='Request Inventory' component={Link} to='/requestInventory' />
          </MenuItem>
         

        </Menu>
      );
        return ( 
    <React.Fragment>
          <div >
           <CssBaseline />
                   <AppBar   className={classes.appBar}>
            <Toolbar>
            
            <Typography color="inherit"  noWrap>
              {<img className={classes.toolbarTitle} src='src/images/aricent.png'/>}
              </Typography>
                        
              <div className={classes.sectionDesktop}>
              <Tabs  classes={{ indicator: this.props.classes.indicator }} value={this.state.value} onChange={this.handleChange} >
     
     <LinkTab className={classes.link} label='DashBoard'  component={Link} to='/userDashboard' />
     <LinkTab className={classes.link}  label='Request Inventory' component={Link} to='/requestInventory' />

             </Tabs> 
    
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                  <MoreIcon />
                </IconButton>
              </div>
              <div className={classes.grow} />
              <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton >
            <AccountCircle fontSize="large"  className={classes.account}/>
          </IconButton>
         
        </MenuItem>
            </Toolbar>
          </AppBar>
          {renderMenu}
          {renderMobileMenu}


        </div>

          <AppBar position="fixed" color="primary" className={classes.bottomAppbar}>
        <Toolbar className={classes.toolbar}>
          
          <a href='https://www.aricent.com'>ww.aricent.com </a>
          <div>
           <p>© 2019 Aricent Inc. All rights reserved.</p>
          </div>
        </Toolbar>
      </AppBar>
      
        </React.Fragment>
        
        )

        
    }
}



export default withRouter(withStyles(styles)(ApplicationBar))

  
