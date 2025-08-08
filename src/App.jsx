import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';
import Services from './Pages/ServicesPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
