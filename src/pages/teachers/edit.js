// project imports
import { useState, useEffect } from 'react';
import TeacherForm from './components/TeacherForm';

// react-router-dom
import { useParams } from 'react-router-dom';

const Edit = () => {
  // const { teacherId } = useParams();

  const teacher = {
    name: 'Jane',
    lastName: 'Smith',
    email: 'janesmith@example.com',
    phone: '987654321',
    address: '456 Elm St',
    age: 35,
    gender: 'female',
    typeDocument: 'passport',
    typeSubject: 'machine_learning',
    numberDocument: '1234567890',
    dateBirth: '1987-05-10',
    code: 'FDS23032S'
  };

  return <TeacherForm teacher={teacher} isEdit />;
};

export default Edit;
