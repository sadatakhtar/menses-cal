import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../src/pages/login/LoginPage'
import Signup from './pages/signup/Signup';
import FirstPage from './pages/firstPage/FirstPage';
import UserInputPage from './pages/userInputPage/UserInputPage';
import NewBleed from './pages/newBleedPage/NewBleed';


function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
          <Route  path="/firstpage" component={FirstPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/user_input" component={UserInputPage} />
            <Route path="/newbleed" component={NewBleed} />

          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
