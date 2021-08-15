import Movies from './components/Movies'
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import Logout from './components/Logout'
function App() {
  return (
   <Router>
     <AuthProvider>
       <Navbar/>
     <Switch>
        <PrivateRoute exact path='/' component={Movies}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/logout' component={Logout}/>
     </Switch>
     </AuthProvider>
   </Router>
  );
}

export default App;
