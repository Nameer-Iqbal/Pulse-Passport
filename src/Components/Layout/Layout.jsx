import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <main className='w-full bg-[#F9F9F9]'>
      <Navbar />
      <main className="mt-20">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
};

export default Layout;
