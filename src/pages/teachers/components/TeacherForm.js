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
              <RadioGroup defaultValue={teacher.gender} row>
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
              <Select labelId="demo-simple-select-label" defaultValue={teacher.typeDocument} id="demo-simple-select" label="Type Document">
                <MenuItem value="passport">Passport</MenuItem>
                <MenuItem value="identification_card">Identification Card</MenuItem>
              </Select>
              <TextField id="outlined-basic" label="Number document" variant="outlined" defaultValue={teacher.numberDocument} />
              <FormLabel id="demo-simple-select-label">Date of birth</FormLabel>
              <TextField id="outlined-basic" type="date" variant="outlined" placeholder="YY/MM/AAA" defaultValue={teacher.dateBirth} />
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
              <Select labelId="demo-simple-select-label" defaultValue={teacher.typeSubject} id="demo-simple-select" label="Type Document">
                <MenuItem value="software_development">Software development</MenuItem>
                <MenuItem value="machine_learning">Machine Learning</MenuItem>
                <MenuItem value="mathematics">Mathematics ||</MenuItem>
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
              <TextField id="outlined-basic" label="Code of teacher" variant="outlined" defaultValue={teacher.code} />
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

const Teacher = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  age: '',
  gender: 'male',
  typeDocument: 'passport',
  typeSubject: 'machine_learning',
  numberDocument: '',
  dateBirth: '',
  code: ''
};

TeacherForm.defaultProps = {
  teacher: Teacher
};

export default TeacherForm;
