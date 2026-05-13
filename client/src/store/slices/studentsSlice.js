// Задача 3: Создать slice для студентов

// TODO: Импортируйте createSlice из Redux Toolkit
// import { createSlice } from '@reduxjs/toolkit';

// TODO: Создайте slice для студентов
// const studentsSlice = createSlice({
//   name: 'students',
//   initialState: {
//     items: [],            // массив студентов
//     editingStudent: null  // студент для редактирования (или null)
//   },
//   reducers: {
//     
//     // TODO: Создайте reducer setStudents
//     // Устанавливает массив студентов (при загрузке с сервера)
//     // setStudents: (state, action) => {
//     //   state.items = ...
//     // },
//     
//     // TODO: Создайте reducer addStudent
//     // Добавляет нового студента в начало массива
//     // addStudent: (state, action) => {
//     //   state.items.unshift(...);
//     // },
//     
//     // TODO: Создайте reducer updateStudent
//     // Обновляет существующего студента и завершает редактирование
//     // Нужно обойти массив через map и найти нужного студента по id и
//     // заменить его на новый студент, а остальные оставить без изменений
//     // updateStudent: (state, action) => {
//     //   state.items = ...
//     //   state.editingStudent = ...;
//     // },
//     
//     // TODO: Создайте reducer deleteStudent
//     // Удаляет студента по id (используйте filter)
//     // deleteStudent: (state, action) => {
//     //   state.items = ... (используйте filter)
//     // },
//     
//     // TODO: Создайте reducer startEditing
//     // Начинает редактирование студента
//     // startEditing: (state, action) => {
//     //   state.editingStudent = ...;
//     // },
//     
//     // TODO: Создайте reducer cancelEditing
//     // Отменяет редактирование
//     // cancelEditing: (state) => {
//     //   state.editingStudent = ...;
//     // }
//     
//   }
// });

// TODO: Экспортируйте action creators
// export const { setStudents, addStudent, updateStudent, deleteStudent, startEditing, cancelEditing } = studentsSlice.actions;

// TODO: Экспортируйте reducer
// export default studentsSlice.reducer;