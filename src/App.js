import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import DoctorDetails from './components/Details/DoctorDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Context from './Context/Context';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Department from './pages/Department/Department';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Notfound from './pages/NotFound/Notfound';
import Register from './pages/Register/Register';
import Services from './pages/Services/Services';

function App() {
      return (
    
    <AuthProvider>
      <div className="App">
     <Context>
      <BrowserRouter>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
          <Home></Home>

        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/department">
          <Department></Department>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute path="/service/:serviceId">
          <DoctorDetails></DoctorDetails>
        </PrivateRoute>
        <PrivateRoute path="/contact">
          <Contact></Contact>
        </PrivateRoute>
        <Route exact path="*">
          <Notfound></Notfound>
        </Route>
      
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </Context>
    </div>
    </AuthProvider>
  );
}

export default App;
