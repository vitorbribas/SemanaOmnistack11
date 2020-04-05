const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const faker = require('faker/locale/pt_BR');

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
        name: faker.company.companyName(),
        email: faker.internet.email(),
        whatsapp: faker.phone.phoneNumberFormat().replace(/[()]|[" "]|[-]/gi,""),
        city: faker.address.city(),
        uf: faker.address.stateAbbr()
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