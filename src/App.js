import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import CarHub from './Pages/CarHub/CarHub';
import CarDetails from './Pages/CarDetails/CarDetails';
import Login from './Pages/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
        
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

          {/* carhub  */}
          <Route path="/carhub">
            <CarHub></CarHub>
          </Route>
          {/* card details  */}
          <PrivateRoute  path="/cardetails/:id">
            <CarDetails></CarDetails>
          </PrivateRoute>
          {/* login */}
          <Route path="/login">
            <Login></Login>
          </Route>

          {/* dashboard  */}
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          
          {/* notfound  */}
          <Route  path="/*">
            <NotFound></NotFound>
          </Route>

         

        </Switch>

      </Router>
     
      </AuthProvider>
    </div>
  );
}

export default App;
