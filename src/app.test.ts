// const app = require("./app");
// const supertest = require("supertest");

// describe("POST /accounts", () => {
//   describe("Given a valid Account Details", () => {

//     test("should respond with a 200 status code", async () => {
//       const response = await request(app).post("/accounts").send({
//         accountName: "chetan Dhanvij",
//         accountNumber: "54456456456456",
//         accountType: "SAVING",
//         currency: "NOK"
//     })
//       expect(response.statusCode).toBe(200)
//     })

//     // test("should specify json in the content type header", async () => {
//     //   const response = await request(app).post("/users").send({
//     //     username: "username",
//     //     password: "password"
//     //   })
//     //   expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//     // })
//     // test("response has userId", async () => {
//     //   const response = await request(app).post("/users").send({
//     //     username: "username",
//     //     password: "password"
//     //   })
//     //   expect(response.body.userId).toBeDefined()
//     // })
//   })

// //   describe("when the username and password is missing", () => {
// //     test("should respond with a status code of 400", async () => {
// //       const bodyData = [
// //         {username: "username"},
// //         {password: "password"},
// //         {}
// //       ]
// //       for (const body of bodyData) {
// //         const response = await request(app).post("/users").send(body)
// //         expect(response.statusCode).toBe(400)
// //       }
// //     })
// //   })

// })