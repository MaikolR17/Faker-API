const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;

class Usuario {
    constructor() {
        this._id = faker.datatype.uuid;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}


class Empresa {
    constructor() { 
        this._id = faker.datatype.uuid;
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        };
    }
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get('/api/users/new', (req, res) => {
  const newUser = new Usuario();
  console.log(new Usuario());
  res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = new Empresa();
    console.log(new Empresa());
  res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
  const newUser = new Usuario();
  const newCompany = new Empresa();
  res.json({
    user: newUser,
    company: newCompany,
  });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});