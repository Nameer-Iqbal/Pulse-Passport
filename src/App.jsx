import { Routes, Route } from "react-router-dom";

// 🌐 Public Website Layout & Pages
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Services from "./Pages/ServicesPage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SignupPage from "./Pages/SignUp";
import LoginPage from "./Pages/Login";
import DetailSignUp from "./Pages/DetailSignUp";

// 🧑‍ Patient Dashboard Layout & Pages
import DashboardLayout from "./Components/DashboardLayout/Layout";
import DashboardHome from "./Pages/PatientDashboard/Home";
import DashboardHistory from "./Pages/PatientDashboard/History";
import HealthSummary from "./Pages/PatientDashboard/HealthSummary";
import Prescriptions from "./Pages/PatientDashboard/Prescriptions";
import SearchDoctor from "./Pages/PatientDashboard/SearchDoctor";
import Reports from "./Pages/PatientDashboard/Reports";
import Settings from "./Pages/PatientDashboard/Settings";

// ➕ Extra Patient Dashboard Pages
import UpcomingAppointments from "./Pages/PatientDashboard/UpcomingAppointments";
import BookAppointments from "./Pages/PatientDashboard/BookAppointments";
import Reminders from "./Pages/PatientDashboard/Reminders";
import HelpCenter from "./Pages/PatientDashboard/HelpCenter";

// 👨‍⚕️ Doctor Dashboard Layout & Pages
import DocDashboardLayout from "./Components/DocDashboardLayout/Layout";
import MedicalHome from "./Pages/DoctorDashboard/Home";
import AppointmentsDashboard from "./Pages/DoctorDashboard/Appointments";
import AIinsights from "./Pages/DoctorDashboard/AI-Insights";
import DocHelpCenter from "./Pages/DoctorDashboard/HelpCenter";

function App() {
  return (
    <Routes>
      {/* 🌐 Public Website Pages */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detail-signup/:role" element={<DetailSignUp />} />
      </Route>

      {/* 🧑‍ Patient Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="home" element={<DashboardHome />} />
        <Route path="history" element={<DashboardHistory />} />
        <Route path="healthsummary" element={<HealthSummary />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="search-doctor" element={<SearchDoctor />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />

        {/* Extra Sections */}
        <Route path="upcoming-appointments" element={<UpcomingAppointments />} />
        <Route path="book-appointments" element={<BookAppointments />} />
        <Route path="reminders" element={<Reminders />} />
        <Route path="help-center" element={<HelpCenter />} />
      </Route>

      {/* 👨‍⚕️ Doctor Dashboard */}
      <Route path="/docdashboard" element={<DocDashboardLayout />}>
        <Route index element={<MedicalHome />} />
        <Route path="home" element={<MedicalHome />} />
        <Route path="appointments" element={<AppointmentsDashboard />} />
        <Route path="aiinsights" element={<AIinsights />} />
        <Route path="helpcenter" element={<DocHelpCenter />} />
      </Route>
    </Routes>
  );
}

export default App;
