interface User {
      type: "user";
      name: string;
      age: number;
      group: string;
}

interface Admin {
      type: "admin";
      name: string;
      age: number;
      role: string;
}

type Person = User | Admin;

const persons: Person[] = [
      {
            type: "admin",
            name: "Иван Петров",
            age: 27,
            role: "Администратор",
      },
      {
            type: "user",
            name: "Марат Aляуддинов",
            age: 20,
            group: "Музыкант",
      },
      {
            type: "admin",
            name: "Дмитрий Астафьев",
            age: 27,
            role: "Администратор",
      },
];

const logPerson = (person: Person) => {
      let information: string;
      if (person.type === "admin") {
            information = person.role;
      } else {
            information = person.group;
      }
      console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);
