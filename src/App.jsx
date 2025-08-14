import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';
import Services from './Pages/ServicesPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import SignupPage from './Pages/SignUp';
import LoginPage from './Pages/Login';
import DetailSignUp from "./Pages/DetailSignUp";
import DashboardLayout from "./components/DashboardLayout/Layout";
import DashboardHome from './Pages/PatientDashboard/Home';
import DashboardHistory from './Pages/PatientDashboard/History';

function App() {
  return (
    <Routes>
      {/* Public Website Pages */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Dynamic route for detail signup with role */}
        <Route path="/detail-signup/:role" element={<DetailSignUp />} />
      </Route>

      {/* Dashboard Pages */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        {/* Nested routes for dashboard content */}
        <Route path="patientdashboard/home" element={<DashboardHome />} />
        <Route path="patientdashboard/history" element={<DashboardHistory />} />
      </Route>
    </Routes>
  );
}

export default App;
