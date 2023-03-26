import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="app-login-container">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
