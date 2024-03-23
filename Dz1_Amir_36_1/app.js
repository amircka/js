// Получаем первое число от пользователя
var firstNumber = parseFloat(prompt("Введите первое положительное число:"));

// Проверка на отрицательное число
if (firstNumber < 0 || isNaN(firstNumber)) {
    alert("Ошибка: Введите корректное положительное число.");
} else {// Получаем второе число от пользователя
    //
    var secondNumber = parseFloat(prompt("Введите второе положительное число:"));

    // Проверка на отрицательное число
    if (secondNumber < 0 || isNaN(secondNumber)) {
        alert("Ошибка: Введите корректное положительное число.");
    } else {
        // Получаем математический оператор от пользователя
        var operator = prompt("Введите математический оператор (+, -, *, /):");

        // Выполняем операцию в зависимости от введенного оператора
        var result;

        switch (operator) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                // Проверка деления на ноль
                if (secondNumber !== 0) {
                    result = firstNumber / secondNumber;
                } else {
                    alert("Ошибка: деление на ноль!");
                }
                break;
            default:
                alert("Неверный оператор");
        }

        // Выводим результат
        if (result !== undefined) {
            alert("Результат: " + result);
        }
    }
}



let month = prompt("Введите месяц (например, Январь):").toLowerCase();

if (month === "декабрь" || month === "январь" || month === "февраль") {
     alert("Сезон: Зима");
} else if (month === "март" || month === "апрель" || month === "май") {
    alert("Сезон: Весна");
} else if (month === "июнь" || month === "июль" || month === "август") {
    alert("Сезон: Лето");
} else if (month === "сентябрь" || month === "октябрь" || month === "ноябрь") {
   alert("Сезон: Осень");
} else {
   alert("Некорректный ввод месяца.");
}