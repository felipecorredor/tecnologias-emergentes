import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import StudentsRoutes from './StudentsRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, StudentsRoutes]);
}
