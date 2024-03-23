const arr = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

arr.sort((a, b) => b.length - a.length);

console.log(arr);



function book(...choices) {
    const bookU = choices.filter(book => book.toLowerCase().includes('у'));
    const other = choices.filter(book => !book.toLowerCase().includes('у'));

    console.log("Книги c 'у':", bookU);
    console.log("Остальные книги:", other);
}

book('JavaScript: God of Death', 'Devil My Cry', 'Witcher', 'Far Cry');






//Вот object
const courses = [
    {
        courseName: 'JavaScript',
        students: [
            { name: 'John', grades: [60, 55, 95] },
            { name: 'Jack', grades: [59, 90, 95] }
        ]
    },
    {
        courseName: 'Python',
        students: [
            { name: 'Mark', grades: [78, 82, 80] },
            { name: 'Alice', grades: [85, 88, 90] }
        ]
    }
];
// Функция оценки
const calculateAverageGrade = grades => {
    const sum = grades.reduce((acc, curr) => acc + curr, 0);
    return sum / grades.length;
};

// Преобразование
const transformedData = courses.map(course => ({
    courseName: course.courseName,
    students: course.students.map(student => ({                 //здесь я не много запутолся, можно эту часть сократить
        name: student.name,
        averageGrade: calculateAverageGrade(student.grades)
    }))
}));
console.log(transformedData);



