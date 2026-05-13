-- Создание базы данных
CREATE DATABASE students_db;

\c students_db;

-- Создание таблицы студентов
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    student_group VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL CHECK (age >= 16 AND age <= 100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Добавляем тестовых студентов
INSERT INTO students (name, email, student_group, age) VALUES
    ('Ахмед Магомедов', 'ahmed@example.com', 'ФП-301', 20),
    ('Марьям Исаева', 'maryam@example.com', 'ФП-301', 19),
    ('Хамзат Кадыров', 'hamzat@example.com', 'ФП-302', 21),
    ('Амина Умарова', 'amina@example.com', 'ФП-302', 20),
    ('Руслан Абдулаев', 'ruslan@example.com', 'ФП-303', 22);

-- Проверка создания таблицы
SELECT * FROM students;

