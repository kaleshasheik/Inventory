import * as React from 'react'
import { HeaderComponent } from '../components/HeaderComponent'


import LoginContainer from  './LoginContainer'

import {RequestInventoryContainer} from './RequestInventoryContainer'
import DashboardContainer from './DashboardContainer'

import { Switch, Route } from 'react-router-dom'


const language = navigator.language.split(/[-_]/)[0]

export default class AppContainer extends React.Component<{},{}> {
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <main>
       
          <Switch>
            <Route exact path='/' component={LoginContainer} />
            <Route exact path='/userDashboard' component={DashboardContainer} />
            <Route exact path='/requestInventory' component={RequestInventoryContainer} />
          </Switch>
         
        </main>
      </React.Fragment>
    )
  }
}
