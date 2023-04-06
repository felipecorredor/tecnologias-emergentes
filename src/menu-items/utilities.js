// assets
import { TeamOutlined } from '@ant-design/icons';

// icons
const icons = {
  TeamOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Students',
      type: 'item',
      url: '/students',
      icon: icons.TeamOutlined,
      breadcrumbs: false
    }
  ]
};

export default utilities;
