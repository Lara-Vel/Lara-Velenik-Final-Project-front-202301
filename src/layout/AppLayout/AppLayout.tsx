import { Outlet } from 'react-router-dom';
import NavBar from '../../shared/components/NavBar/NavBar';

const AppLayout = () => {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
