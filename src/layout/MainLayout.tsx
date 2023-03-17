import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="app-container">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
