const request = require('supertest');
const app = require('../server');


describe('post Product', () => {

    it('test post product', async() => {
        await request(app).post('/product')
            .send({ title: 'test', description: 'teste desc', price: 'teste 10', category: 'teste' })
            .expect(201)
    })
});