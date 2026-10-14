function getNameWithSpaces(message) {
    let value = prompt(message);

    const validText = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'-]{2,}( [a-zA-Zа-яА-ЯіІїЇєЄґҐ'-]{2,})*$/;

    while (value === null || !validText.test(value.trim())) {
        value = prompt("Помилка! Тільки букви, апостроф і дефіс, слова через один пробіл, не менше 2 символів. " + message);
    }

    return value.trim();
}

function showLines(containerId, lines) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    lines.forEach(line => {
        const p = document.createElement("p");
        p.textContent = line;
        container.appendChild(p);
    });
}


const products = [
    { name: "Ноутбук", category: "Електроніка", price: 32000, inStock: 5 },
    { name: "Смартфон", category: "Електроніка", price: 21000, inStock: 0 },
    { name: "Навушники", category: "Аксесуари", price: 1800, inStock: 12 },
    { name: "Клавіатура", category: "Аксесуари", price: 1200, inStock: 0 },
    { name: "Монітор", category: "Електроніка", price: 8500, inStock: 3 },
    { name: "Мишка", category: "Аксесуари", price: 600, inStock: 20 }
];

function formatProduct(product) {
    return `${product.name} (${product.category}) — ${product.price} грн, на складі: ${product.inStock}`;
}

function getAvailableProducts(list) {
    return list.filter(product => product.inStock > 0);
}

function findProductByName(list, name) {
    const found = list.find(product => product.name.toLowerCase() === name.toLowerCase());
    return found ? found : "Товар не знайдено";
}

function showAvailableProducts() {
    const available = getAvailableProducts(products);
    showLines("out1", available.map(formatProduct));
}

function showFoundProduct() {
    const name = getNameWithSpaces("Введіть назву товару:");
    const result = findProductByName(products, name);

    if (typeof result === "string") {
        showLines("out1", [result]);
    } else {
        showLines("out1", [formatProduct(result)]);
    }
}


const students = [
    { name: "Ольга", age: 16, grade: 11, group: "ФБ-26-01" },
    { name: "Іван", age: 18, grade: 8, group: "КІ-23-01" },
    { name: "Марія", age: 17, grade: 12, group: "ПТ-24-01" },
    { name: "Андрій", age: 19, grade: 9, group: "КІ-23-01" },
    { name: "Софія", age: 18, grade: 9, group: "АК-23-02" },
    { name: "Богдан", age: 19, grade: 10, group: "НТ-25-01" },
    { name: "Наталія", age: 15, grade: 7, group: "КБ-26-01" },
    { name: "Тарас", age: 21, grade: 5, group: "ПМ-23-01" }
];

function formatStudent(student) {
    return `${student.name}, ${student.age} р., оцінка ${student.grade}`;
}

function groupBy(list) {
    return list.reduce((groups, student) => {
        if (!groups[student.group]) {
            groups[student.group] = [];
        }
        groups[student.group].push(student);
        return groups;
    }, {});
}

function sortStudentsByGrade(list) {
    return list.slice().sort((a, b) => b.grade - a.grade);
}

function showGroupedStudents() {
    const groups = groupBy(students);
    const lines = Object.keys(groups).map(groupName => {
        const members = groups[groupName].map(formatStudent).join("; ");
        return `${groupName}: ${members}`;
    });
    showLines("out2", lines);
}

function showSortedStudents() {
    const sorted = sortStudentsByGrade(students);
    showLines("out2", sorted.map(student => `${student.name} (${student.group}) — ${student.grade}`));
}


const employees = [
    { name: "Поліна Саєнко", position: "Менеджер", salary: 32000, years: 5 },
    { name: "Іван Галюк", position: "Розробник", salary: 55000, years: 8 },
    { name: "Олександр Костюк", position: "Дизайнер", salary: 40000, years: 3 },
    { name: "Андрій Лень", position: "Тестувальник", salary: 36000, years: 4 },
    { name: "Дмитро Ільків", position: "Аналітик", salary: 47000, years: 6 }
];

function formatEmployee(employee) {
    return `${employee.name}, ${employee.position}, досвід: ${employee.years} р., зарплата: ${employee.salary} грн`;
}

function showAllEmployees() {
    showLines("out3", employees.map(formatEmployee));
}

function getAverageSalary(list) {
    const total = list.reduce((sum, employee) => sum + employee.salary, 0);
    return total / list.length;
}

function findMostExperiencedEmployee(list) {
    return list.reduce((best, employee) => (employee.years > best.years ? employee : best), list[0]);
}

function showAverageSalary() {
    const average = getAverageSalary(employees);
    showLines("out3", [`Середня зарплата: ${average.toFixed(2)} грн`]);
}

function showMostExperienced() {
    const employee = findMostExperiencedEmployee(employees);
    showLines("out3", [`${employee.name}, ${employee.position}, досвід: ${employee.years} р., зарплата: ${employee.salary} грн`]);
}


const books = [
    { title: "Кобзар", author: "Тарас Шевченко", year: 1840, rating: 5, isRead: true },
    { title: "Гайдамаки", author: "Тарас Шевченко", year: 1841, rating: 4.5, isRead: false },
    { title: "Катерина", author: "Тарас Шевченко", year: 1838, rating: 4, isRead: true },
    { title: "Лісова пісня", author: "Леся Українка", year: 1911, rating: 5, isRead: false },
    { title: "Бояриня", author: "Леся Українка", year: 1910, rating: 4, isRead: true },
    { title: "Захар Беркут", author: "Іван Франко", year: 1883, rating: 4.5, isRead: true },
    { title: "Мойсей", author: "Іван Франко", year: 1905, rating: 4, isRead: false },
    { title: "Маруся Чурай", author: "Ліна Костенко", year: 1979, rating: 5, isRead: false }
];

function formatBook(book) {
    return `${book.title} — ${book.author}, ${book.year}, рейтинг ${book.rating}`;
}

function getUnreadBooks(list) {
    return list.reduce((titles, book) => {
        if (!book.isRead) {
            titles.push(book.title);
        }
        return titles;
    }, []);
}

function getBooksByAuthor(list, author) {
    const query = author.toLowerCase();

    return list
        .reduce((found, book) => {
            if (book.author.toLowerCase().includes(query)) {
                found.push(book);
            }
            return found;
        }, [])
        .sort((a, b) => a.year - b.year);
}

function getTopRatedBooks(list) {
    return list
        .reduce((top, book) => {
            if (book.rating > 4) {
                top.push(book);
            }
            return top;
        }, [])
        .sort((a, b) => b.rating - a.rating);
}

function showUnreadBooks() {
    const titles = getUnreadBooks(books);
    showLines("out4", titles);
}

function showBooksByAuthor() {
    const author = getNameWithSpaces("Введіть ім'я автора:");
    const found = getBooksByAuthor(books, author);

    if (found.length === 0) {
        showLines("out4", ["Книг цього автора не знайдено"]);
    } else {
        showLines("out4", found.map(formatBook));
    }
}

function showTopRatedBooks() {
    const top = getTopRatedBooks(books);
    showLines("out4", top.map(formatBook));
}


const orders = [
    { orderId: 1001, customer: { name: "Олег Парандій", email: "oleh@example.com" }, items: ["Ноутбук", "Мишка"], total: 32600 },
    { orderId: 1002, customer: { name: "Іван Галюк", email: "ivan@example.com" }, items: ["Монітор"], total: 8500 },
    { orderId: 1003, customer: { name: "Денис Шликова", email: "denys@example.com" }, items: ["Навушники", "Клавіатура"], total: 3000 },
    { orderId: 1004, customer: { name: "Марія Шевчук", email: "maria@example.com" }, items: ["Смартфон"], total: 21000 },
    { orderId: 1005, customer: { name: "Уляна Хшановська", email: "ulyana@example.com" }, items: ["Мишка", "Навушники"], total: 2400 }
];

function getTotalSpentByCustomer(list, customerName) {
    return list
        .filter(order => order.customer.name.toLowerCase() === customerName.toLowerCase())
        .reduce((sum, order) => sum + order.total, 0);
}

function showTotalSpent() {
    const customerName = getNameWithSpaces("Введіть ім'я клієнта:");
    const total = getTotalSpentByCustomer(orders, customerName);

    if (total === 0) {
        showLines("out5", ["Замовлень цього клієнта не знайдено"]);
    } else {
        showLines("out5", [`Клієнт ${customerName} витратив: ${total} грн`]);
    }
}


const salesProducts = [
    { productId: 1, name: "Ноутбук", price: 32000 },
    { productId: 2, name: "Смартфон", price: 21000 },
    { productId: 3, name: "Навушники", price: 1800 },
    { productId: 4, name: "Мишка", price: 600 }
];

const purchases = [
    { purchaseId: 1, productId: 1, quantity: 2 },
    { purchaseId: 2, productId: 3, quantity: 5 },
    { purchaseId: 3, productId: 2, quantity: 1 },
    { purchaseId: 4, productId: 4, quantity: 10 },
    { purchaseId: 5, productId: 3, quantity: 3 },
    { purchaseId: 6, productId: 1, quantity: 1 }
];

function getTotalSales(productList, purchaseList) {
    return purchaseList.reduce((sales, purchase) => {
        const product = productList.find(item => item.productId === purchase.productId);

        if (!product) {
            return sales;
        }

        sales[product.name] = (sales[product.name] || 0) + product.price * purchase.quantity;
        return sales;
    }, {});
}

function showTotalSales() {
    const sales = getTotalSales(salesProducts, purchases);
    const lines = Object.keys(sales).map(name => `${name}: ${sales[name]} грн`);
    showLines("out6", lines);
}