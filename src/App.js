import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';  
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-In" element={<SignIn />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
