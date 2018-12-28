import * as React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ApplicationBar from '../core-libs/components/AppBar'


export interface HeaderComponentProps {
 }

export interface HeaderComponentState {
    

}

export class HeaderComponent extends React.Component<HeaderComponentProps, HeaderComponentState> {
    
    render() {
        return (
            <React.Fragment>
                <MuiThemeProvider>
                 <ApplicationBar />
                                
                </MuiThemeProvider>
            </React.Fragment>

        )
    }
}

