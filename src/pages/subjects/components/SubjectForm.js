import PropTypes from 'prop-types';

import { useState } from 'react';

// material-ui
import {
  Typography,
  Stack,
  LinearProgress,
  Grid,
  TextField,
  MenuItem,
  Button,
  Select,
  Checkbox,
  OutlinedInput,
  ListItemText,
  FormLabel
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// react-router-dom
import { Link } from 'react-router-dom';

const Subject = {
  name: ''
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
];

const SubjectForm = ({ subject, isEdit }) => {
  const [studentName, setStudentName] = useState([]);

  if (!subject && isEdit) {
    return <LinearProgress />;
  }

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setStudentName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Stack spacing={3} px={20}>
      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Basic details
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <TextField id="outlined-basic" label="Name" variant="outlined" defaultValue={subject.name} />
              <TextField id="outlined-basic" label="Code" variant="outlined" defaultValue={subject.code} />
              <TextField id="outlined-basic" label="Credits" variant="outlined" defaultValue={subject.credits} />
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Students
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <FormLabel>Select students</FormLabel>
              <Select
                multiple
                value={studentName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={studentName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Teachers
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <FormLabel id="demo-simple-select-label">Select a teacher</FormLabel>
              <Select>
                <MenuItem value="John">John Smith</MenuItem>
                <MenuItem value="Sarah">Sarah Johnson</MenuItem>
                <MenuItem value="David">David Lee</MenuItem>
              </Select>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <Stack>
        <Grid container spacing={2} direction="row-reverse">
          <Grid item>
            <Button size="small" variant="contained">
              Create
            </Button>
          </Grid>

          <Grid item>
            <Button size="small" variant="outlined" component={Link} to="/subjects">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

SubjectForm.propTypes = {
  subject: PropTypes.object,
  isEdit: PropTypes.bool
};

SubjectForm.defaultProps = {
  subject: Subject
};

export default SubjectForm;
