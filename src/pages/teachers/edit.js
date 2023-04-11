// project imports
import { useState, useEffect } from 'react';
import TeacherForm from './components/TeacherForm';

// react-router-dom
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://rickandmortyapi.com/api/character/${teacherId}`);
      const response = await data.json();
      setTeacher(response);
    };

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [teacherId]);

  return <TeacherForm teacher={teacher} isEdit />;
};

export default Edit;
