import { Outlet } from 'react-router-dom';
import NavBar from '../../shared/components/NavBar/NavBar';

const MainLayout = () => {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
