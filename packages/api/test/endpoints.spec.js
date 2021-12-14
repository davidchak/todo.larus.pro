import request from 'supertest';

beforeAll(){
  const app = {}
}

describe('Endpoints test', () => {
  it('[/api/user] - get', async () => {
    const res = await request(app).get('/api/user');
    expect(res.statusCode).toBe(200)
  })
})

