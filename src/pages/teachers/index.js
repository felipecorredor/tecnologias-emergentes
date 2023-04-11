// material-ui
import { Stack, Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ant-design/icons
import { PlusOutlined } from '@ant-design/icons';
import UserActions from './components/TeacherActions';

// react-router-dom
import { Link } from 'react-router-dom';

function createData(document, name, lastName, address, age) {
  return { document, name, lastName, address, age };
}

const rows = [
  createData(1234567890, 'Juliana', 'Pérez Solís', 'Calle 10 # 25-16, Barrio San José, Bogotá', 32),
  createData(2345678901, 'Luisa Fernández', 'Ortiz Cruz', 'Avenida 5 # 14-78, Conjunto Residencial Las Acacias, Medellín', 27),
  createData(3456789012, 'Juan Carlos', 'Rodríguez Gómez', 'Carrera 7 # 14-20, Barrio La Candelaria, Cali', 41),
  createData(4567890123, 'Martín', 'Hernández Torres', 'Calle 80 # 50-30, Conjunto Residencial Los Pinos, Barranquilla', 24),
  createData(5678901234, 'Ana María', 'Gutiérrez López', 'Calle 100 # 15-40, Conjunto Residencial Los Alpes, Bucaramanga', 38),
  createData(6789012345, 'Pablo', 'Castro Ramírez', 'Carrera 25 # 30-10, Barrio El Prado, Cartagena', 28)
];

const Teachers = () => {
  return (
    <Stack spacing={3}>
      <Grid container direction="row-reverse">
        <Button size="small" variant="contained" component={Link} to="/teachers/create">
          <PlusOutlined style={{ marginRight: 5 }} /> Add Teacher
        </Button>
      </Grid>
      <MainCard title="Teachers">
        <Stack spacing={0.75} sx={{ mt: -1.5 }}>
          <Box sx={{ height: 'auto', width: '100%' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Document</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Last name</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.document} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.document}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{`${row.age}`}</TableCell>
                    <TableCell align="right">
                      <UserActions teacherId={row.document} />
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

export default Teachers;
