// material-ui
import { Box, Grid, Stack, Typography } from '@mui/material';

// project import
import MonthlyBarChart from '../MonthlyBarChart';
import MainCard from 'components/MainCard';

const IncomeOverview = () => {
  return (
    <Grid item xs={12} md={5} lg={4}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Income Overview</Typography>
        </Grid>
        <Grid item />
      </Grid>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="textSecondary">
              This Week Statistics
            </Typography>
            <Typography variant="h3">$7,650</Typography>
          </Stack>
        </Box>
        <MonthlyBarChart />
      </MainCard>
    </Grid>
  );
};

export default IncomeOverview;
