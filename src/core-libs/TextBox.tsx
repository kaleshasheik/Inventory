import * as React from 'react'
import TextField from '@material-ui/core/TextField'

import { withStyles, createStyles, Theme, createMuiTheme ,MuiThemeProvider} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/lightGreen'
import Grid from '@material-ui/core/Grid';
import Lock from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';

export interface TextBoxProps 
  {
    name: string
    type: string
    style?: any
    onChange:(event: React.FormEvent<EventTarget>) => void
    value: string
    error: string
    classes?: any
    label: string
    variant: any
   }
   export interface TextBoxState {
   
}

const styles = (theme:Theme) => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  margin: {
 
    
    
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
  textField: {
    marginLeft: theme.spacing.unit * 10,
    
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
    text: {
     
     },
  },
  
 
  typography: { useNextVariants: true },
})

/*
  InputLabelProps={{
            className: classes.textField,
        }}
        */

  class TextBox extends React.Component<TextBoxProps, TextBoxState> {

       public handleChange(event:React.FormEvent<EventTarget>) {
            this.props.onChange(event)
      }
   
      
    render() {
      const { classes } = this.props
      
               return ( 
  
          <MuiThemeProvider theme={theme}>
            
          
          
        <TextField  margin='dense'    fullWidth 
        value={this.props.value} name={this.props.name}   type={this.props.type} 
        error={this.props.error !== ''}
      helperText={this.props.error !== '' ? this.props.error : ' '}
 
         onChange={ e => this.handleChange(e) }
          label={this.props.label} 
          variant= {this.props.variant}
          id={this.props.name}   
          
              

        />

      </MuiThemeProvider>

  
            )
        
    }
}



const Textstyle = {
       
  marginTop: '10%'
 }

export default withStyles(styles)(TextBox)


