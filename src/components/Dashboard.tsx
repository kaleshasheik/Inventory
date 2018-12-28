import * as React from 'react'

import  TableData  from '../core-libs/TableHeader'

import * as _ from 'lodash'
import {dashboardData} from '../containers/DashboardContainer'
import Grid from '@material-ui/core/Grid';

export interface DashBoardProps {
    data: dashboardData
 }


export class DashBoardPage extends React.Component<DashBoardProps, {}> {
   
    render() {
        const {data} = this.props
        return (
            <React.Fragment> 

          

                <Grid container spacing={24}>
        <Grid item xs={10} sm={6}>
                {data && _.size(data.headers)>0 && _.size(data.colummns)> 0 && <TableData headers={data.headers} coulmns={data.colummns} />}
                </Grid>
        <Grid item xs={10} sm={6}>
        {data && _.size(data.headers)>0 && _.size(data.colummns)> 0 && <TableData headers={data.headers} coulmns={data.colummns} />}

        </Grid>
        </Grid>
            </React.Fragment>
        )
    }
}
