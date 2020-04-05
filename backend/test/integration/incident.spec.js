const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const faker = require('faker');

describe('Incident', () => {
  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  });

  it('should be able to create a new Incident', async () => {
    const response = await request(app)
      .post('/incidents')
      .set('Authorization', '1edf504b')
      .send({
        title: faker.lorem.sentence(),
        description: faker.commerce.price(),
        value: faker.commerce.price()
      });

    expect(response.body).toHaveProperty('id');
  });
});