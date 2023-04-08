// material-ui
import { Typography, Stack, Grid, TextField, MenuItem, Button, InputLabel, Select } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

const StudentForm = () => {
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
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField id="outlined-basic" label="Last Name" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField id="outlined-basic" label="Phone" variant="outlined" />
              <TextField id="outlined-basic" label="Address" variant="outlined" />
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
              <InputLabel id="demo-simple-select-label">Identification</InputLabel>
              <Select labelId="demo-simple-select-label" value="T.I" id="demo-simple-select" label="Type Document">
                <MenuItem value="T.I">Passport</MenuItem>
                <MenuItem value="I.C">Identification Card</MenuItem>
              </Select>
              <TextField id="outlined-basic" type="number" label="Number document" variant="outlined" />
              <TextField id="outlined-basic" type="date" variant="outlined" />
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
            <Button size="small" variant="outlined">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default StudentForm;
