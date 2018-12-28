import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {loadDashboardData} from '../actions/dashboardActions'
import {DashBoardPage} from '../components/Dashboard'

import { State } from '../reducers'


 export interface dashboardData{

    headers: []
    colummns:[]
}

export interface DashBoardContainerProps {
    loadDashboardData: () => void
    data: dashboardData
 }

 class DashboardContainer extends React.Component<DashBoardContainerProps, {}> {
 
    componentWillMount(){
        this.props.loadDashboardData()
    }

    public render() {
      
        return  <div>
           
            <DashBoardPage data={this.props.data} />
        </div>
    }
}

const mapStateToProps = (state: State) => {

   
    return {
      data: state!.dashboard!.dashboardTable
    }
  }
  ​
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      loadDashboardData: () => {
        loadDashboardData(dispatch)
      }
    }
  }

const DashBoard = connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardContainer)



  export default DashBoard