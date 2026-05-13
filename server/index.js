const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Настройка подключения к БД — укажите свои данные
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "students_db",
  password: "postgres", // ИЗМЕНИТЕ на ваш пароль
  port: 5432,
});

// ============================================
// Задача 2.1: GET /students
// Назначение: Получить всех студентов из базы данных
// ============================================
app.get("/students", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students");
    res.json(result.rows);
    // TODO: Выполнить SQL запрос для получения всех студентов
    // Подсказки:
    // 1. Используйте pool.query() для выполнения SQL
    // 2. Запрос: SELECT  ...
    // 3. Результат находится в result.rows
    // 4. Верните JSON: res.json(result.rows)
    // Пример структуры:
    // const result = await pool.query('ваш SQL запрос');
    // res.json(result.rows);
  } catch (err) {
    console.error(err);
    // TODO: Вернуть ошибку с статусом 500
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
});

// ============================================
// Задача 2.2: POST /students
// Назначение: Добавить нового студента
// Body: { name, email, student_group, age }
// ============================================
app.post("/students", async (req, res) => {
  try {
    const { name, email, student_group, age } = req.body;
    const result = await pool.query('INSERT INTO students (name, email, student_group, age) VALUES ($1, $2, $3, $4) RETUTNING if, name, email, student_group, age', [name.trim,])
    // TODO: Извлечь данные из тела запроса
    // const { name, email, student_group, age } = req.body;
    // TODO: Валидация - проверить, что name заполнен
    // Подсказки:
    // 1. Проверить: !name || !name.toString().trim()
    // 2. Если пусто: return res.status(400).json({ error: 'Имя обязательно' });
    // TODO: Валидация - проверить, что email заполнен и содержит @
    // Если не валидно: return res.status(400).json({ error: 'Email обязателен и должен содержать @' });
    // TODO: Валидация - проверить, что student_group заполнена
    // Если пусто: return res.status(400).json({ error: 'Группа обязательна' });
    // TODO: Валидация - проверить, что age это число в пределах 16-100
    // Подсказки:
    // 1. Проверить: !age
    // 2. Если не валидно: return res.status(400).json({ error: 'Возраст должен быть от 16 до 100' });
    // TODO: Выполнить INSERT запрос
    // Подсказки:
    // 1. SQL: INSERT INTO students ...
    // 2. Используйте trim() для удаления пробелов
    // 3. Передайте параметры: [name.trim(), email.trim(), student_group.trim(), age]
    // 4. const result = await pool.query('SQL', [параметры]);
    // TODO: Вернуть созданного студента со статусом 201
    // res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    // TODO: Вернуть ошибку с статусом 500
  }
});

// ============================================
// Задача 2.3: PUT /students/:id
// Назначение: Обновить существующего студента
// Body: { name, email, student_group, age }
// ============================================
app.put("/students/:id", async (req, res) => {
  try {
    // TODO: Извлечь id из параметров маршрута
    // const { id } = req.params;
    // TODO: Извлечь данные из тела запроса
    // const { name, email, student_group, age } = req.body;
    // TODO: Валидация полей (аналогично POST /students)
    // TODO: Выполнить UPDATE запрос
    // Подсказки:
    // 1. SQL: UPDATE students SET ...
    // 2. Параметры: [name.trim(), email.trim(), student_group.trim(), age, id]
    // 3. const result = await pool.query('SQL', [параметры]);
    // TODO: Проверить, что студент был найден
    // Подсказки:
    // 1. if (result.rows.length === 0)
    // 2. return res.status(404).json({ error: 'Студент не найден' });
    // TODO: Вернуть обновленного студента
    // res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    // TODO: Вернуть ошибку с статусом 500
  }
});

// ============================================
// Задача 2.4: DELETE /students/:id
// Назначение: Удалить студента по id
// ============================================
app.delete("/students/:id", async (req, res) => {
  try {
    // TODO: Извлечь id из параметров маршрута
    // const { id } = req.params;
    // TODO: Выполнить DELETE запрос
    // Подсказки:
    // 1. SQL: DELETE FROM ...
    // 2. Параметры: [id]
    // 3. const result = await pool.query('SQL', [параметры]);
    // TODO: Проверить, что студент был найден и удален
    // Подсказки:
    // 1. if (result.rows.length === 0)
    // 2. return res.status(404).json({ error: 'Студент не найден' });
    // TODO: Вернуть id удаленного студента
    // res.json({ id: result.rows[0].id });
  } catch (err) {
    console.error(err);
    // TODO: Вернуть ошибку с статусом 500
  }
});

// Запуск сервера
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
  console.log("Доступные эндпоинты:");
  console.log("  GET    /students     - Получить всех студентов");
  console.log("  POST   /students     - Добавить студента");
  console.log("  PUT    /students/:id - Обновить студента");
  console.log("  DELETE /students/:id - Удалить студента");
});
