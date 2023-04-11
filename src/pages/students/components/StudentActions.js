import PropTypes from 'prop-types';
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
        <MenuItem onClick={handleClose} disableRipple component={Link} to={`/students/edit/${studentId}`}>
          <EditOutlined style={{ marginRight: 10 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <DeleteOutlined style={{ marginRight: 10 }} />
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
