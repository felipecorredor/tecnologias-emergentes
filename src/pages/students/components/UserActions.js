import { Fragment, useState } from 'react';

// mui-material
import { IconButton, Menu, MenuItem } from '@mui/material';

import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

// react-router-dom
import { Link } from 'react-router-dom';

const ITEM_HEIGHT = 48;

const UserActions = ({ studentId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreOutlined />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch'
          }
        }}
      >
        <Link to={`edit/${studentId}`} style={{ textDecoration: 'none', color: 'black' }}>
          <MenuItem onClick={handleClose} disableRipple>
            <EditOutlined />
            Edit
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose} disableRipple>
          <DeleteOutlined />
          Delete
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

UserActions.propTypes = {
  studentId: PropTypes.number
};

export default UserActions;
