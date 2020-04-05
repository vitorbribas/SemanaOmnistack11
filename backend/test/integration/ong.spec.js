const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeAll( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Green Peance3",
        email: "greenpeace@gmail.com",
        whatsapp: "61998174745",
        city: "Brasilia",
        uf: "DF"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });

  it('should be able to list all ONGs', async () => {
    const response = await request(app)
      .get('/ongs')

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(
          {id: expect.any(String)}
        )
      ])
    );
  })
});