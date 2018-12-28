import * as React from 'react'

import  RequestForm  from '../forms/RequestForm'



export interface RequestInventoryContainerProps { }


export class RequestInventoryContainer extends React.Component<RequestInventoryContainerProps, {}> {
   
    render() {
        return  <div>
             <RequestForm />
        </div>
    }
}