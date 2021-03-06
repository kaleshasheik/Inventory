import * as React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { store } from './store'
import * as appConstant from '../src/common/constants/app.const'
import { BrowserRouter } from 'react-router-dom'
import AppContainer from './containers/AppContainer'

import 'toastr/build/toastr.min.css'
import { addLocaleData, IntlProvider } from 'react-intl'
// import messagesEN from './translations/en.json';

console.log('store', store)

/*const  messages = {
    en: messagesEN
  }; */
  const language = navigator.language.split(/[-_]/)[0]
  

render(
    <Provider store={store}>
      <BrowserRouter>
      
          <AppContainer />
        
      </BrowserRouter>
    </Provider>,
    document.getElementById(appConstant.APP)
  )
  