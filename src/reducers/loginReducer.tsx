import { actionTypes } from '../common/constants/actionTypes'
import {login} from '../containers/LoginContainer'


interface Iaction{

    type: string
    paylod: login
}

export const loginReducer = (state = {}, action: Iaction) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return Object.assign({}, state, {
          user: action.paylod
      })
  }
  return state
}

