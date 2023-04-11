import PropTypes from 'prop-types';
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
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// react-router-dom
import { Link } from 'react-router-dom';

const Teacher = {
  name: ''
};

const TeacherForm = ({ teacher, isEdit }) => {
  if (!teacher && isEdit) {
    return <LinearProgress />;
  }

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
              <TextField id="outlined-basic" label="Name" variant="outlined" defaultValue={teacher.name} />
              <TextField id="outlined-basic" label="Last Name" variant="outlined" defaultValue={teacher.lastName} />
              <TextField id="outlined-basic" label="Email" variant="outlined" defaultValue={teacher.email} />
              <TextField id="outlined-basic" label="Phone" variant="outlined" defaultValue={teacher.phone} />
              <TextField id="outlined-basic" label="Address" variant="outlined" defaultValue={teacher.address} />
              <TextField id="outlined-basic" label="Age" variant="outlined" defaultValue={teacher.age} />
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup defaultValue="female" row>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Identity
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <FormLabel>Identification</FormLabel>
              <Select labelId="demo-simple-select-label" defaultValue="T.I" id="demo-simple-select" label="Type Document">
                <MenuItem value="T.I">Passport</MenuItem>
                <MenuItem value="I.C">Identification Card</MenuItem>
              </Select>
              <TextField id="outlined-basic" type="number" label="Number document" variant="outlined" />
              <TextField id="outlined-basic" type="date" variant="outlined" />
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Subjects
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <Select labelId="demo-simple-select-label" defaultValue="T.I" id="demo-simple-select" label="Type Document">
                <MenuItem value="T.I">Software development</MenuItem>
                <MenuItem value="I.C">Machine Learning</MenuItem>
                <MenuItem value="I.C">Mathematics ||</MenuItem>
              </Select>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Teacher
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <TextField id="outlined-basic" label="Code of teacher" variant="outlined" />
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
            <Button size="small" variant="outlined" component={Link} to="/teachers">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

TeacherForm.propTypes = {
  teacher: PropTypes.object,
  isEdit: PropTypes.bool
};

TeacherForm.defaultProps = {
  teacher: Teacher
};

export default TeacherForm;
