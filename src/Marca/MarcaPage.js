import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeacherList from './MarcaList';
import Teacher from './Marca'
import { getListTeachers } from '../service/MarcaService'

function MarcaPage() {

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    
    getListTeachers().then(data => {
      setTeachers(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>LISTADO DE USUARIOS</h2>
      <Link to='/createteacher' >
        AGREGAR NUEVO USUARIO
      </Link>
      <TeacherList>
        {
          teachers.map(item =>
            <Teacher
              key={item.id}
              itemTeacher={item} />
          )
        }
      </TeacherList>
    </div>
  );
}

export default MarcaPage;