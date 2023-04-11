// assets
import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  TeamOutlined,
  UserAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const students = {
  id: 'students',
  title: 'Students',
  type: 'group',
  children: [
    {
      id: 'students',
      title: 'Students',
      type: 'item',
      url: '/students',
      icon: icons.TeamOutlined,
      breadcrumbs: false
    }
    // {
    //   id: 'student',
    //   title: 'Create',
    //   type: 'item',
    //   url: '/students/create',
    //   icon: icons.UserAddOutlined
    // }
  ]
};

export default students;
