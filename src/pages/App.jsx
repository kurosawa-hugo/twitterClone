import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Signup from './Signup'
import Room from './Room'
import Login from './Login'
import {AuthProvider} from '../components/AuthService'
import LoggedInRoute from '../components/LoggedInRoute'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Switch>
              <LoggedInRoute exact path ='/' component={Room}/>
              <Route exact path ='/signup' component={Signup}/>
              <Route exact path ='/login' component={Login}/>
          </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App