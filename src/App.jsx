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
import BookAppointments from './Pages/PatientDashboard/BookAppointments';
import UpcomingAppointments from './Pages/PatientDashboard/UpcomingAppointments';
import HealthSummary from './Pages/PatientDashboard/HealthSummary';
import Prescriptions from './Pages/PatientDashboard/Prescriptions';
import Reminders from './Pages/PatientDashboard/Reminders';
import HelpCenter from './Pages/PatientDashboard/HelpCenter';

// Doctor Dashboard Components
import DocDashboardLayout from "./components/DocDashboardLayout/Layout";

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
        <Route path="patientdashboard/bookappointments" element={<BookAppointments />} />
        <Route path="patientdashboard/upcomingappointments" element={<UpcomingAppointments />} />
        <Route path="patientdashboard/healthsummary" element={<HealthSummary />} />
        <Route path="patientdashboard/prescriptions" element={<Prescriptions />} />
        <Route path="patientdashboard/reminders" element={<Reminders />} />
        <Route path="patientdashboard/helpcenter" element={<HelpCenter />} />
      </Route>




      {/* 🧑‍⚕️ Doctor Dashboard Pages */}
      <Route path="/docdashboard" element={<DocDashboardLayout />}>
        {/* Default Dashboard Page */}
        <Route index element={<DashboardHome />} />
         {/* Nested Routes inside Dashboard */}
        <Route path="home" element={<DashboardHome />} />
        <Route path="history" element={<DashboardHistory />} />
        <Route path="bookappointments" element={<BookAppointments />} />
        <Route path="upcomingappointments" element={<UpcomingAppointments />} />
        <Route path="healthsummary" element={<HealthSummary />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="reminders" element={<Reminders />} />
        <Route path="helpcenter" element={<HelpCenter />} />
      </Route>


    </Routes>
  );
}

export default App;
