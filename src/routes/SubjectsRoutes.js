import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - utilities
const Subjects = Loadable(lazy(() => import('pages/subjects')));
const Create = Loadable(lazy(() => import('pages/subjects/create')));
const Edit = Loadable(lazy(() => import('pages/subjects/edit')));

// ==============================|| MAIN ROUTING ||============================== //

const StudentsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'subjects',
      element: <Subjects />
    },
    {
      path: 'subjects/create',
      element: <Create />
    },
    {
      path: 'subjects/edit/:subjectId',
      element: <Edit />
    }
  ]
};

export default StudentsRoutes;
