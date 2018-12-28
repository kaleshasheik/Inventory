import { actionTypes } from '../common/constants/actionTypes'
import { Dispatch } from 'redux'
import axios from 'axios'
import { Redirect } from 'react-router';


export let login = (dispatch: Dispatch, user: string, pass: string) => {
    const _loginURL = 'http://localhost:8000/api/login'
    axios.post(_loginURL, {
        
        email: user,
        password: pass
        
        }).then(({ data }) => {

            console.log('login data', data)
        let { token, user } = data

            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', user);
        
        dispatch({
            type: actionTypes.LOGIN_USER, paylod: {
                token,
                user
            }
        })
       

    }).catch((error) => {
        console.warn('Login error', error)
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    })

}

export let logout = () => {

    console.log('logout')
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}