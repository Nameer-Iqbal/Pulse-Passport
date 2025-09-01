import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

import Home from './Pages/Home';
import Services from './Pages/ServicesPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import SignupPage from './Pages/SignUp';
import LoginPage from './Pages/Login';
import DetailSignUp from './Pages/DetailSignUp';

// ✅ Dono branches ka layout imports
import DocDashboardLayout from './Components/DocDashboardLayout/Layout';
import MedicalHome from './Pages/DoctorDashboard/Home';
import DashboardLayout from './Components/DocDashboardLayout/Layout';
import DashboardHome from './Pages/PatientDashboard/Home';
import DashboardHistory from './Pages/PatientDashboard/History';
import HealthSummary from './Pages/PatientDashboard/HealthSummary';
import Prescriptions from './Pages/PatientDashboard/Prescriptions';
import SearchDoctor from './Pages/PatientDashboard/SearchDoctor';
import Reports from './Pages/PatientDashboard/Reports';
import Settings from './Pages/PatientDashboard/Settings';

// ⬇️ New pages Eesha added
import UpcomingAppointments from './Pages/PatientDashboard/UpcomingAppointments';
import BookAppointments from './Pages/PatientDashboard/BookAppointments';
import Reminders from './Pages/PatientDashboard/Reminders';
import HelpCenter from './Pages/PatientDashboard/HelpCenter';

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
        <Route path="/detail-signup/:role" element={<DetailSignUp />} />
      </Route>

      {/* Dashboard (patient) */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="home" element={<DashboardHome />} />
        <Route path="history" element={<DashboardHistory />} />
        <Route path="healthsummary" element={<HealthSummary />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="search-doctor" element={<SearchDoctor />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />

        {/* extra sections Eesha added */}
        <Route path="upcoming-appointments" element={<UpcomingAppointments />} />
        <Route path="book-appointments" element={<BookAppointments />} />
        <Route path="reminders" element={<Reminders />} />
        <Route path="help-center" element={<HelpCenter />} />
      </Route>

      {/* Dashboard (doctor) */}
      <Route path="/docdashboard" element={<DocDashboardLayout />}>
        <Route index element={<MedicalHome />} />
        <Route path="home" element={<MedicalHome />} />
        {/* Agar doctor ke aur pages hain, wo yahan add karo */}
      </Route>
    </Routes>
  );
}

export default App;
