import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import LoginContainer from './containers/LoginContainer'
import LinkBtn from './components/LinkBtn'
import Home from './components/Home'
import ProfileContainer from './containers/ProfileContainer'
import AuthStatus from './components/AuthStatus'
import './App.css'
import CssBaseline from 'material-ui/CssBaseline'

const App = () => (
  <CssBaseline>
    <div>
      <header className="header">
        <div className="top-menu">
          <LinkBtn to="/" label={'Главная'} />
          <LinkBtn to="/profile" label={'Профиль'} />
          <LinkBtn to="/news" label={'Новости'} />
          <LinkBtn to="/login" label={'Логин'} />
          <AuthStatus />
        </div>
      </header>

      <hr />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/about"
            render={() => <p>Сделано на вебинаре по тестовому заданию #1</p>}
          />
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route render={() => <div>Нет такой страницы</div>} />
        </Switch>
      </div>
    </div>
  </CssBaseline>
)

export default App
