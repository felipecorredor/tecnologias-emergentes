import PropTypes from 'prop-types';
// material-ui
import { Typography, Stack, LinearProgress, Grid, TextField, MenuItem, Button, Select } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// react-router-dom
import { Link } from 'react-router-dom';

const Subject = {
  name: ''
};

const SubjectForm = ({ subject, isEdit }) => {
  if (!subject && isEdit) {
    return <LinearProgress />;
  }

  return (
    <Stack spacing={3} px={20}>
      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Subject
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <TextField id="outlined-basic" label="Name" variant="outlined" defaultValue={subject.name} />
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

SubjectForm.propTypes = {
  subject: PropTypes.object,
  isEdit: PropTypes.bool
};

SubjectForm.defaultProps = {
  subject: Subject
};

export default SubjectForm;
