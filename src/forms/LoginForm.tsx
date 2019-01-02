import * as React from 'react'
import * as EmailValidator from 'email-validator'

import TextBox from '../core-libs/TextBox'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withStyles, Theme, createStyles } from '@material-ui/core/styles'

import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBox from '../core-libs/ButtonBox'
import {LOGINFORMPASSWORD,LOGINFORMTITLE} from '../common/constants/form.const'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const styles = (theme: Theme) => createStyles({
    main: {

        width: 'auto',
        display: 'block',
        alignItems: 'center',
        marginTop: theme.spacing.unit * 10,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
       
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
      
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: 'orange',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
      
        backgroundColor: 'darkorange',
        color: 'white',
        marginLeft: theme.spacing.unit * 27,
        borderRadius: '12px',
        width: theme.spacing.unit * 14,
       
        textTransform: 'none',
        "&:hover": {
            textDecoration: 'none',
            backgroundColor:'orange'
          }
       
    },
    reset: {
        marginTop: -30,
        color: 'darkorange',
        marginRight: theme.spacing.unit * 25,
        textDecoration: 'none',
        width: theme.spacing.unit * 24,
        textTransform: 'none',
        "&:hover": {
            textDecoration: 'none',
            color:'orange',
            backgroundColor: 'transparent',
          }
    },
    formcontrol: {
        width: '100%',
        // marginTop: 0,
        marginBottom: theme.spacing.unit * 2,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        marginTop: '-20px',
        // marginBottom: theme.spacing.unit * 2,

    },
    titile:{
        marginBottom: theme.spacing.unit * 3,
    },
    modal:{
        marginTop: theme.spacing.unit * 16,
    },
    password:{
        marginLeft: theme.spacing.unit * 10,
        color: '#23333D',
        fontSize: theme.spacing.unit * 2,
        textTransform: 'none',
    }
})

export interface LoginFormProps extends RouteComponentProps<any> {
    classes?: any
    loginDetails: any
    loginError: string
}

export interface LoginFormState {
    Email: string
    Password: string
    buttonEnabled: boolean
    Emailerror: string
    Passworderror: string
    open: boolean
    modal: boolean
    

}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
    constructor(props: LoginFormProps) {
        super(props)
        this.state = {
            Email: '',
            Password: '',
            buttonEnabled: false,
            Emailerror: '',
            Passworderror: '',
            open: false,
            modal: false

        }
    }
    onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        if (event!.target) {
            this.setState({ ...this.state, [event.target.name]: event.target.value })
        }

        console.log(this.state)
    }


    validateEmail = () => {
     
        if (!EmailValidator.validate(this.state.Email)) {
            this.setState({ Emailerror: 'Invalid Email' })
            

        }
       
     /*   if(this.state.Email!='' && this.state.Emailerror === '')
        {
         var  email  = this.state.Email.split('@')[1]
         console.log('email=== '+ email)
        }    */            
            
    }

    validatePassword = () =>  {

        var pass = this.state.Password
        
        if (!pass.match(LOGINFORMPASSWORD)) {
             this.setState({ Passworderror: 'Password should be minimum 8 letters with alphaNumeric' })
            
        }
       
    }

    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    resetInput = () => {
        this.setState({ Email: '', Password: '',Emailerror: '' ,Passworderror: '' })
      
    }

    resetErrors = () => {
        this.setState({ Emailerror: '', Passworderror: ''})
      
    }

    forgotPassword = () => {
      
        this.setState({
            modal: !this.state.modal
          });
    }

    handleSubmit = () => {
        this.resetErrors()
        this.validateEmail()
        this.validatePassword()
      
        console.log('login state details', this.state)
        this.props.loginDetails(this.state);
                   
    }

    render() {
        const { classes } = this.props
        
        return (
            <main className={classes.main}>


                <CssBaseline />
                {this.props.loginError}
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockIcon />
                    </Avatar>
                    <Typography className={classes.titile} component='h1' variant='h3'>
                    {LOGINFORMTITLE} 
        </Typography>

                    <FormControl className={classes.formcontrol} margin='normal' fullWidth>
                        <TextBox name='Email' type='email' label='Email Address' variant='outlined' value={this.state.Email} error={this.state.Emailerror} onChange={this.onTextChange.bind(this)} />
                    </FormControl>
                    <FormControl className={classes.formcontrol} margin='normal' fullWidth>
                        <TextBox name='Password' type='password' label='Password' variant='outlined' value={this.state.Password} error={this.state.Passworderror} onChange={this.onTextChange.bind(this)} />
                    </FormControl>
                    <FormControl className={classes.formcontrol} margin='normal' fullWidth >
                     
                        <ButtonBox type='submit' name='Sign In' class={classes.submit} disabled={this.state.buttonEnabled} onClick={this.handleSubmit.bind(this)} />
                        
                        <Button onClick={this.forgotPassword.bind(this)} className={classes.reset}>Forgot Password ?</Button>
                        </FormControl>
                        
                </div>
               
                <Modal className={classes.modal} isOpen={this.state.modal} >
          <ModalHeader> Reset Password</ModalHeader>
          <ModalBody>
        <TextBox name='Email' type='email' label='Email Address' variant='outlined' value={this.state.Email} error={this.state.Emailerror} onChange={this.onTextChange.bind(this)} />
        <TextBox name='Password' type='password' label='Password' variant='outlined' value={this.state.Password} error={this.state.Passworderror} onChange={this.onTextChange.bind(this)} />
        <TextBox name='Confirm Password' type='password' label='Confirm Password' variant='outlined' value={this.state.Password} error={this.state.Passworderror} onChange={this.onTextChange.bind(this)} />

          </ModalBody>
          <ModalFooter>
            <Button onClick={this.forgotPassword.bind(this)} color="primary">Change Password</Button>{' '}
            <Button onClick={this.forgotPassword.bind(this)} color="secondary" >Cancel</Button>
          </ModalFooter>
        </Modal>
            </main>


        )
    }
}



export default withRouter(withStyles(styles)(LoginForm))


