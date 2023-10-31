"use strict";
const persons = [
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
const logPerson = (person) => {
    let information;
    if (person.type === 'admin') {
        information = person.role;
    }
    else {
        information = person.group;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
};
persons.forEach(logPerson);
