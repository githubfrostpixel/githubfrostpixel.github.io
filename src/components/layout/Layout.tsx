import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar transparent={isHome} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

