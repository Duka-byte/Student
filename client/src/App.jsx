// Задача 6: App.jsx - главный компонент и загрузка студентов

import { useEffect } from 'react';
import axios from 'axios';
// TODO: Импортируйте useDispatch
// import { useDispatch } from 'react-redux';

// TODO: Импортируйте action creator setStudents
// import { setStudents } from './store/slices/studentsSlice.js';

// TODO: Импортируйте API из конфигурации
// import { API } from './api/config.js';

import StudentForm from './components/StudentForm.jsx';
import StudentList from './components/StudentList.jsx';
import './App.css';

export default function App() {
  // TODO: Получите функцию dispatch
  // const dispatch = ...

  // TODO: Загрузить студентов с сервера при монтировании компонента
  // useEffect(() => {
  // async function loadStudents() {
  //   // Выполнить GET запрос к ${API}/students
  //   // После успешного ответа dispatch(...) // action creator setStudents(res.data)
  // }
  // loadStudents();
  // }, []); // пустой массив зависимостей - выполнится один раз

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>👨‍🎓 Управление студентами</h1>
        <p className="subtitle">Управление через Redux Toolkit</p>
      </header>

      <div className="app-content">
        {/* Компонент Добавления студентов */}
        {/* Компонент Списка студентов */}
      </div>
    </div>
  );
}

