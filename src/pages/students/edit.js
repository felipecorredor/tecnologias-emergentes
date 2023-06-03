import { useState, useEffect } from 'react';
// project imports
import StudentForm from './components/studentForm';
import { LinearProgress } from '@mui/material';
// react-router-dom
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { studentId } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/students/${studentId}`);
        if (response.ok) {
          const data = await response.json();
          setStudent(data);
        } else {
          throw new Error('Error getting the data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [studentId]);

  if (!student) {
    return <LinearProgress />;
  }

  return <StudentForm student={student} isEdit />;
};

export default Edit;
