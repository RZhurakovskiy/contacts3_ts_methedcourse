var persons = [
    {
        type: 'admin',
        name: 'Иван Петров',
        age: 27,
        role: 'Администратор',
    },
    {
        type: 'user',
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        type: 'admin',
        name: "Дмитрий Астафьев",
        age: 27,
        role: "Администратор"
    },
];
var logPerson = function (person) {
    var information;
    if (person.type === 'admin') {
        information = person.role;
    }
    else {
        information = person.group;
    }
    console.log("".concat(person.name, ", ").concat(person.age, ", ").concat(information));
};
persons.forEach(logPerson);
