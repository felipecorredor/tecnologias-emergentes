import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import StudentsRoutes from './StudentsRoutes';
import TeachersRoutes from './TeachersRoutes';
import SubjectsRoutes from './SubjectsRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, StudentsRoutes, TeachersRoutes, SubjectsRoutes]);
}
