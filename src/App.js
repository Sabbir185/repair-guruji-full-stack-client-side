import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import BookList from './components/Dashboard/BookList/BookList';
import Review from './components/Dashboard/Review/Review';
import OrderList from './components/Admin/OrderList/OrderList';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageService from './components/Admin/ManageService/ManageService';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/book/:id">
            <Dashboard />
          </Route>
          <Route path="/book">
            <Dashboard />
          </Route>

          <Route path="/bookList">
            <BookList />
          </Route>

          <Route path="/review">
            <Review />
          </Route>

          <Route path="/orderList">
            <OrderList />
          </Route>

          <Route path="/addService">
            <AddService />
          </Route>

          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>

          <Route path="/manageService">
            <ManageService />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
