import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../src/pages/login/LoginPage'
import Signup from './pages/signup/Signup';
import FirstPage from './pages/firstPage/FirstPage';
import UserInputPage from './pages/userInputPage/UserInputPage';


function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
          <Route  path="/firstpage" component={FirstPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/user_input" component={UserInputPage} />

          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
