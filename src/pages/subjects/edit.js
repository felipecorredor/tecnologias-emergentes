// project imports
import { useState, useEffect } from 'react';
import SubjectForm from './components/SubjectForm';

// react-router-dom
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { subjectId } = useParams();
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://rickandmortyapi.com/api/character/${subjectId}`);
      const response = await data.json();
      setSubject(response);
    };

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [subjectId]);

  return <SubjectForm subject={subject} isEdit />;
};

export default Edit;
