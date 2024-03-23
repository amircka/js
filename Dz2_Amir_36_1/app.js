// Запрос у пользователя
let userInput = prompt("Введите язык программирования (JavaScript, Python, Java, C#, Ruby и т.д):");

// Приведение введенного значения к нижнему регистру для унификации
let programmingLanguage = userInput.toLowerCase();

// Определение сферы применения в зависимости от введенного языка программирования
let applicationArea;

switch (programmingLanguage) {
    case "javascript":
        applicationArea = "Веб-разработка";
        break;
    case "python":
        applicationArea = "Научные вычисления, веб-разработка, искусственный интеллект";
        break;
    case "java":
        applicationArea = "Корпоративное приложение, мобильная разработка";
        break;
    case "c#":
        applicationArea = "Разработка приложений под платформу .NET";
        break;
    case "ruby":
        applicationArea = "Веб-разработка, автоматизация задач";
        break;
    default:
        applicationArea = "Неизвестный язык программирования";
}

// Вывод результата
console.log(`Язык программирования ${programmingLanguage} применяется в сфере: ${applicationArea}`);


// Создание объекта student
let student = {
    name: "Иван",
    age: 20,
    major: "Информатика",
};

// Вывод информации о студенте в консоль
console.log(`Имя ${student.name}, Возраст ${student.age}, Направление ${student.major}`);

// Добавление свойства grades (оценок)
student.grades = [85, 90, 78, 92, 88];

// Обновление возраста студента
student.age = 21;

// Добавление новой оценки
student.grades.push(95);

// Вывод обновленной информации о студенте в консоль
    console.log(`Имя ${student.name}, Возраст ${student.age}, Направление ${student.major}, Оценки ${student.grades}`);

