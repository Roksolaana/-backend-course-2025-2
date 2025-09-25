// Оголошення констант
const date = "20240801";       // дата
const period = "m";            // період
const format = "json";         // формат відповіді

// Імпорт класів URL та URLSearchParams
const { URL, URLSearchParams } = require('url');

// Базова URL-адреса
const baseUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp";

// Створення об'єкта URL
const url = new URL(baseUrl);

// Додавання параметрів до URL
url.searchParams.append("date", date);
url.searchParams.append("period", period);
url.searchParams.append("json", "");

// Виведення сформованого URL у консоль
console.log("Constructed URL:", url.href);