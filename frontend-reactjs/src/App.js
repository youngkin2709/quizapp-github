import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import ForgetPassword from './components/ForgetPassword';
import NewSubmit from './components/NewSubmit';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup"  element={<SignUp/>} /> 
          <Route path="/signin"  element={<SignIn/>} /> 
          <Route path="/"  element={<Home/>} /> 
          <Route path="/forget-password"  element={<ForgetPassword/>} /> 
          <Route path="/otp"  element={<NewSubmit/>} /> 





         
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
