// material-ui
import { Typography, Stack } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

const Students = () => {
  return (
    <Stack spacing={3}>
      <MainCard title="Students v3">
        <Stack spacing={0.75} sx={{ mt: -1.5 }}>
          <Typography variant="h1">Students</Typography>
        </Stack>
      </MainCard>
    </Stack>
  );
};

export default Students;
