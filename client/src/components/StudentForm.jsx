// Задача 7: StudentForm - форма добавления/редактирования студента

import { useState, useEffect } from 'react';
import axios from 'axios';
// TODO: Импортируйте useSelector и useDispatch
// import { useSelector, useDispatch } from 'react-redux';

// TODO: Импортируйте action creators
// import { addStudent, updateStudent, cancelEditing } from '../store/slices/studentsSlice.js';

// TODO: Импортируйте API из конфигурации
// import { API } from '../api/config.js';

import './StudentForm.css';

export default function StudentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentGroup, setStudentGroup] = useState('');
  const [age, setAge] = useState('');

  // TODO: Получите editingStudent из Redux
  // const editingStudent = ...

  // TODO: Получите dispatch
  // const dispatch = ...

  // TODO: Заполнить форму данными при редактировании
  // useEffect(() => {
  //   if (editingStudent) {
  //     setName(...); // editingStudent.name
  //     setEmail(...); // editingStudent.email
  //     setStudentGroup(...); // editingStudent.student_group
  //     setAge(...); // String(editingStudent.age)
  //   } else {
  //     // Очистить форму, если не редактируем
  //     setName('');
  //     setEmail(...);
  //     setStudentGroup(...);
  //     setAge(...);
  //   }
  // }, [editingStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация
    if (!name.trim() || !email.trim() || !studentGroup.trim() || !age.trim()) {
      alert('Заполните все поля');
      return;
    }

    if (!email.includes('@')) {
      alert('Email должен содержать @');
      return;
    }

    const ageNum = Number(age);
    if (ageNum < 16 || ageNum > 100) {
      alert('Возраст должен быть от 16 до 100');
      return;
    }

    // Этот объект нужно отправить на сервер внизу
    const studentData = {
      name: name.trim(),
      email: email.trim(),
      student_group: studentGroup.trim(),
      age: ageNum
    };

    try {
      // TODO: Если редактируем (editingStudent !== null)
      // if (editingStudent) {
      //   // Отправить PUT запрос через axios на ${API}/students/${editingStudent.id} с телом studentData
      //   const response = await ...
      //   
      //   // Обновить студента в Redux
      //   dispatch(...); // action creator updateStudent(response.data)
      // } else {
      //   // Отправить POST запрос (добавление нового студента) на ${API}/students с телом studentData
      //   const response = await ...
      //   
      //   // Добавить студента в Redux
      //   dispatch(...); // action creator addStudent(response.data)
      // }

      // Очистить форму
      setName('');
      setEmail('');
      setStudentGroup('');
      setAge('');
    } catch (err) {
      console.error('Ошибка сохранения студента:', err);
      alert('Не удалось сохранить студента');
    }
  };

  const handleCancel = () => {
    // TODO: Отменить редактирование
    // dispatch(...); // action creator cancelEditing()
    
    // Очистить форму
    setName(...);
    setEmail(...);
    setStudentGroup(...);
    setAge(...);
  };

  return (
    <div className="student-form-container">
      <h2>{/* editingStudent ? 'Редактировать студента' : 'Добавить студента' */}</h2>
      
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label htmlFor="name">Имя студента:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Введите имя"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="student@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="group">Группа:</label>
          <input
            type="text"
            id="group"
            value={studentGroup}
            onChange={e => setStudentGroup(e.target.value)}
            placeholder="Например, ФП-301"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Возраст:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={e => setAge(e.target.value)}
            placeholder="От 16 до 100"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            {/* editingStudent ? 'Сохранить изменения' : 'Добавить студента' */}
          </button>
          
          {/* TODO: Показывать кнопку "Отмена" только при редактировании */}
          {/* {editingStudent && (
            <button type="button" onClick={handleCancel} className="btn btn-secondary">
              Отмена
            </button>
          )} */}
        </div>
      </form>
    </div>
  );
}

