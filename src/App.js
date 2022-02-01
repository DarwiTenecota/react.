import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CoursesPage from './Productos/MarcaPage';
import TeachersPage from './Marca/MarcaPage';
import TeacherCreate from './Marca/MarcaCreate';
import TeacherUpdate from './Marca/MarcaUpdate';
import Course from './Productos/Marca';
import Navbar from "./components/Navbar";

function App () {

  return (
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/courses" element={ <CoursesPage />   }/>         
        <Route path="/course" element={ <Course />   }/>                 
        <Route path="/createteacher" element={ <TeacherCreate />   }/>   
        <Route path="/updateteacher/:teacherId" element={ <TeacherUpdate />   }/>   
        
      </Routes>

    </BrowserRouter>   
  );
}

export default App;