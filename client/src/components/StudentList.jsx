// Задача 8: StudentList - список студентов с кнопками редактирования и удаления

import axios from 'axios';
// TODO: Импортируйте useSelector и useDispatch
// import { useSelector, useDispatch } from 'react-redux';

// TODO: Импортируйте action creators
// import { deleteStudent, startEditing } from '../store/slices/studentsSlice.js';

// TODO: Импортируйте API из конфигурации
// import { API } from '../api/config.js';

import './StudentList.css';

export default function StudentList() {
  // TODO: Получите список студентов из Redux
  // const students = ...

  // TODO: Получите dispatch
  // const dispatch = ...

  const handleEdit = (student) => {
    // TODO: Начать редактирование студента
    // dispatch(...); // action creator startEditing(student)
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Удалить этого студента?')) {
      return;
    }

    try {
      // TODO: Отправить DELETE запрос через axios на ${API}/students/${id}
      // await ...
      
      // TODO: Удалить студента из Redux
      // dispatch(...); // action creator deleteStudent(id)
    } catch (err) {
      console.error('Ошибка удаления студента:', err);
      alert('Не удалось удалить студента');
    }
  };

  return (
    <div className="student-list-container">
      <h2>Список студентов ({students.length})</h2>

      {students.length === 0 ? (
        <div className="empty-message">
          📭 Список пуст. Добавьте первого студента!
        </div>
      ) : (
        <div className="students-grid">
          {students.map(student => (
            <div key={student.id} className="student-card">
              <div className="student-info">
                <h3 className="student-name">{student.name}</h3>
                <p className="student-detail">📧 {student.email}</p>
                <p className="student-detail">👥 Группа: {student.student_group}</p>
                <p className="student-detail">🎂 Возраст: {student.age}</p>
              </div>
              
              <div className="student-actions">
                <button 
                  onClick={() => handleEdit(student)} 
                  className="btn btn-edit"
                  title="Редактировать"
                >
                  ✏️ Редактировать
                </button>
                <button 
                  onClick={() => ...} {/* Вызовите handleDelete и передайте id студента */}
                  className="btn btn-delete"
                  title="Удалить"
                >
                  🗑️ Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

