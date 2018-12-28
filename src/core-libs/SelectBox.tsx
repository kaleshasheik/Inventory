import * as React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { withStyles, createStyles, Theme , MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

interface inventoryTypes{

  name: string
}
export interface SelectBoxProps 
  {
    
    onChange:(event: any) => void
    value: string
    style?: any
    name: string
    classes: any
    invTypes: inventoryTypes[]
    label: string
    error: string
   }
   export interface SelectState {
 
}



const styles = (theme:Theme) => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
   
    marginLeft: theme.spacing.unit * 2,
   
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: purple[500],
    },
  },
  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  
})

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
})



  class SelectBox extends React.Component<SelectBoxProps, SelectState> {

 
      public handleChange(event:React.FormEvent<EventTarget>) {
           this.props.onChange(event)
      }
   
    
   
    render() {
      const { classes } = this.props
      
            return ( <div >
  
  

           <MuiThemeProvider theme={theme}>

          <InputLabel  className={classes.margin} >{this.props.label}</InputLabel>
          <Select  name={this.props.name} className={classes.select} margin='dense'
            value={this.props.value} fullWidth 
            onChange={ e => this.handleChange(e) }   variant='outlined'
            input={
           
              <OutlinedInput
                labelWidth={100}
                name={this.props.name}
                id='outlined-age-simple'
                
                
              />
            }
            inputProps={{
              name: this.props.name,
              id: this.props.name,
              
            }}
            
          >
           
           <MenuItem   value=''> </MenuItem>
            {this.props.invTypes.map((type:inventoryTypes, i: number) => {
       return <MenuItem   key={i}  value={type.name}> {type.name}</MenuItem>
            }) }
           
          </Select>
          </MuiThemeProvider>
  
            </div>
            )
        
    }
}


export default withStyles(styles)(SelectBox)


