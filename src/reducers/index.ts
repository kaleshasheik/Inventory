import { combineReducers } from 'redux'
import { InventoryEntity } from '../model'
import {inventoryReducer} from './inventory'
import {dashboardReducer} from './dashboardReduce'
import {dashboardData} from '../containers/DashboardContainer'
import { loginReducer } from './loginReducer';

interface Idashboard{

  dashboardTable:dashboardData
}

export interface State {
  inventory: any
  dashboard: any
  login: any
}

export const state = combineReducers<State>({
    inventory: inventoryReducer,
    dashboard: dashboardReducer,
    login: loginReducer
})