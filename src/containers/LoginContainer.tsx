import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {login} from '../actions/loginActions'
import {logout} from '../actions/loginActions'
import {DashBoardPage} from '../components/Dashboard'

import { State } from '../reducers'
import LoginForm from '../forms/LoginForm'
import { withRouter , RouteComponentProps} from 'react-router-dom'

 export interface login{
  
    token: string
    user: any
}

export interface LoginContainerProps  extends RouteComponentProps<any> {
    login: (data:any) => void
    data: login
 }

 export interface LoginContainerState{
    errorMessage: string
 }

 class LoginContainer extends React.Component<LoginContainerProps, LoginContainerState> {
 
    constructor(props: LoginContainerProps) {
        super(props)

     

        this.state = {
            errorMessage: ''
        }
    }

     doLogin = (data:any) => {
        console.log('dataFromChild',data)
        
        this.props.login(data)
           
    }
   
    public render() {
        console.log('data', this.props.data)
        return  <div>
           
           <LoginForm  loginError={this.state.errorMessage} loginDetails={this.doLogin} />
        </div>
    }
}

const mapStateToProps = (state: State) => {

    console.log('login statekk ', state)
    return {
      data: state!.login!
    }
  }
  ​
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      login: (data:any) => {
        login(dispatch, data.Email, 'password')
      }
    }
  }

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginContainer)


  export default withRouter((Login))

