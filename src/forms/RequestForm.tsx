import * as React from 'react'

import  TextBox  from '../core-libs/TextBox'
import {DateField} from '../core-libs/DateField'
import  SelectBox  from '../core-libs/SelectBox'
import { withStyles, Theme, createStyles} from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'

import {Header} from '../core-libs/components/Header'
import ButtonBox from '../core-libs/ButtonBox'
import Paper from '@material-ui/core/Paper'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

 export interface RequestFormProps {
     classes: any
 }

export interface RequestFormState {
    UserId: string
    Name: string 
    MailId: string
    Inventory: string
    StartDate: Date
    EndDate: Date
    Reason: string
    error: string
}


const styles = (theme:Theme) => createStyles({
    main: {

        width: 'auto',
        display: 'block',
        alignItems: 'center',
        marginTop: theme.spacing.unit *10 ,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        marginBottom: '50px',
    },
    paper: {
       
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
      
    },
  
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing.unit * 1,
      margin: 0,
     
     
    },
    titile:
    {

        width:'100%',
        height:'1px',
       
    },
    formcontrol: {
        width: '100%',
       
       // marginBottom: theme.spacing.unit * 2,
       
          marginTop: '-15px',
      
            
      },
      dateformcontrol:{
        marginBottom: theme.spacing.unit ,
        marginTop: '-10px',
        width: '100%',
       
      },
      startdatecontrol:{
     
        width: '100%',
      },
      submit: {
        marginTop: -17 ,
        backgroundColor: 'darkorange',
        color: 'white',
        marginLeft: theme.spacing.unit * 27,
        borderRadius: '12px',
        width: '30%',
        textTransform: 'none',
        bottom: '20px'
      },
      reset: {
        marginTop: 10,
        backgroundColor: '#C0C0C0',
        color: 'black',
        width: '30%',
        borderRadius: '12px',
      
        textTransform: 'none',
    },
  })

 class RequestForm extends React.Component<RequestFormProps,RequestFormState> {
    constructor(props: RequestFormProps) {
        super(props)
        this.state = {
            UserId: '',
            Name: '',
            MailId: '',
            Inventory: '',
            Reason: '',
            StartDate: null, 
            EndDate: null,
            error: '',
        }
    }

    resetInput = () => {
        this.setState({ UserId: '', Name: '',Inventory: '' ,Reason: '', StartDate: null, EndDate: null })
      
    }


    onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        console.log('inv, ' , event.target.name)

        if (event!.target) {
            this.setState({ ...this.state, [event.target.name]: event.target.value })
        }

        console.log('requestform', this.state)
    }

    validateField = () => {
              
        if (!this.state.StartDate || !this.state.EndDate || !this.state.Inventory || !this.state.Reason) {
            this.setState({ error: 'is Required' })
        }

    }

    onDateChange = (event:any, date:any) => {
      
        console.log('date', date)
        console.log('event', event)

    }

    setDate = (field:string, value: any) => {
        
        this.setState({ ...this.state, [field]: value })
                 
    }
    
    

    handleSubmit = () => {
       
        this.validateField()
        console.log('state', this.state)
    }


    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
             
           
               
                <main className={classes.main}>
               
      <CssBaseline />
     
      <Header size={3} text={`Inventory Form`} css='header' />
       <hr></hr>

               
      <div className={classes.paper}>
      
        <FormControl className={classes.formcontrol}  fullWidth >
          <TextBox name='UserId' label='User Id' type='text' variant='outlined' value= {this.state.UserId} error =''onChange={this.onTextChange.bind(this)} />           
          </FormControl>
          <FormControl className={classes.formcontrol}  fullWidth >
          <TextBox name='Name' label=' User Name' type='text' variant='outlined' value= {this.state.Name} error =''  onChange={this.onTextChange.bind(this)} />        
          </FormControl>
          <FormControl className={classes.dateformcontrol} fullWidth >
          
            <SelectBox name='Inventory' label='InventoryType' invTypes={invTypes}  error={this.state.error} value={this.state.Inventory}  onChange={this.onTextChange.bind(this)}/>        
            </FormControl>
            <FormControl  className={classes.startdatecontrol} fullWidth >
            <DateField name='StartDate' label='Start Date' value={this.state.StartDate} onChange={this.onDateChange.bind(this)} dateValue={this.setDate}  />
            </FormControl>
            <FormControl className={classes.formcontrol} fullWidth >
            <DateField name='EndDate' label='End Date' value={this.state.EndDate} onChange={this.onDateChange.bind(this)} dateValue={this.setDate}  />
            </FormControl>
            <FormControl className={classes.formcontrol} fullWidth >
          <TextBox name='Reason' label='Reason' type='text' variant='outlined' value= {this.state.Reason} error =''  onChange={this.onTextChange.bind(this)} />        
          </FormControl>

        <FormControl   >
        <ButtonBox type='submit' name='Reset' class={classes.reset}  onClick={this.resetInput.bind(this)}/>

        <ButtonBox type='submit' name='Submit' class={classes.submit}  onClick={this.handleSubmit.bind(this)}/>
        </FormControl>
        </div>
        
       
       
    </main>
             
               
            </React.Fragment>

        )
    }
}

export default withStyles(styles)(RequestForm)


        
const invTypes= [ { name: 'Laptop' },
{ name: 'DataCard'},
{ name: 'Both' },
]