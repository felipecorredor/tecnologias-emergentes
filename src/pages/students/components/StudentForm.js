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

const StudentForm = ({ student, isEdit }) => {
  if (!student && isEdit) {
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
              <TextField id="outlined-basic" label="Name" variant="outlined" defaultValue={student.name} />
              <TextField id="outlined-basic" label="Last Name" variant="outlined" defaultValue={student.lastName} />
              <TextField id="outlined-basic" label="Email" variant="outlined" defaultValue={student.email} />
              <TextField id="outlined-basic" label="Phone" variant="outlined" defaultValue={student.phone} />
              <TextField id="outlined-basic" label="Address" variant="outlined" defaultValue={student.address} />
              <TextField id="outlined-basic" label="Age" variant="outlined" defaultValue={student.age} />
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup defaultValue={student.gender} row>
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
              <Select labelId="demo-simple-select-label" defaultValue={student.typeDocument} id="demo-simple-select" label="Type Document">
                <MenuItem value="passport">Passport</MenuItem>
                <MenuItem value="identification_card">Identification Card</MenuItem>
              </Select>
              <TextField id="outlined-basic" label="Number document" variant="outlined" defaultValue={student.numberDocument} />
              <FormLabel id="demo-simple-select-label">Date of birth</FormLabel>
              <TextField id="outlined-basic" type="date" variant="outlined" placeholder="YY/MM/AAA" defaultValue={student.dateBirth} />
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
              <Select labelId="demo-simple-select-label" defaultValue={student.typeSubject} id="demo-simple-select" label="Type Document">
                <MenuItem value="software_development">Software development</MenuItem>
                <MenuItem value="machine_learning">Machine Learning</MenuItem>
                <MenuItem value="mathematics">Mathematics ||</MenuItem>
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
            <Button size="small" variant="outlined" component={Link} to="/students">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

StudentForm.propTypes = {
  student: PropTypes.object,
  isEdit: PropTypes.bool
};

const Student = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  age: 0,
  gender: 'male',
  typeDocument: 'passport',
  typeSubject: 'machine_learning',
  numberDocument: '',
  dateBirth: ''
};

StudentForm.defaultProps = {
  student: Student,
  isEdit: false
};

export default StudentForm;
