// assets
import { BookOutlined } from '@ant-design/icons';

// icons
const icons = {
  BookOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const subjects = {
  id: 'subjects',
  title: 'Subjects',
  type: 'group',
  children: [
    {
      id: 'subjects',
      title: 'Subjects',
      type: 'item',
      url: '/subjects',
      icon: icons.BookOutlined,
      breadcrumbs: false
    }
  ]
};

export default subjects;
