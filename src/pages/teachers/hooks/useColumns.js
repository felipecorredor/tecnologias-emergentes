import UserActions from '../components/TeacherActions';

const useColumns = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 250,
      editable: true
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 200,
      editable: true
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 150,
      editable: true
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
      valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      sortable: false,
      editable: false,
      width: 130,
      renderCell: (params) => <UserActions {...params} />
    }
  ];

  return { columns };
};

export default useColumns;
