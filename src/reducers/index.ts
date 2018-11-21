import { combineReducers } from 'redux';
import { InventoryEntity } from '../model';
import {inventoryReducer} from './inventory';

export interface State {
  inventory: any;
};

export const state = combineReducers<State>({
    inventory: inventoryReducer
});