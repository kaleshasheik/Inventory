import * as React from 'react'
import './Footer.scss'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import TableBody from '@material-ui/core/TableBody'

import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'
import { withStyles, createStyles, Theme, createMuiTheme ,MuiThemeProvider} from '@material-ui/core/styles'
import * as _ from 'lodash'
interface Iheader{
    name: string
}

interface Icolumns{
  
 
    RequestNo: number
    lapno: number
    assigned: string
    status: string

}

const CustomTableCell = withStyles(theme => ({
    head: {
       backgroundColor: '#486c7a',
     
      color: theme.palette.common.white,
      fontSize: 17,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const styles = (theme:Theme) => createStyles({
    root: {
        width: '80%',
        marginTop: theme.spacing.unit * 13,
        marginLeft: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 10,
        overflowX: 'auto',
      },
      table: {
        minWidth: 100,
      },
     
    });
  
export interface TableHeaderProps { 
    headers: Iheader[]
    coulmns: Icolumns[]
    classes?: any
}

export interface TableHeaderState { 
   
}

 class TableData extends React.Component<TableHeaderProps, TableHeaderState> {

    constructor(props: TableHeaderProps) {
        super(props)
        
    }

    
    render() {
        const {classes} = this.props
        
     /*  const data1 = _.map( this.props.coulmns, function(v) {
          return _.values( v );
       });
       
       console.log("data1", data1); */

        return ( 
            <div>
          
          <Paper className={classes.root}>
      <Table className={classes.table} cellPadding={1}>
     
            <TableHead>
                <TableRow >
                     {this.props.headers.map((header:Iheader, i: number) => {
                        return <CustomTableCell key={i}>{header.name}</CustomTableCell>
                    }) }
                </TableRow>
            </TableHead>



     <TableBody>
      {this.props.coulmns.map((x:Icolumns, i:number) => row(x, i, this.props.headers))}
    </TableBody>
            </Table>    
         
         </Paper>
        
    
      </div>
         )
        
    }
}


const row = (x:any, i:number, header:Iheader[]) =>
  <TableRow  key={`tr-${i}`}>
    {header.map((y:any, k:any) =>
      <CustomTableCell   key={`trc-${k}`}>
        {x[y.prop]}
      </CustomTableCell>
    )}
  </TableRow>


 
 export default withStyles(styles)(TableData)
