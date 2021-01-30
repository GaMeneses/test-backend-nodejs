const request = require('supertest');
const app = require('../index');


TestInsertProduct('insert Product', async() => {
    const response = await supertest(app)
        .post('/product').send({ title: "test 1", description: "desc 1", price: "price test", category: "category test" });

    expect(response.statusCode).toEqual(201);

})