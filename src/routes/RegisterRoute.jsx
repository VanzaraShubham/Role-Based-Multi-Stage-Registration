import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashBoardLayout';
import Stage1 from '../pages/Stage1';
import Stage2 from '../pages/Stage2';
import Stage3 from '../pages/Stage3';
import Success from '../pages/Success';
import Welcome from '../pages/Welcome';

const RegisterRoute = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Stage1 />} />
        <Route path="stage-2" element={<Stage2 />} />
        <Route path="stage-3" element={<Stage3 />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<Navigate to="/register" replace />} />
      </Route>
        <Route path="welcome" element={<Welcome />} />
    </Routes>
  );
};

export default RegisterRoute;
