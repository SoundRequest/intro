import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import './assets/main.css'
import './index.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import Support from './pages/Support'
import Downloads from './pages/Downloads'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Blog' component={Blog} />
        <Route path='/Support' component={Support} />
        <Route path='/Downloads' component={Downloads} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
