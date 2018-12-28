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
     marginLeft: '170px',
      position: 'fixed',
    
          
    },
    link:{
      textTransform: 'none',
    },
    toolbarTitle:{
     MarginLeft: 0,
      height: '30px',
      width: '70%',
      
    },
    footer:{

      position: 'fixed',
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#ccc',
    }
  })

export interface HeaderProps extends RouteComponentProps<any>{ 
  classes?: any
}

export interface HeaderState { 
    value: Number
   
}

const LinkTab: React.ComponentType<TabProps & LinkProps> = Tab as React.ComponentType<TabProps & LinkProps>

 class ApplicationBar extends React.Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props)
        this.state = {
            value: 0,
            
        }
    }
    
 
    handleChange = (event:React.ChangeEvent<HTMLInputElement>, value: Number) => {
        this.setState({ value })
      }
    
   
    render() {
      const { classes } = this.props
   
      console.log('token in appbar ', sessionStorage.getItem('token') )
      if(sessionStorage.getItem('token') !== 'undefined' && sessionStorage.getItem('token') !== null)
      {
        var isLoggedin= true
      }

        return ( 
   
              
             <div>
                   <CssBaseline />
                   <AppBar   className={classes.appBar}>
        <Toolbar>
          <Typography color="inherit"  >
          {<img className={classes.toolbarTitle} src='src/images/aricent.png'/>}
          </Typography>        
            
          
        
        <Tabs  classes={{ indicator: this.props.classes.indicator }} value={this.state.value} onChange={this.handleChange} className={this.props.classes.tab}  >
     
     <LinkTab  label='DashBoard'  component={Link} to='/userDashboard' />
     <LinkTab label='Request Inventory' component={Link} to='/requestInventory' />

             </Tabs> 
    

                </Toolbar>       
                </AppBar>                      
                <Footer web='www.aricent.com' copyright='© 2018 Aricent Inc. All rights reserved' className={classes.footer} />       
          
          </div>
     
      
        
        )

        
    }
}



export default withRouter(withStyles(styles)(ApplicationBar))

  
