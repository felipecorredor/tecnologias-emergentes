// project imports
import { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';

// react-router-dom
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://rickandmortyapi.com/api/character/${studentId}`);
      const response = await data.json();
      setStudent(response);
    };

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [studentId]);

  return <StudentForm student={student} isEdit />;
};

export default Edit;
