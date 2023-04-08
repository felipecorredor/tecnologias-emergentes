// project imports
import StudentForm from './components/StudentForm';

// react-router-dom
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { studentId: student } = useParams();

  return <StudentForm student={student} />;
};

export default Edit;
