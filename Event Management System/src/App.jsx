import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import StarterPage from "./pages/StarterPage"
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { useAuth } from "./AuthContext";
import AuthenticatedLandingPage from "./pages/AuthenticatedLandingPage";
import EnrolledEventsListingPage from "./pages/EnrolledEventsListingPage";
import HostedEventListingPage from "./pages/HostedEventListingPage";
function App() {
   const {user}=useAuth();
  return (
    <Routes>
    <>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/" element={<StarterPage />} />
    </>
    {user ? (
      <>
      <Route path="/landing" element={<AuthenticatedLandingPage />} />
      <Route path="/enrolledEvents" element={<EnrolledEventsListingPage/>}/>
      <Route path="/hostedEvents" element={<HostedEventListingPage/>}/>
      </>
    ) : (
      null
  )}
 
  </Routes>
  )
}

export default App
