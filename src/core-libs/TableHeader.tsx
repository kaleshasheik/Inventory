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
import ButtonBox from '../core-libs/ButtonBox'
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel'
import Tooltip from '@material-ui/core/Tooltip';
import AssignmentReturn from '@material-ui/icons/AssignmentReturn'


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
       backgroundColor: '#779ecb',
       width: '10%',
      color: 'white',
      fontSize: 17,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const styles = (theme:Theme) => createStyles({
    root: {
        width: '10%',
        marginTop: theme.spacing.unit * 13,
        marginLeft: theme.spacing.unit * 8,
        marginRight: theme.spacing.unit * 10,
        overflowX: 'visible',
        bottom: '20px',
       marginBottom: '50px',
       justifyContent: 'space-between',
      },
      table: {
        width: '10%',
        overflowX: 'visible',
        bottom: '20px',
       
      },

      row: {
        '&:nth-of-type(even)': {
          backgroundColor: '#F8F8F8'
        },
      },
      surrender:{

  color: 'green'
},
cancel:{
  color: 'red'
},
      submit: {
        backgroundColor: 'white',
        color: 'black',
        marginTop: '5px',
        border: '2px solid #779ecb',
        borderRadius: '12px',
        width:'80%',
        height: '2%',
        textTransform: 'none',
        marginLeft: theme.spacing.unit * 3,
        "&:hover": {
          textDecoration: 'none',
          backgroundColor:'#779ecb'
        }
      },
     
     
    });
  
export interface TableHeaderProps { 
    headers: Iheader[]
    coulmns: Icolumns[]
    classes?: any
    needButton?: boolean
}

export interface TableHeaderState { 
   
}

 class TableData extends React.Component<TableHeaderProps, TableHeaderState> {

    constructor(props: TableHeaderProps) {
        super(props)
        
    }
    handleSubmit = () => {
       
      console.log('state', this.state)
  }
   
 
    
    render() {
        const {classes} = this.props
        
        const row = (x:any, i:number, header:Iheader[]) =>
        <TableRow className={this.props.classes.row} key={`tr-${i}`}>
          {header.map((y:any, k:any) =>
           
            <CustomTableCell   key={`trc-${k}`}>
              {x[y.prop]} 
            </CustomTableCell>
         
          )}
     
 {this.props.needButton && x.status !== 'available' ? (
          <Tooltip title="Surrender Inventory" aria-label="Add">
        <IconButton   type='submit' onClick={this.handleSubmit.bind(this)} name= 'Surrender' value={x.RequestNo}  >
        <AssignmentReturn fontSize="default"  className={classes.surrender} />
        </IconButton>
        </Tooltip>
        ) : 
      ( <Tooltip title="Cancel this request" aria-label="Cancel">
         <IconButton  type='submit'  name='Cancel' value={x.RequestNo}  >  
      <Cancel fontSize="default"  className={classes.cancel} />
      </IconButton>
      </Tooltip>
      )
      }
          
        

        </TableRow>
      

        return ( 
            <div className={classes.root} >
    
      <Table className={classes.table} cellPadding={1}>
     
            <TableHead>
                <TableRow >
                     {this.props.headers.map((header:Iheader, i: number) => {
                        return <CustomTableCell key={i}>{header.name}</CustomTableCell>
                    }) }
                    <CustomTableCell >  </CustomTableCell>
                </TableRow>
            </TableHead>



     <TableBody>

      {this.props.coulmns.map((x:Icolumns, i:number) => row(x, i, this.props.headers))}
    </TableBody>
            </Table>    
         
   
        
    
      </div>
         )
        
    }
}


 
 export default withStyles(styles)(TableData)
