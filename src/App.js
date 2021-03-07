//My things
import Root from './components/pages/Root.js';
import Home from './components/pages/Home.js';
import Login from './components/pages/Login.js';
import Market from './components/pages/Market.js';
import Signup from './components/pages/Signup.js';
import Movements from './components/pages/Movements.js';
import Wallet from './components/pages/Wallet.js';
//Router
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
//Styles
import './styles/App.css';
import { theme } from './styles/theme.js'
//Material
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            <Root />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/about">
              <p>About!</p>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/movements">
            <Movements />
          </Route>
          <Route path="/market">
            <Market />
          </Route>
          <Route path="/wallet">
            <Wallet />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
