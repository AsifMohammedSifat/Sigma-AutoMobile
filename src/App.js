import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import CarHub from './Pages/CarHub/CarHub';
import CarDetails from './Pages/CarDetails/CarDetails';
import Login from './Pages/Login/Login';

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
          <Route path="/cardetails/:id">
            <CarDetails></CarDetails>
          </Route>
          {/* login */}
          <Route path="/login">
            <Login></Login>
          </Route>
         

        </Switch>

      </Router>
     
      </AuthProvider>
    </div>
  );
}

export default App;
