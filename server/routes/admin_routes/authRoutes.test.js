// const request = require('supertest')
// import app from '../../index.js'
// const mongoose = require('mongoose')

// describe('Auth Endpoints', () => {


//     it('should create a new user', async () => {
//         const res = await request(app)
//             .post('/authRoutes/register')
//             .send({
//                 username: 'jude',
//                 email: 'jude4@gmail.com',
//                 password: 'Qwerty!12',
//                 gender: 'male',
//                 birthday: '06/09/2000'
//             })
//         expect(res.statusCode).toEqual(201)
//         expect(res.body).toHaveProperty('result')
//     })

//     it('should return 200 and a token for valid credentials', async () => {
//         const res = await request(app)
//             .post('/authRoutes/login')
//             .send({
//                 login: 'jude4@gmail.com',
//                 password: 'Qwerty!12'
//             });

//         // Log only if there is an unexpected error
//         if (res.statusCode !== 200) {
//             console.error(`Unexpected status code: ${res.statusCode}`, res.body);
//         }

//         expect(res.statusCode).toEqual(200);
//         expect(res.body).toHaveProperty('token');
//     });

//     afterAll(async () => {
//         mongoose.connection.close()
//     });
// })