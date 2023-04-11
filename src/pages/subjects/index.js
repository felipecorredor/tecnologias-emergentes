// material-ui
import { Stack, Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ant-design/icons
import { PlusOutlined } from '@ant-design/icons';
import UserActions from './components/UserActions';

// react-router-dom
import { Link } from 'react-router-dom';

function createData(code, name, credits) {
  return { code, name, credits };
}

const rows = [
  createData(7890123456, 'Database Systems', 3),
  createData(8901234567, 'Operating Systems', 2),
  createData(9012345678, 'Web Development (HTML, CSS, JavaScript)', 3),
  createData(3123456709, 'Mobile App Development (Android, iOS)', 1),
  createData(2345678901, 'Software Engineering principles', 2),
  createData(3456789012, 'Computer Networks', 1)
];

const Subjects = () => {
  return (
    <Stack spacing={3}>
      <Grid container direction="row-reverse">
        <Button size="small" variant="contained" component={Link} to="/subjects">
          <PlusOutlined style={{ marginRight: 5 }} /> Add Student
        </Button>
      </Grid>
      <MainCard title="Subjects">
        <Stack spacing={0.75} sx={{ mt: -1.5 }}>
          <Box sx={{ height: 'auto', width: '100%' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Code</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Credits</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.code} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.code}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.credits}</TableCell>
                    <TableCell align="right">
                      <UserActions subjectId={row.code} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Stack>
      </MainCard>
    </Stack>
  );
};

export default Subjects;
