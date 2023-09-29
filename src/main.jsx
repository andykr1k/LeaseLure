import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter } from 'react-router-dom'

import TagManager from 'react-gtm-module'

import './index.css'

const tagManagerArgs = {
    gtmid: 'GTM-57NH23LD'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
