import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Entertainment from './pages/Entertainment'
import Statistics from './pages/Statistics'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />

      <Route path="/register" component={Register} />
      <Route path="/logon" component={Logon} />

      <Route path="/profile" component={Profile} />
      <Route path="/entertainment" component={Entertainment} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/detail" component={Detail} />
    </Switch>
  )
}
